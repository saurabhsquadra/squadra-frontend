
import Image from "next/image";
import { InfiniteSlider } from "@/components/ui/infinite-slider";

const cardStyles = [
  {
    bg: "bg-blue-500",
    text: "1",
    image:
      "https://s3-alpha-sig.figma.com/img/aeaa/1e68/dabb1cb0c5b86d53f6757676a718effd?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=HHE541t6KTzOO2GOGvvfVEzllE5qstxEUFKqWIHQGYWO8AEZAhSSX6StWIB18FtrFnSNrZXKWb5sRkx9fiM4tYfP9swXtbE-uwHhStVWiV1V3N8gzkFTl0d95rmJj6yrM00bf5Ys4k0ius-S3OCwQp4vtbimXE6c3KKCH-RrhPuL~BfPfmrxVimZxAqZog~4XSqZAVIDMLZXbPjwQ1bXozHn6RKXmGAAYHa5aLFJkBIXDdJtnpHtT4MQ-tBU5Q-8Ssj169TYzc7OUXLUcBgMEzklkPMJxknLZguZupZInCWTXwYhiWUuEeV6nnPel-sLaQ~GOJSNAPQB9Ah1gsmf0w__",
  },
  {
    bg: "bg-red-500",
    text: "2",
    image:
      "https://s3-alpha-sig.figma.com/img/410f/03ad/39847c1e30c66c7108968b80f4c26209?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=E2j-UEydV1LPkXWtZVa3t8TjVYJV7L5fRaKL8LOvijQR3RPof5R5b8uaiF1yz6DuSm4UeFNrPiRqKzifTKnoslhGbRjMgKOnJc6XbOtg7nyQsYRx8Z61kxVoT-FJrhVYAiozQKCjKp3TOQqP4Bj9KFr84QGbINkPSpOstIv5r-hwY9eIIcYR7Wza8rVoFHkOZnmTGTd3yT-if-s27sDiJiewRoIYwECgy54Qmm1kG2gT4CQ76ntEYrl~I5XRypNzh1fSysa-3j0n-6~5e5ddYYTe8RvSoBTxHBV~~wkBPq1wXUVxN5RPjsNcSeByRRA5rwtygVeCxmgrHo0F6vVxHA__",
  },
  {
    bg: "bg-green-500",
    text: "3",
    image:
      "https://s3-alpha-sig.figma.com/img/09f4/21f2/7b63ba82201b48a6ba18c78446b41bc2?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=e7QxDqg~0MZcv7Dvzmv4UDc2Kkvwk4fau3UdhrJEt8nAtvbhu6JLCrKn0ts-x0ici8zfmYd9rEpVRjEm8xH7fVSLYz5QdrRu0r-TyPgj8X9pLaCZPfzyiOfNZXPl4gOgfDOyzLkFwLjZm6T~SEQowRTJq0ohdNM0Pt7iSupApwTEpvjzw-prlFW0O4yRXdXdXkogiM9zZF9CVmhr8RvUUglnq21mzaJAD8jaWw1Irx1RI6HBgb3d26uAC-cpJF1b2CD-h9f2UkMxmUy6PbbsnWYoVwAgkdW-cvhXpCKBoDMmuPA5vPflnrK6VWsA0xGBETlZewzaVv6Ze7PGGMDqEw__",
  },
  {
    bg: "bg-purple-500",
    text: "4",
    image:
      "https://s3-alpha-sig.figma.com/img/cfac/494d/2bbbacdc8fbbc6c23a90ad5a6f7ec5a9?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hsXPjCt960zROWkKiXdNZFtpUY7rAyd0sc7UHqJ9llbd4eHKa~7VhZPmRypFTSNYSHayakoTAQ~r1V4lSXMaF7MNfau~lIoKlGBYuz11u3ZcFMG0TBIVdzpHQl4p-TW4AbhIqKQGhqRYETMnXajjM1lD~a67rVyg2rdJritDp-11kPrheBO4EEJs0R5BLnc-VqAXLj-Fw4CfyCQY01xK6XrDNEshqi6EvMUwl66n0YjDZvZtVeOgA8Xw1byuLoWLsYcbQZYQ96oayK1hpCdZkggvlZQLhBH~MU0J3Yyg1x0M0UAok9cl5sMNdNXNiv6S-MCpyOfayIHoIuYkWkfIPA__",
  },
];

const Card = ({ index }) => {
  const style = cardStyles[index % 4];

  return (
    <div
      className={`flex-shrink-0 rounded-xl overflow-hidden ${style.bg} transition-transform duration-300 hover:scale-95`}
    >
      <div className="relative w-[230px] h-[130px] md:w-[435px] md:h-[262px]">
        <Image
          src={style.image}
          alt={`Card ${index + 1}`}
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

const CardSet = () => {
  return (
    <>
      {cardStyles.map((_, index) => (
        <Card key={index} index={index} />
      ))}
    </>
  );
};

const BrandingCarousel = () => {
  return (
    <div className="flex flex-col gap-6 w-full bg-black py-8">
      <div className="w-full space-y-6">
        <InfiniteSlider
          duration={25}
          durationOnHover={50}
          gap={16}
          direction="horizontal"
        >
          <CardSet />
        </InfiniteSlider>

        <InfiniteSlider
          duration={30}
          durationOnHover={60}
          gap={16}
          direction="horizontal"
          reverse
        >
          <CardSet />
        </InfiniteSlider>
      </div>
    </div>
  );
};

export default BrandingCarousel;
