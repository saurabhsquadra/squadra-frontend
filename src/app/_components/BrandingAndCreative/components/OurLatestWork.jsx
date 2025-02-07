import Image from "next/image";
import React from "react";

const ourWorkImages = [
  {
    src: "https://s3-alpha-sig.figma.com/img/e4be/af14/40bfb76226622ddc08e9ccd4d450b6c8?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SpQvn1ca0qO3rIHibo3dhlnWxdVdLpAvRxmUfs1Cv6Ce~pnSj0xPSpY7Tu3AIwnGt4GxoeCx2PhLAtB6XmbaSDU3GW3Mfbtxl0ZTrlZNdGnW8fqxtjKi6MPz0UdxrRFaydvIhZ-iVw5STfIARaFMbsPKScSn3AFXOesdwxy~Ec4rP7ZQGlOQDn2JIxVx5zODaSpAamBaJH30ADRfIhSJCRBBLrnQSxhYsSG49gghRR8VXiIZJynYjzHkNJ2p7isemo-4Z5KWzBg003gfpxuH8wErD2asrz6cyg9iQjo9aQ1lMcyv~MJ898R~aaqV2IlP~CRYcA4kJ~IAQbw80Bq2tQ__",
    alt: "Image 1",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/c9e4/3e95/cf5df9dcc84a7d79a2904bf51db88fef?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WHffkIbUWVYL2egUhsIVpLSL4RsjIN3lzCK4OGv8j2~yXonhhDMPfGk7~u20vif0YpHMa4awUWFgW84T7QPu09tAYn--V0DvWcmVZgMi-k~r6Nq2VA5NvPCEX8LB9K-w2iNVshbZfN2NWHQchtKb4ZbMijf-P9lHlbgAqhP8jDYWyNO7WA8phGboEIVRvcaacPjwIqv48xLzfX3aNbdabHFS7WUEwLqCNOpswaxkHwDKjAoi7kWizsr3WBbG0qo7GearEqFTQjthZYZR-of03JGTzSzWeFbF7~9TKU2VQpTdoc6GvaWKLq14NvIpVRQBYGuUe0kchfkyBulFJdBn8Q__",
    alt: "Image 2",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/9884/f74e/f97142c5bf4cfef87534a1bd9bb5226d?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XR3mvUkuKKbTWJwH2FWO4bG0W0Lj2fc82OhtC3ikMaznGdD2O5QJLF34NdAqUH5oKoesKB8PGcNkiUGpPcemXs-35nMFS3lZdDfjtwqwLdVDznu9FUhZwSEHFdGo52D-4OmTryDzCuMryh4SKlElxE-vM4f3BhBg7FzS~cAYe7QDu2Ds3H6Zu3xphzEao79W4VvcUpDHpPsIR0fNmcHZyUCWvIDBM5Ccb2lgctzt3QW-8MhjFdOauntZpYK579LC1j-x6Y1zOyjsxBQLpE~rjsi4O5GdDEg4cQRCk~Ay1y~zy1lM7jBK-xb1EcIXTg8q3yrrcXYkQfR6cBtJVBVUZA__",
    alt: "Image 3",
  },
  {
    src: "https://s3-alpha-sig.figma.com/img/a8de/bff1/bb9fd5563389bfa562522e53d088585d?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bYUzlDua8bIYAfkUTloimls-r-7NI4fPbVQkQA74ffeMU2PPLD36521VFJg5a2xycMNROXUdoF5j6sC57wxtxTBicnVKsbfV2zrztPikvt3ww9EopNGJrIUJL31vQlJywiFQvN~ozF9c3YS-ZZuaxXKDj6wxR-XEhGPmwOrjT3stRf6~ceMXFvsucgPT9D43k-hYGAiYJfPfUdoHUuiGeQf~LOqEOgUbWKmGE6Js2oDk8Yea0~5uVYOwUk5GcvPuwH62i1Wl~Kt-smAuCqYW7Pn66gYT04DizGxVvz-na8kmRQoZvKsnMCs-aUypghHfUC~0NME0~WIEavlvocG4Vg__",
    alt: "Image 4",
  },
];

const OurLatestWork = () => {
  return (
    <div className="h-fit flex flex-col w-full items-center bg-black">
      <div className="w-full max-w-7xl flex flex-col gap-6 items-center py-[72px] lg:py-40 bg-black">
        <div className="bg-white px-4 py-1 md:px-6 md:py-2 rounded-lg text-[12px] md:text-[14px] lg:text-[16px] font-semibold">
          TOP RATED
        </div>
        <p className="text-6xl text-white text-center">Our Latest works</p>
        <p className="text-gray-500 max-w-96 text-center">
          Expand and win in every market with optimised checkout and payments.
        </p>
      </div>

      {/* Images Section */}
      <div className="w-full px-6 py-12 flex flex-col">
        {[0, 2].map((rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap ">
            <div
              className={`h-[363px] md:h-[721px] lg:h-[468px] py-4 lg:py-2 lg:pr-2 w-full rounded-xl overflow-hidden ${
                rowIndex === 0 ? "lg:w-1/3" : "lg:w-2/3"
              }`}
            >
              <Image fill
                src={ourWorkImages[rowIndex].src}
                alt={ourWorkImages[rowIndex].alt}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div
              className={`h-[157px] md:h-[400px] lg:h-[468px] w-full py-4 lg:py-2 lg:pl-2 rounded-xl overflow-hidden ${
                rowIndex === 0 ? "lg:w-2/3" : "lg:w-1/3"
              }`}
            >
              <Image fill
                src={ourWorkImages[rowIndex + 1].src}
                alt={ourWorkImages[rowIndex + 1].alt}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        ))}
      </div>

      <button className="px-[20px] py-[16px] rounded-xl bg-white">
        View all works ⟶
      </button>
    </div>
  );
};

export default OurLatestWork;
