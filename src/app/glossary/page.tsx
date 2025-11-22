import Header from "@/components/sections/header";
import Footer from "@/components/sections/footer";

export default function GlossaryPage() {
  const glossaryTerms = [
    {
      letter: "A",
      terms: [
        { term: "Air Gap", definition: "The unobstructed vertical distance through air between the outlet of a water supply pipe and the overflow rim of the fixture it supplies." },
        { term: "Angle Stop", definition: "A shutoff valve between the water pipes and a fixture, typically located under sinks and toilets." }
      ]
    },
    {
      letter: "B",
      terms: [
        { term: "Backflow", definition: "The unwanted reverse flow of water or other substances through a cross-connection into the potable water supply system." },
        { term: "Ballcock", definition: "A valve that controls the flow of water into a toilet tank." },
        { term: "Blocked Drain", definition: "A drain pipe that is partially or completely obstructed, preventing proper water flow." }
      ]
    },
    {
      letter: "C",
      terms: [
        { term: "CCTV Inspection", definition: "Using a camera system to inspect the interior of drain pipes to identify blockages, cracks, or other issues." },
        { term: "Certificate of Compliance (COC)", definition: "An official document certifying that plumbing installations comply with local regulations." },
        { term: "Cistern", definition: "The tank that holds water for flushing a toilet." }
      ]
    },
    {
      letter: "D",
      terms: [
        { term: "Drain", definition: "A pipe that carries wastewater away from fixtures." },
        { term: "Drain Snake", definition: "A flexible tool used to clear blockages in drains." },
        { term: "Drip", definition: "A small, continuous leak from a faucet or pipe." }
      ]
    },
    {
      letter: "F",
      terms: [
        { term: "Faucet", definition: "A device that controls the flow of water from a pipe (also called a tap)." },
        { term: "French Drain", definition: "A trench filled with gravel and a perforated pipe used to redirect surface water and groundwater away from an area." },
        { term: "Flow Rate", definition: "The volume of water passing through a pipe or fixture in a given time period." }
      ]
    },
    {
      letter: "G",
      terms: [
        { term: "Geyser", definition: "South African term for a water heater that heats and stores hot water for domestic use." },
        { term: "Greywater", definition: "Wastewater from baths, showers, washing machines, and sinks (excludes toilet waste)." },
        { term: "Gully", definition: "An exterior drain that collects wastewater from multiple sources." }
      ]
    },
    {
      letter: "H",
      terms: [
        { term: "High-Pressure Jetting", definition: "A method of cleaning drains using high-pressure water to remove blockages and buildup." },
        { term: "Hose Bib", definition: "An outdoor faucet with a threaded spout for attaching a hose." }
      ]
    },
    {
      letter: "L",
      terms: [
        { term: "Leak Detection", definition: "The process of identifying the source and location of water leaks using various methods including electronic equipment." },
        { term: "P-Trap", definition: "A U-shaped pipe under sinks that holds water to prevent sewer gases from entering the building." }
      ]
    },
    {
      letter: "P",
      terms: [
        { term: "Pipe Relining", definition: "A trenchless method of repairing damaged pipes by inserting a resin-coated liner that hardens to form a new pipe within the old one." },
        { term: "Potable Water", definition: "Water that is safe for drinking and cooking." },
        { term: "Pressure", definition: "The force exerted by water in a plumbing system, measured in PSI or bar." }
      ]
    },
    {
      letter: "S",
      terms: [
        { term: "Septic Tank", definition: "An underground chamber where wastewater is treated through bacterial activity before being dispersed into a drain field." },
        { term: "Sewer Line", definition: "The main pipe that carries wastewater from your property to the municipal sewer system or septic tank." },
        { term: "Shutoff Valve", definition: "A valve that stops the flow of water to a fixture or section of plumbing." }
      ]
    },
    {
      letter: "T",
      terms: [
        { term: "Trap", definition: "A curved section of pipe that holds water to prevent sewer gases from entering the building." },
        { term: "Trenchless Technology", definition: "Methods of repairing or replacing underground pipes without extensive excavation." }
      ]
    },
    {
      letter: "V",
      terms: [
        { term: "Valve", definition: "A device that regulates, directs, or controls the flow of water by opening, closing, or partially obstructing passageways." },
        { term: "Vent", definition: "A pipe that allows air into the plumbing system to maintain proper pressure and drainage." }
      ]
    },
    {
      letter: "W",
      terms: [
        { term: "Water Hammer", definition: "A banging noise in pipes caused by sudden changes in water flow or pressure." },
        { term: "Water Pressure", definition: "The force that pushes water through pipes, measured in pounds per square inch (PSI)." }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-12">
        <div className="container">
          <h1 className="text-4xl font-bold text-center mb-4 text-black">
            Plumbing Glossary
          </h1>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Your comprehensive guide to plumbing terminology and definitions
          </p>

          <div className="max-w-5xl mx-auto">
            {glossaryTerms.map((section, index) => (
              <div key={index} className="mb-10">
                <div className="bg-[var(--color-primary-red)] text-white text-3xl font-bold p-4 mb-4">
                  {section.letter}
                </div>
                <div className="space-y-4">
                  {section.terms.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="border-l-4 border-[var(--color-primary-red)] pl-6 py-2"
                    >
                      <h3 className="text-xl font-bold text-black mb-2">
                        {item.term}
                      </h3>
                      <p className="text-gray-600">
                        {item.definition}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
