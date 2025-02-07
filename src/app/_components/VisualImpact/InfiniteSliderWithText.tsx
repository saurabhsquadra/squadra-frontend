import { InfiniteSlider } from '@/components/ui/infinite-slider';
import Image from 'next/image';

export function InfiniteSliderWithText() {

    const firstImagesSet = [
        {
            src: 'https://i.scdn.co/image/ab67616d00001e02ad24c5e36ddcd1957ad35677',
            alt: 'Dean blunt - Black Metal 2'
        },
        {
            src: 'https://i.scdn.co/image/ab67616d00001e02af73f776b92d4614152fb141',
            alt: 'Jungle Jack - JUNGLE DES ILLUSIONS VOL 2'
        },
        {
            src: 'https://i.scdn.co/image/ab67616d00001e02ecdb8f824367a53468100faf',
            alt: 'Yung Lean - Stardust'
        },
        {
            src: 'https://i.scdn.co/image/ab67616d00001e021624590458126fc8b8c64c2f',
            alt: 'Lana Del Rey - Ultraviolence'
        },
        {
            src: 'https://i.scdn.co/image/ab67616d00001e020dcf0f3680cff56fe5ff2288',
            alt: 'A$AP Rocky - Tailor Swif'
        },
        {
            src: 'https://i.scdn.co/image/ab67616d00001e02bc1028b7e9cd2b17c770a520',
            alt: 'Midnight Miami (feat Konvy) - Nino Paid, Konvy'
        }
    ]

    const secondImagesSet = [
        {
            src: 'https://i.scdn.co/image/ab67616d00001e020fc93fe41791c5aa51ae9645',
            alt: 'DAYS BEFORE RODEO - Travis Scott'
        },
        {
            src: 'https://i.scdn.co/image/ab67616d00001e02d3e668d0c74720c8c23978e3',
            alt: "You're in My System - TORYONTHEBEAT"
        },
        {
            src: 'https://i.scdn.co/image/ab67616d00001e0234537499b159b0e6d18e5655',
            alt: "You can't tell me - People Make the World Go Round"
        },
        {
            src: 'https://i.scdn.co/image/ab67616d00001e020cd942c1a864afa4e92d04f2',
            alt: 'ye - Kanye West'
        },
        {
            src: 'https://i.scdn.co/image/ab67616d00001e02a875c3ec944b4f164ab5c350',
            alt: 'Slime Season 3 - Young Thug'
        },
        {
            src: 'https://i.scdn.co/image/ab67616d00001e026376f0d88bbbc8cd051e3401',
            alt: 'SWAG - 8ruki'
        }
    ]

    return (
        <div className="relative w-full flex flex-col items-center justify-center gap-[77px]">
            {/* Text on Top */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center w-full">
                <h1 className="font-semibold xl:text-[100px] xl:leading-[119.34px] lg:text-[62px] lg:leading-[74px] md:text-[62px] md:leading-[74px] sm:text-[62px] sm:leading-[74px] text-[28px] leading-[33.41px] text-[#FFFFFF]">Capturing Your Vision,<br/> Perfecting Every Frame</h1>
            </div>

            {/* First Infinite Slider with Reduced Opacity */}
            <InfiniteSlider direction="horizontal" className="opacity-50">
                {firstImagesSet?.map((image, index) => (
                    <Image
                        key={index}
                        width={300}
                        height={300}
                        className="sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] rounded-[20px] object-cover"
                        src={image?.src}
                        alt={image?.alt}
                    />
                ))}
            </InfiniteSlider>

            {/* Second Infinite Slider with Reduced Opacity */}
            <InfiniteSlider direction="horizontal" reverse className="opacity-50">
                {secondImagesSet?.map((image, index) => (
                    <Image
                        key={index}
                        width={300}
                        height={300}
                        className="sm:w-[300px] sm:h-[300px] w-[100px] h-[100px] rounded-[20px] object-cover"
                        src={image?.src}
                        alt={image?.alt}
                    />
                ))}
            </InfiniteSlider>
        </div>

    );
}
