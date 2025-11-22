import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function HowToVideosPage() {
  const videos = [
    {
      title: "How to Unclog a Drain",
      description: "Learn basic techniques to clear minor drain blockages before calling a professional.",
      difficulty: "Easy"
    },
    {
      title: "Fixing a Leaky Tap",
      description: "Step-by-step guide to repairing a dripping faucet and replacing worn washers.",
      difficulty: "Easy"
    },
    {
      title: "What to Do in a Plumbing Emergency",
      description: "Essential steps to minimize damage when you have a burst pipe or major leak.",
      difficulty: "Important"
    },
    {
      title: "Basic Geyser Maintenance",
      description: "Regular maintenance tasks to keep your geyser running efficiently and safely.",
      difficulty: "Medium"
    },
    {
      title: "Understanding Your Main Water Valve",
      description: "Learn where your main water shutoff valve is and how to use it in an emergency.",
      difficulty: "Easy"
    },
    {
      title: "Preventing Frozen Pipes in Winter",
      description: "Tips and techniques to protect your plumbing during cold weather.",
      difficulty: "Easy"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="container">
          <h1 className="text-4xl font-bold text-center mb-4 text-[--color-primary-red]">How-To Videos</h1>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
            Learn basic plumbing maintenance and emergency procedures from our expert team
          </p>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {videos.map((video, index) => (
                <div key={index} className="bg-white border-2 border-[--color-medium-gray] rounded-lg overflow-hidden hover:border-[--color-primary-red] transition-colors hover:shadow-lg">
                  <div className="aspect-video bg-[--color-light-gray] flex items-center justify-center">
                    <div className="text-6xl">▶️</div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-sm font-bold ${
                        video.difficulty === 'Easy' ? 'text-[--color-success-green]' : 
                        video.difficulty === 'Medium' ? 'text-[--color-yellow-gold]' : 
                        'text-[--color-primary-red]'
                      }`}>
                        {video.difficulty}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-[--color-black]">{video.title}</h3>
                    <p className="text-[--color-dark-gray] mb-4">{video.description}</p>
                    <button className="text-[--color-primary-red] font-bold hover:underline">
                      Watch Video →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[--color-light-gray] rounded-lg p-8 mb-12">
              <h2 className="text-2xl font-bold mb-4 text-center">Important Safety Notice</h2>
              <p className="text-center text-[--color-dark-gray] mb-4">
                These videos are for educational purposes only. While we encourage DIY maintenance 
                for simple tasks, always call a professional plumber for complex repairs or if you're 
                unsure about any procedure.
              </p>
              <p className="text-center font-bold">
                When in doubt, contact The Drain Surgeon for safe, professional service.
              </p>
            </div>

            <div className="bg-[--color-primary-red] text-white p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Need Professional Help?</h2>
              <p className="mb-6">Our experienced plumbers are available 24/7 for all your plumbing needs</p>
              <a href="tel:+27861758623" className="inline-block bg-white text-[--color-primary-red] font-bold py-3 px-8 rounded hover:bg-[--color-light-gray] transition-colors">
                Call +27 861 758 623
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
