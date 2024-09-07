import React from "react";

const brandsData = [
  {
    imageSrc:
      "/j4c.png",

    altText: "graygrids",
    link: "#",
  },
  {
    imageSrc:
      "/jk.png",

    altText: "lineicons",
    link: "#",
  },
  {
    imageSrc: "/raheja.png",

    altText: "uideck",
    link: "#",
  },
  {
    imageSrc: "/sunteck.png",
    altText: "ayroui",
    link: "#",
  },
  {
    
    imageSrc: "/a3m.png",
    altText: "ayroui",
    link: "#",
  }
];

export default function Brand1() {
  return (
    <section className="bg-white py-10 dark:bg-dark">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
            <div className="text-lg text-center mx-auto font-semibold text-gray-600">
            Our Clients 
            </div>
          <div className="w-full">
            <div className="flex flex-wrap items-center justify-center">
              {brandsData.map((brand, i) => (
                <SingleImage key={i} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SingleImage = ({ brand }:{brand: any}) => {
  const {imageSrc, altText, link } = brand;
  return (
    <>
      <a
        href={link}
        className="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
      >
        <img src={imageSrc} alt={altText} className="h-10 w-full dark:hidden" />
        <img
          src={ imageSrc }
          alt={altText}
          className="w-full  "
        />
      </a>
    </>
  );
};
