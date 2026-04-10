"use client";

const clients = [
  { name: "HexClad", logo: "/images/logos/hexclad.svg" },
  { name: "Netflix", logo: "/images/logos/netflix.svg" },
  { name: "NGHTMRE", logo: "/images/logos/nghtmre.svg" },
  { name: "Bloomhouse", logo: "/images/logos/bloomhouse.png" },
  { name: "Atlantic Records", logo: "/images/logos/atlanticrecords.svg" },
  { name: "Typhur", logo: "/images/logos/typhur.png" },
  { name: "Slander", logo: "/images/logos/slander.png" },
  { name: "Campo Grande", logo: "/images/logos/campogrande.svg" },
  { name: "AEG", logo: "/images/logos/aeg.svg" },
  { name: "LongevityRx", logo: "/images/logos/longevityrx.svg" },
  { name: "Afrojack", logo: "/images/logos/afrojack.svg" },
  { name: "Santa Barbara Winery", logo: "/images/logos/sbwinery.png" },
  { name: "Island Records", logo: "/images/logos/islandrecords.svg" },
  { name: "Frök", logo: "/images/logos/frok.png" },
  { name: "Deorro", logo: "/images/logos/deorro.svg" },
  { name: "McKillan's", logo: "/images/logos/mckillans.png" },
  { name: "Hollywood Records", logo: "/images/logos/hollywoodrecords.png" },
  { name: "Gastronauts Guide", logo: "/images/logos/gastronauts.svg" },
  { name: "Nitti Gritti", logo: "/images/logos/nittigritti.svg" },
  { name: "Magna Carta", logo: "/images/logos/magnacarta.png" },
  { name: "Cal Rice", logo: "/images/logos/calrice.svg" },
  { name: "Prodigy Artists", logo: "/images/logos/prodigyartists.svg" },
  { name: "TeachMe.To", logo: "/images/logos/teachmeto.svg" },
];

export default function ClientLogos() {
  const doubled = [...clients, ...clients];

  return (
    <section className="py-10 border-y border-[#E8E4DE] overflow-hidden bg-[#F0EDE8]/50">
      <div className="flex items-center animate-marquee whitespace-nowrap h-10 md:h-12">
        {doubled.map((client, i) => (
          <img
            key={`${client.name}-${i}`}
            src={client.logo}
            alt={client.name}
            width={120}
            height={40}
            className="mx-10 md:mx-14 h-8 md:h-10 w-auto object-contain select-none opacity-50 hover:opacity-80 transition-opacity duration-300"
            style={{ filter: "brightness(0)" }}
            draggable={false}
          />
        ))}
      </div>
    </section>
  );
}
