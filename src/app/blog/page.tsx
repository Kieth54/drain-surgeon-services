import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function BlogPage() {
  const blogPosts = [
    {
      title: "10 Signs You Need Emergency Plumbing Service",
      excerpt: "Learn to recognize the warning signs that require immediate professional attention to prevent costly water damage.",
      date: "2023-12-15",
      category: "Emergency Tips"
    },
    {
      title: "How to Maintain Your Geyser for Longevity",
      excerpt: "Regular maintenance can extend your geyser's lifespan and improve efficiency. Here's what you need to know.",
      date: "2023-12-10",
      category: "Maintenance"
    },
    {
      title: "Understanding Your Home's Drainage System",
      excerpt: "A comprehensive guide to how your drainage system works and common issues to watch out for.",
      date: "2023-12-05",
      category: "Education"
    },
    {
      title: "The Benefits of Professional Leak Detection",
      excerpt: "Hidden leaks can cause significant damage. Discover how electronic leak detection can save you money.",
      date: "2023-11-28",
      category: "Services"
    },
    {
      title: "Preparing Your Plumbing for Winter",
      excerpt: "Essential tips to protect your pipes and plumbing system during the colder months.",
      date: "2023-11-20",
      category: "Seasonal Tips"
    },
    {
      title: "Common Causes of Blocked Drains",
      excerpt: "Understanding what causes blockages can help you prevent them. Learn about the most common culprits.",
      date: "2023-11-15",
      category: "Prevention"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="container">
          <h1 className="text-4xl font-bold text-center mb-4 text-[--color-primary-red]">Plumbing Blog</h1>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
            Expert tips, advice, and insights from The Drain Surgeon team
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white border-2 border-[--color-medium-gray] rounded-lg overflow-hidden hover:border-[--color-primary-red] transition-colors hover:shadow-lg">
                <div className="p-6">
                  <div className="text-sm text-[--color-primary-red] font-bold mb-2">{post.category}</div>
                  <h2 className="text-xl font-bold mb-3 text-[--color-black] hover:text-[--color-primary-red] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-[--color-dark-gray] mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[--color-dark-gray]">{post.date}</span>
                    <a href="#" className="text-[--color-primary-red] font-bold hover:underline">
                      Read More →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="bg-[--color-light-gray] p-8 rounded-lg text-center mt-12 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Need Plumbing Help?</h2>
            <p className="mb-6">
              Don't wait for a plumbing emergency. Our experts are available 24/7.
            </p>
            <a href="tel:+27861758623" className="inline-block bg-[--color-primary-red] text-white font-bold py-3 px-8 rounded hover:bg-[--color-deep-red] transition-colors">
              Call +27 861 758 623
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
