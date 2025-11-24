"use client";

import { useEffect, useRef, useState } from 'react';

// Global timer manager to reduce the number of active setInterval calls
class TimerManager {
  private static instance: TimerManager;
  private timers: Map<string, { interval: number; callbacks: Set<() => void> }> = new Map();
  private activeIntervals: Map<string, NodeJS.Timeout> = new Map();

  static getInstance(): TimerManager {
    if (!TimerManager.instance) {
      TimerManager.instance = new TimerManager();
    }
    return TimerManager.instance;
  }

  subscribe(key: string, interval: number, callback: () => void): () => void {
    if (!this.timers.has(key)) {
      this.timers.set(key, { interval, callbacks: new Set() });
      this.startTimer(key, interval);
    }

    const timer = this.timers.get(key)!;
    timer.callbacks.add(callback);

    // Return unsubscribe function
    return () => {
      timer.callbacks.delete(callback);
      if (timer.callbacks.size === 0) {
        this.stopTimer(key);
        this.timers.delete(key);
      }
    };
  }

  private startTimer(key: string, interval: number): void {
    const timer = this.timers.get(key);
    if (!timer) return;

    const intervalId = setInterval(() => {
      timer.callbacks.forEach(callback => {
        try {
          callback();
        } catch (error) {
          console.error(`Timer callback error for ${key}:`, error);
        }
      });
    }, interval);

    this.activeIntervals.set(key, intervalId);
  }

  private stopTimer(key: string): void {
    const intervalId = this.activeIntervals.get(key);
    if (intervalId) {
      clearInterval(intervalId);
      this.activeIntervals.delete(key);
    }
  }

  // Cleanup all timers (useful for development)
  cleanup(): void {
    this.activeIntervals.forEach(intervalId => clearInterval(intervalId));
    this.activeIntervals.clear();
    this.timers.clear();
  }
}

export function useOptimizedTimer(
  key: string,
  interval: number,
  callback: () => void,
  enabled: boolean = true
): void {
  const callbackRef = useRef(callback);
  const [isEnabled, setIsEnabled] = useState(enabled);

  // Update callback ref
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Subscribe to timer manager
  useEffect(() => {
    if (!isEnabled) return;

    const manager = TimerManager.getInstance();
    const unsubscribe = manager.subscribe(key, interval, () => {
      callbackRef.current();
    });

    return unsubscribe;
  }, [key, interval, isEnabled]);

  // Pause/resume functionality
  useEffect(() => {
    setIsEnabled(enabled);
  }, [enabled]);
}

// Hook for intersection observer to pause timers when not visible
export function useVisibilityOptimizedTimer(
  key: string,
  interval: number,
  callback: () => void,
  elementRef?: React.RefObject<HTMLElement | null>
): void {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!elementRef?.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [elementRef]);

  useOptimizedTimer(key, interval, callback, isVisible);
}
