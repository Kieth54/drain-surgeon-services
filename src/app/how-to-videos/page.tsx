import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function HowToVideosPage() {
  const videos = [
    {
      title: "How to Unclog a Drain",
      description: "Learn basic techniques to clear minor drain blockages before calling a professional.",
      difficulty: "Easy",
      url: "https://www.youtube.com/embed/iR92Txf_7fM",
    },
    {
      title: "Fixing a Leaky Tap",
      description: "Step-by-step guide to repairing a dripping faucet and replacing worn washers.",
      difficulty: "Easy",
      url: "https://www.youtube.com/embed/tjZXjd8KrAM",
    },
    {
      title: "What to Do in a Plumbing Emergency",
      description: "Essential steps to minimize damage when you have a burst pipe or major leak.",
      difficulty: "Important",
      url: "https://www.youtube.com/embed/DAY1BS3Md_c",
    },
    {
      title: "Basic Geyser Maintenance",
      description: "Regular maintenance tasks to keep your geyser running efficiently and safely.",
      difficulty: "Medium",
      url: "https://www.youtube.com/embed/pidk3Yxg9xg",
    },
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#f3f4f6,_#ffffff)] page-fade">
      <Header />
      <main className="relative overflow-hidden pb-16 pt-10 sm:pt-14">
        <div
          className="hero-animated-blob pointer-events-none -left-40 top-32 h-64 w-64 hidden lg:block opacity-40"
          aria-hidden="true"
        />
        <div
          className="hero-animated-blob pointer-events-none right-[-60px] top-1/2 h-72 w-72 hidden lg:block opacity-30"
          aria-hidden="true"
        />
        <div
          className="hero-animated-blob pointer-events-none -left-24 bottom-[-80px] h-56 w-56 hidden lg:block opacity-35"
          aria-hidden="true"
        />

        <section className="bg-white">
          <div className="container max-w-4xl">
            <div className="relative text-center">
              <div
                className="hero-animated-blob -left-24 -top-24 h-56 w-56 hidden lg:block"
                aria-hidden="true"
              />
              <div
                className="hero-animated-blob -right-16 bottom-[-40px] h-48 w-48 hidden lg:block opacity-60"
                aria-hidden="true"
              />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9f9f9f]">
                How‑to videos
              </p>
              <h1 className="mt-3 text-3xl font-bold leading-tight text-center text-black sm:text-[34px] lg:text-[38px]">
                Simple plumbing tips
                <span className="text-primary-red"> from the experts</span>
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-[#666666] max-w-2xl mx-auto">
                Short, practical videos to help you understand basic plumbing tasks and emergency steps – and
                to know exactly when it&apos;s safer to stop and call The Drain Surgeon.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="container max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
              {videos.map((video, index) => (
                <article
                  key={index}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[#e5e5e5] bg-white shadow-sm transition hover:border-primary-red hover:shadow-[0_18px_50px_rgba(15,23,42,0.15)]"
                >
                  <div className="relative h-40 w-full overflow-hidden bg-black/5">
                    {video.url ? (
                      <div className="aspect-video h-full w-full">
                        <iframe
                          className="h-full w-full rounded-none"
                          src={video.url}
                          title={video.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <div className="aspect-video flex h-full w-full items-center justify-center bg-gradient-to-br from-[#111827] via-[#1f2937] to-[#4b5563]">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-primary-red shadow-lg">
                          <span className="ml-1 text-2xl">▶</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-2 flex items-center justify-between text-[11px]">
                      <span
                        className={`font-semibold ${
                          video.difficulty === "Easy"
                            ? "text-[--color-success-green]"
                            : video.difficulty === "Medium"
                            ? "text-[--color-yellow-gold]"
                            : "text-[--color-primary-red]"
                        }`}
                      >
                        {video.difficulty}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold mb-2 text-black">{video.title}</h3>
                    <p className="text-[13px] text-[#555555] leading-relaxed mb-4 line-clamp-4">
                      {video.description}
                    </p>
                    <button
                      type="button"
                      className="mt-auto inline-flex items-center text-[12px] font-semibold text-primary-red hover:underline"
                    >
                      Watch video
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="mb-12 rounded-2xl bg-[#f5f5f5] px-6 py-7 sm:px-8">
              <h2 className="text-center text-lg font-bold mb-3 text-black">Important safety notice</h2>
              <p className="text-center text-[13px] text-[#555555] mb-2 max-w-2xl mx-auto">
                These videos are for educational purposes only. We encourage DIY maintenance for simple tasks,
                but complex repairs, electrical connections and pressure systems should always be handled by a
                qualified plumber.
              </p>
              <p className="text-center text-[13px] font-semibold text-[#333333]">
                When in doubt, contact The Drain Surgeon for safe, professional service.
              </p>
            </div>

            <div className="rounded-2xl bg-primary-red text-white px-6 py-8 text-center shadow-[0_18px_60px_rgba(15,23,42,0.18)]">
              <h2 className="text-lg font-bold mb-2">Need professional help instead?</h2>
              <p className="text-sm text-red-50 mb-4 max-w-xl mx-auto">
                Our experienced plumbers are available 24/7 for leaks, burst pipes, geyser problems and any
                plumbing job that&apos;s too big or risky to tackle on your own.
              </p>
              <a
                href="tel:+27861758623"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-2.5 text-xs sm:text-sm font-semibold text-primary-red shadow-md transition hover:bg-[#f5f5f5]"
              >
                Call +27 861 758 623
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
