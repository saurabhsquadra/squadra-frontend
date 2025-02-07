import Image from "next/image";
import React from "react";

const WhatWeDo = () => {
  // Image URLs (replace with your actual image URLs)
  const images = [
    "https://s3-alpha-sig.figma.com/img/86e3/aeb8/0673eefd1150c031a40fc9dd3836eadf?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=j7BV1Z7JseuTf659plauDb2-r6m-7dtOHhwLrYr10IhjzrP2D2fw8EQSGSePSDg6o3zWvySWuVYIwDedHYFfpXXqrZdR5A36D6sR4yCiMJAiVd1KD9NYeP0lDtuxrS8Ptj1-g~PsyXJtpWDIZkixem9BYid5pTv0TyYbXDz5qyHXCiIkh~PzjW9ZYEeoQZLbIYmisNsZYTi5H8~XHZopND8CwKMzf7n5a2LbqmNe6WWrvSUJMwpZD9knaGCFcH26PT3jWJ2xbz9uhi~wBC4qfsxHEXAlwj2Xv8fZAbfE8QfJO8nnms1y3nue3IQLmAAQdJ9M71yxjPZWq-fsTDqDhA__",
    "https://s3-alpha-sig.figma.com/img/93e6/b089/49afa385dca7300937c810f64f97ffa2?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=UjzO9cda5ecstnKUU-mpqbiKsFh8SoV77K6P-Vgudv1AV9LqDFfRRj5HKSlOvYf-xVzVukDGUbBJNk40c8zz9wNKjtUMCdxgJbnvvJy-~ZdZJiCkIoy916ARkbexyrfohu7Ry8dnLwsaaEflFrRE~9WUFkMdtyQdJ3cmuvY7~cr04fgFCPC9Nw4rva8622~g0OcQKg4KPIVpsT6kTo2Aqqliro2dwx9kg3J3f6FxPY6JhBUMJsyFmaIbLXuOIsOSxghp-EOqDWgRuPuZMN~s5x1f7giJ~a0sTiOegy3Mf3XLDHyOJ09uoi3OSmv3Tgz3GGiT-BaF3PRx8y4tbuBAIw__",
    "https://s3-alpha-sig.figma.com/img/d4c6/d03f/e4c40a5368e300543e3adcdfc8adfe45?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=C3uDF1wakVQ4nFtTb85CLOoLdQYHHrILWqKhq1SdIHtKI1i~~9upaI1VpQML5pe1ktY-rHDxJaX3tVYM5744z~wbdG1oxshh-vJHW4wqvQIIQGbZ0Vf94QKzaezN1ELGvzz9zKLBCUriLwvCbCHu6taubv2q16lS26Lj-ymA0fc0busz7pFhXiYpjE7Dd7WBqjOjC0R1M3Cej-X2aY9cEeOVIU~OjU~eu5ALmLJ-MI5hpeyRwcIT0YQaHTRMPvSb3RaeTzCbefYx9Bv4KRmsgk4KeQMVtHYa-SuyD9qH5m452A2tIrhjM0WFllv3XcIWNYT1ZNW6ck-J0xbd7LwZIA__",
    "https://s3-alpha-sig.figma.com/img/e491/5f22/36c02318233961ffbb65eee4ab480b15?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jUjGdHJGCAG8kL-UvzmreYW~cS9doJPh9sKaYavOLfnjhh-d~Z9wyhQdEp7ztV-uh9Yla1T8rYTQV8BfzXwPUiMHtwplpTneSrCMomIVeBjaphaHsXLRZU7cKP3uTOhgG7eReKPBOjnuw0J-Lkw6Lujw2woHZU5xbHchNbWPoK5Z1dJZQjYAkHO-G4qyqDlfZ9JsHs9C50E4eeJjeWK4~HVZZf7CQfcTPGhKy1r9~zhUjG7va8nkqVK4lrX8nYbyeiGG3V5Stv8hcmkhk~cgv~uCLoYSu~0bshDM0TVoFxMtmMdrggenKSvrPgCo5zDjGzkjtQTAXQyolKj1M2ClKA__",
  ];

  // Text to display over each image
  const textOverlays = ["STRATEGY", "CREATIVITY", "ANALYTICS", "OPTIMIZATION"];

  return (
    <div className="w-full max-w-[1400px] bg-black py-20">
      {/* Centered "WHAT WE DO" Heading */}
      <div className="text-center text-white uppercase text-xl font-bold mb-10">
        WHAT WE DO
      </div>

      {/* Grid of Images with Text Overlays */}
      <div className="grid grid-cols-1 gap-4 md:gap-6 lg:gap-8 px-4">
        {images.map((image, index) => (
          <div key={index} className="relative h-[310px] md:h-[560px] lg:h-[681px]">
            {/* Image */}
            <Image fill
              src={image}
              alt={`What We Do ${index + 1}`}
              className="w-full h-full object-cover"
            />

            {/* Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-5xl md:text-8xl lg:text-9xl font-bold uppercase text-center">
                {textOverlays[index]}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
