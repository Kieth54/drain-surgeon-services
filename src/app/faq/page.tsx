import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function FAQPage() {
  const faqs = [
    {
      question: "How do I unclog a drain at home?",
      answer:
        "Start by checking that the plug is opening fully and remove any visible hair or debris. Use a plunger with enough water in the basin to create pressure. If that doesn’t work, you can carefully try a chemical drain cleaner. If the drain is still blocked, it’s safest to call a professional drain unblocking service.",
    },
    {
      question: "What causes water hammer in pipes?",
      answer:
        "Water hammer is the loud banging noise you sometimes hear in pipes when water flow is stopped suddenly. It is usually caused by high water pressure or a lack of air chambers in the system. Installing water hammer arrestors or adjusting shutoff valves can often reduce the problem.",
    },
    {
      question: "Is it safe to use chemical drain cleaners?",
      answer:
        "Chemical cleaners should be used sparingly. They can damage older or plastic pipes and may stain surrounding surfaces. They are best used as a temporary fix. For stubborn or recurring clogs, a professional drain cleaning service is a safer long-term solution.",
    },
    {
      question: "What should I do if a pipe bursts?",
      answer:
        "Turn off your main water shutoff valve immediately to stop the flow of water. Open nearby taps to drain excess water from the system, then call an emergency plumber to assess and replace the damaged pipe.",
    },
    {
      question: "How do I know if my drain is blocked?",
      answer:
        "Warning signs include gurgling sounds, water draining slowly, unpleasant smells from drains or water backing up into basins, showers or toilets. If you notice these, schedule a blocked drain inspection before the problem worsens.",
    },
    {
      question: "Why does my shower have weak water pressure?",
      answer:
        "A common cause is mineral build-up in the showerhead. You can remove the head and soak it in vinegar or gently clean the outlet holes. If the pressure is still low throughout the home, there may be a hidden leak or pressure issue that needs professional investigation.",
    },
    {
      question: "Where is my main water shutoff valve?",
      answer:
        "The main shutoff valve is usually near your water meter or along an outside wall where the supply enters the property. It is important to know its exact location so you can quickly shut off the water during leaks or bursts.",
    },
    {
      question: "Why is my water pressure low?",
      answer:
        "Low pressure can be caused by partially blocked pipes, mineral deposits, faulty pressure control valves or hidden leaks. A plumber can test pressures, inspect for restrictions and recommend the right fix for your system.",
    },
    {
      question: "What should I do if my toilet keeps running?",
      answer:
        "First, turn the shutoff valve behind the toilet clockwise to stop the water. Then remove the cistern lid and check whether the flapper, float or chain is stuck or misaligned. If you are unsure or the toilet still runs, call a plumber to service or replace the internal components.",
    },
    {
      question: "Why is my water bill so high?",
      answer:
        "A sudden increase in your water bill may point to a hidden leak, a running toilet or outdated fittings using more water than necessary. Leak detection tests and a quick inspection of toilets and taps can usually pinpoint the cause.",
    },
    {
      question: "What should I do if my geyser is leaking?",
      answer:
        "Turn off the water supply to the geyser and switch off its electrical power at the distribution board. A leaking geyser can cause serious damage if left unattended, so contact a qualified plumber as soon as possible to inspect and repair or replace it.",
    },
  ];

  return (
    <div className="min-h-screen bg-white page-fade">
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
                FAQ & Plumbing Tips
              </p>
              <h1 className="mt-3 text-3xl font-bold leading-tight text-center text-black sm:text-[34px] lg:text-[38px]">
                Frequently asked questions
                <span className="text-primary-red"> & expert tips</span>
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-[#666666] max-w-2xl mx-auto">
                Practical answers to common plumbing questionsfrom unclogging drains and dealing with burst
                pipes to understanding water pressure and geyser problems.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <div className="container max-w-4xl">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-[#eeeeee] bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h2 className="text-sm font-semibold text-black mb-2">{faq.question}</h2>
                  <p className="text-sm text-[#555555]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="container max-w-4xl">
            <div className="rounded-2xl bg-primary-red text-white px-6 py-8 text-center shadow-[0_18px_60px_rgba(15,23,42,0.18)]">
              <h2 className="text-lg font-bold mb-2">Still have a plumbing question?</h2>
              <p className="text-sm text-red-50 mb-4 max-w-xl mx-auto">
                Our friendly team is available 24/7 to talk through your plumbing problem and recommend the
                right solution.
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
