import LayoutCompany from "./_components/LayoutCompany";
import ImageCardOne from "../../assets/images/why-1.jpg";
import ImageCardTwo from "../../assets/images/why-2.jpg";
import ImageCardThree from "../../assets/images/why-3.jpg";
import ImageCardFourth from "../../assets/images/why-4.jpg";

const WhyChooseUsSection = () => {
  const cards = [
    {
      id: 1,
      image: ImageCardOne, // Ganti dengan URL gambar asli
      title: "Aman dan Terpercaya",
    },
    {
      id: 2,
      image: ImageCardTwo,
      title: "Mudah dan Fleksibel",
    },
    {
      id: 3,
      image: ImageCardThree,
      title: "Layanan Nasabah",
    },
    {
      id: 4,
      image: ImageCardFourth,
      title: "Keuangan Inovatif",
    },
  ];

  return (
    <LayoutCompany>
      <div>
        <h1 className="text-4xl text-company-950 font-inter-black text-center">
          Kelola keuanganmu sekarang di BPR Restu Dewata
        </h1>
        <p className="text-company-950 text-center mt-2">
          Tumbuh Bersama BPR Restu Dewata, Wujudkan Keuangan yang Lebih Stabil
          dan Berkembang.
        </p>
      </div>

      {/* Grid Layout untuk Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden relative hover:shadow-xl transition-all duration-300"
          >
            <div
              className="h-96 bg-cover bg-center"
              style={{ backgroundImage: `url(${card.image})` }}
            ></div>
            <div className="absolute inset-0 hover:bg-gradient-b hover:from-company-950 hover:opacity-60 bg-gradient-to-t from-blue-600 to-transparent opacity-70"></div>
            <div className="absolute bottom-0 w-full text-white text-center py-4 text-2xl">
              {card.title}
            </div>
          </div>
        ))}
      </div>
    </LayoutCompany>
  );
};

export default WhyChooseUsSection;
