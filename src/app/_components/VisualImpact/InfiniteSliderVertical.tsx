import { InfiniteSlider } from '@/components/ui/infinite-slider';
import Image from 'next/image';

export function InfiniteSliderVertical() {

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
        <div className='space-x-4 flex flex-col gap-14'>
            <InfiniteSlider direction='horizontal'>
                {firstImagesSet?.map((image, index) => {
                    return (
                        <Image key={index} width={500} height={384} className='w-[200px] h-[133px] rounded-[20px] xl:w-[500px] xl:h-[384px] sm:w-[375px] sm:h-[288px] object-cover'
                            src={image?.src}
                            alt={image?.alt}
                        />
                    )
                })}
            </InfiniteSlider>

            <InfiniteSlider direction='horizontal' reverse>
                {secondImagesSet?.map((image, index) => {
                    return (
                        <Image key={index} width={500} height={384} className='w-[200px] h-[133px] rounded-[20px] xl:w-[500px] xl:h-[384px] sm:w-[375px] sm:h-[288px] object-cover'
                            src={image?.src}
                            alt={image?.alt}
                        />
                    )
                })}
            </InfiniteSlider>
        </div>
    );
}
