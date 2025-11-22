import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function FindBranchPage() {
  const branches = [
    {
      name: "Johannesburg Branch",
      address: "123 Main Street, Johannesburg, 2000",
      phone: "+27 861 758 623",
      hours: "24/7 Emergency Service"
    },
    {
      name: "Cape Town Branch",
      address: "456 Long Street, Cape Town, 8000",
      phone: "+27 861 758 623",
      hours: "24/7 Emergency Service"
    },
    {
      name: "Durban Branch",
      address: "789 West Street, Durban, 4000",
      phone: "+27 861 758 623",
      hours: "24/7 Emergency Service"
    },
    {
      name: "Pretoria Branch",
      address: "321 Church Street, Pretoria, 0001",
      phone: "+27 861 758 623",
      hours: "24/7 Emergency Service"
    },
    {
      name: "Port Elizabeth Branch",
      address: "654 Main Road, Port Elizabeth, 6001",
      phone: "+27 861 758 623",
      hours: "24/7 Emergency Service"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="container">
          <h1 className="text-4xl font-bold text-center mb-4 text-[--color-primary-red]">Find Your Branch</h1>
          <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
            Locate your nearest Drain Surgeon branch for fast, professional plumbing services
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {branches.map((branch, index) => (
              <div key={index} className="bg-white border-2 border-[--color-primary-red] rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-bold mb-4 text-[--color-primary-red]">{branch.name}</h3>
                <div className="space-y-3 text-[--color-dark-gray]">
                  <p>
                    <strong>Address:</strong><br />
                    {branch.address}
                  </p>
                  <p>
                    <strong>Phone:</strong><br />
                    <a href={`tel:${branch.phone}`} className="text-[--color-primary-red] hover:underline">
                      {branch.phone}
                    </a>
                  </p>
                  <p>
                    <strong>Hours:</strong><br />
                    {branch.hours}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[--color-light-gray] p-8 rounded-lg text-center mt-12 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Don't See Your Area?</h2>
            <p className="mb-6">
              We're constantly expanding our service areas. Call us to check if we service your location.
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
