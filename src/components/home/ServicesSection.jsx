import LayoutBackgroundCompany from "./_components/LayoutBackgroundCompany";
import ImageCardOne from "../../assets/images/products-1.jpg";
import ImageCardTwo from "../../assets/images/products-2.jpg";
import ImageCardThree from "../../assets/images/products-3.jpg";
import ImageCardFourth from "../../assets/images/products-4.jpg";

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      image: ImageCardOne,
      title: "Tabungan Harian",
      tags: ["#photography", "#travel", "#winter"],
    },
    {
      id: 2,
      image: ImageCardTwo,
      title: "Tabungan Berjangka",
      tags: ["#nature", "#hiking", "#explore"],
    },
    {
      id: 3,
      image: ImageCardThree,
      title: "Deposito",
      tags: ["#cityscape", "#night", "#urban"],
    },
    {
      id: 4,
      image: ImageCardFourth,
      title: "Kredit Pinjaman",
      tags: ["#beach", "#ocean", "#relax"],
    },
  ];

  return (
    <LayoutBackgroundCompany>
      <div>
        <h1 className="text-4xl text-company-50 font-inter font-black text-center">
          Pilihan tepat untuk pertumbuhan keuangan Anda
        </h1>
        <p className="text-company-50 text-center mt-2">
          Tumbuh Bersama BPR Restu Dewata, Wujudkan Keuangan yang Lebih Stabil
          dan Berkembang.
        </p>
      </div>

      {/* Grid Layout untuk Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="rounded overflow-hidden shadow-lg bg-company-50 pb-8"
          >
            <img
              className="w-full h-48 object-cover"
              src={service.image}
              alt="Product Images"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-company-950">
                {service.title}
              </div>
              <p className="text-company-950">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            {/* <div className="px-6 pt-4 pb-2">
              {service.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {tag}
                </span>
              ))}
            </div> */}
          </div>
        ))}
      </div>
    </LayoutBackgroundCompany>
  );
};

export default ServicesSection;
