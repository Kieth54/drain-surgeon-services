import Image from "next/image";

const clients = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7f88af8f-c7eb-4c50-add2-b202a0f23e6d-drainsurgeon-co-za/assets/images/mac1-119x75-28.jpg",
    alt: "McDonald's logo",
    width: 119,
    height: 75,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7f88af8f-c7eb-4c50-add2-b202a0f23e6d-drainsurgeon-co-za/assets/images/ppc-150x63-29.jpg",
    alt: "PPC Cement logo",
    width: 150,
    height: 63,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/7f88af8f-c7eb-4c50-add2-b202a0f23e6d-drainsurgeon-co-za/assets/images/vest1-150x25-30.jpg",
    alt: "Bidvest Bank logo",
    width: 150,
    height: 25,
  },
  {
    src: "https://drainsurgeon.co.za/wp-content/uploads/2019/12/transnet_new-150x42.png",
    alt: "Transnet logo",
    width: 150,
    height: 42,
  },
  {
    src: "https://drainsurgeon.co.za/wp-content/uploads/2019/12/cosmopolitan-150x22.png",
    alt: "Cosmopolitan logo",
    width: 150,
    height: 22,
  },
  {
    src: "https://drainsurgeon.co.za/wp-content/uploads/2019/12/trafalgar-150x34.png",
    alt: "Trafalgar logo",
    width: 150,
    height: 34,
  },
  {
    src: "https://drainsurgeon.co.za/wp-content/uploads/2019/12/huurkor-150x48.png",
    alt: "Huurkor logo",
    width: 150,
    height: 48,
  },
  {
    src: "https://drainsurgeon.co.za/wp-content/uploads/2019/12/coke-150x49.png",
    alt: "Coca-Cola logo",
    width: 150,
    height: 49,
  },
  {
    src: "https://drainsurgeon.co.za/wp-content/uploads/2019/12/nestle-150x39.png",
    alt: "Nestlé logo",
    width: 150,
    height: 39,
  },
  {
    src: "https://drainsurgeon.co.za/wp-content/uploads/2019/12/woolworths-150x20.png",
    alt: "Woolworths logo",
    width: 150,
    height: 20,
  },
];

const ClientsSection = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="text-center pt-10">
          <h3 className="text-primary font-bold text-3xl">Our Valued Clients</h3>
        </div>
        <div className="mt-10">
          <div className="flex flex-wrap justify-center items-center gap-x-14 gap-y-10">
            {clients.map((client) => (
              <a key={client.alt} href="#" title={client.alt} className="flex items-center justify-center">
                <Image
                  src={client.src}
                  alt={client.alt}
                  width={client.width}
                  height={client.height}
                  className="max-w-full h-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-12 mb-5">
          <hr className="w-24 mx-auto border-t border-gray-200" />
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;