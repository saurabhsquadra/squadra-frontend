import { InfiniteSlider } from "@/components/ui/infinite-slider";
import Image from "next/image";

export function InfiniteSliderBasic() {
  return (
    <>
      <InfiniteSlider gap={24} reverse>
        <Image
          width={250}
          height={120}
          src="https://s3-alpha-sig.figma.com/img/b9a1/5d0f/4e7a5f85db9373383b713ae078938e2a?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=N2zBZL3oVxAc5KcJTh7KDMJZzRLkp4IdsB9jcptRkp3oUK4We1U8qJeu8CBHP4Z-Ve6Y5ti5z6SgctVsfSINidB1jF~Kjosd0OPfNvZ0x-Da5l~1q5pvsASHOtAFBWvaG1XXm0uEQ8ZDO64w11gKunfM5yjgjMueri1AEXano5UNwTgU71i61vVxaut1Lio1ytv10af1Gk16Ne-mcmWnYbfs08yHy9~qa5ExuXN2RnzLolPcLCrWVYST7k1t-iMTeKixmsNabKVMS-XIBocOj2ZN61UgkztaPTXLnOEZBiM~gn8U0uZxbhb1PimlFj4Q8Ck3usFSkp7QCuYzqDt1fw__"
          alt="Apple Music logo"
          className="h-[50px] md:h-[50px] md:h-[120px] w-auto mb-4"
        />
        <Image
          width={250}
          height={120}
          src="https://s3-alpha-sig.figma.com/img/8d69/b212/ad096b2541d6b15b3d4d46466c1d3ab0?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OxQ1Pn-uNyL7QXHEUrt9EoH7qW-KXoEhyXFaqxG1EpBsdF0iKF7KASqiutGiK~fKZmbWuwPtB-HZ-0iPDypEWOrm6TxTqYDJFzEZMEsX~-AOXquYzRY3lR4CEv-1fDSL7cEcysBXZCzqUuOlDFg294~oW18mV1kPzqa2-q82EI87HjSzfV7CwQNESkY9H61qGvxXgmym-ZEUsoMx6AvdrN9csuHsJaD9FiPtzbQqOABxOjJc4~lG9ukrgUtNJKZIKFx2rZVX0mnz5pMw-FpAwB6ymGVOvA2Hje2ti099-yszoBCesUGqKdheEGcV~xFiF345AGCv-atdAGyHG-zt3A__"
          alt="Chrome logo"
          className="h-[50px] md:h-[120px] w-auto"
        />
        <Image
          width={250}
          height={120}
          src="https://s3-alpha-sig.figma.com/img/8825/a748/33cbce05b271be6c607b07a4a8f2e4bf?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iMrvs1w~GTRXrAvm168VvjAw0t2bTQ90~l6z9WI9Qh8SjMdZ9~FAxUmIfQW5lVYVJbXk7JWLLVh06wth8x9RTn8vAC7JxixBVE1RJNzDlEd-oo-xjJT5Nhe9X4ZnDLk29mr~oILCq8s83Xyj5N-1uEgtQF5nj-5ltx-h2x5fucg7EOosnp5lAKlI~sZIMhubWiyFU7qIpcwVbaJ2yGTtp2WMnMqcrsvQkNRZV2-mwWK3IdI1GSk37TiEXj3LER4QuRZHAVTswiIEYDujIM5Iim6nW29JbJaa3NElAtl77LhKV1EQ4RCxFJSr~MsCz17~9-OwRCX4fqsWPQxh2T4Zqw__"
          alt="Strava logo"
          className="h-[50px] md:h-[120px] w-auto"
        />
        <Image
          width={250}
          height={120}
          src="https://s3-alpha-sig.figma.com/img/becd/2455/1a3b8dbaf367154b48b52c3368d6f1dd?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TPKEygCR4pb-fW6To18TCBrwY4HliXh5OmaCvFT5s910NOPsvnTEdNVW1Qzxow6gTA-SVgzn3fXPlJ5GiuNa6obIYl3c7DwDe2tBAS3V5QeqoPkIKGAsMZBoRf7vIqFiODN9RKepROMIdacHN82fJIp9o6hQZKnVMumr9Rb8MNck1cT2hHEA1~m6DH1SEF3TLPD8f456-RMOOYbT8K-3ZEiUgHUZfqXNX6YH~Q4y-hl0nwBq-KADuWp-sVzx-tsIZ3FwP8cVNkN0fW2rOQ~AKU89QDq4UKXCb7PWmECfR9gqktSMKlfyIUbNYsyfVjXg~Ave9IUicSj9JjWOSCGoJA__"
          alt="Nintendo logo"
          className="h-[50px] md:h-[120px] w-auto"
        />
        <Image
          width={250}
          height={120}
          src="https://s3-alpha-sig.figma.com/img/fa11/155e/b3faf63dab37018a89d432579dfed3b5?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bxaY~YOdVo8AQMQgCbWjof7YMDpiPfSLD~TO-57uME0bnQRI1jSyTAFwSbOaRQHC84T5n150YQDAj8BdHC-X9etQhX5v~uYEP897hR41ekaYR1iRyyC8v5Tt7CDoALTm4GKEOKk6TEqywIFOnfYfn9uEBz683nYY7AjzQRnojHA4-NqIJZQEV9KAspr~PKyYiUMSiixrQsxhCAlfO0WzqZdFoNBt~rY2WHOvYJKDLWDWeja3BeZk2kjK8sIwPqR5tfXIRnzrtSfiAJvIhrUtt2qEzNcSFSiWcRhyfmZBQA2TI4xs0gqUiSgxSnkbtLEklUFPQfjoUUuR-pCRpGN-dQ__"
          alt="Jquery logo"
          className="h-[50px] md:h-[120px] w-auto"
        />
        <Image
          width={250}
          height={120}
          src="https://s3-alpha-sig.figma.com/img/5953/36f0/f3b8e8f69a0d8851a5ae3a6a44191111?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MrEtDfz4rHxEqvZLwoZMHLwrhS~599zJhEeKQkQfLzShXLUvE2igMQhCovkibZH0B-LpkQTnO1weSDdJ9SEXCSyeWMyWUK6Z1nmBEdwiTjPwtTMDAuq4ntY8KYFfxXrqIGEeMuCNkqEkIuCMC1nvJ20P2AVTYTPF9pDIHuPuT6zGX4iZXV0LfeJIzhlAxOOYSL4UjKvQSf9sH05A5t84GX9rly5uAmsUXpO5TxC6IP-rTqMo~ukqg3EGVIAAT6e9Oitzs6HE65yH2nyKXwVj04l~hxwcjdtT4O8o1TepzsP3vonV6DKC7R53m0xyO1aW8ew0HZ0o1Ic5uWPsXFrGXQ__"
          alt="Prada logo"
          className="h-[50px] md:h-[120px] w-auto"
        />
      </InfiniteSlider>
      <InfiniteSlider gap={24} reverse>
        <Image
          width={250}
          height={120}
          src="https://s3-alpha-sig.figma.com/img/b9a1/5d0f/4e7a5f85db9373383b713ae078938e2a?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=N2zBZL3oVxAc5KcJTh7KDMJZzRLkp4IdsB9jcptRkp3oUK4We1U8qJeu8CBHP4Z-Ve6Y5ti5z6SgctVsfSINidB1jF~Kjosd0OPfNvZ0x-Da5l~1q5pvsASHOtAFBWvaG1XXm0uEQ8ZDO64w11gKunfM5yjgjMueri1AEXano5UNwTgU71i61vVxaut1Lio1ytv10af1Gk16Ne-mcmWnYbfs08yHy9~qa5ExuXN2RnzLolPcLCrWVYST7k1t-iMTeKixmsNabKVMS-XIBocOj2ZN61UgkztaPTXLnOEZBiM~gn8U0uZxbhb1PimlFj4Q8Ck3usFSkp7QCuYzqDt1fw__"
          alt="Apple Music logo"
          className="h-[50px] md:h-[120px] w-auto"
        />
        <Image
          width={250}
          height={120}
          src="https://s3-alpha-sig.figma.com/img/8d69/b212/ad096b2541d6b15b3d4d46466c1d3ab0?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=OxQ1Pn-uNyL7QXHEUrt9EoH7qW-KXoEhyXFaqxG1EpBsdF0iKF7KASqiutGiK~fKZmbWuwPtB-HZ-0iPDypEWOrm6TxTqYDJFzEZMEsX~-AOXquYzRY3lR4CEv-1fDSL7cEcysBXZCzqUuOlDFg294~oW18mV1kPzqa2-q82EI87HjSzfV7CwQNESkY9H61qGvxXgmym-ZEUsoMx6AvdrN9csuHsJaD9FiPtzbQqOABxOjJc4~lG9ukrgUtNJKZIKFx2rZVX0mnz5pMw-FpAwB6ymGVOvA2Hje2ti099-yszoBCesUGqKdheEGcV~xFiF345AGCv-atdAGyHG-zt3A__"
          alt="Chrome logo"
          className="h-[50px] md:h-[120px] w-auto"
        />
        <Image
          width={250}
          height={120}
          src="https://s3-alpha-sig.figma.com/img/8825/a748/33cbce05b271be6c607b07a4a8f2e4bf?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iMrvs1w~GTRXrAvm168VvjAw0t2bTQ90~l6z9WI9Qh8SjMdZ9~FAxUmIfQW5lVYVJbXk7JWLLVh06wth8x9RTn8vAC7JxixBVE1RJNzDlEd-oo-xjJT5Nhe9X4ZnDLk29mr~oILCq8s83Xyj5N-1uEgtQF5nj-5ltx-h2x5fucg7EOosnp5lAKlI~sZIMhubWiyFU7qIpcwVbaJ2yGTtp2WMnMqcrsvQkNRZV2-mwWK3IdI1GSk37TiEXj3LER4QuRZHAVTswiIEYDujIM5Iim6nW29JbJaa3NElAtl77LhKV1EQ4RCxFJSr~MsCz17~9-OwRCX4fqsWPQxh2T4Zqw__"
          alt="Strava logo"
          className="h-[50px] md:h-[120px] w-auto"
        />
        <Image
          width={250}
          height={120}
          src="https://s3-alpha-sig.figma.com/img/becd/2455/1a3b8dbaf367154b48b52c3368d6f1dd?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=TPKEygCR4pb-fW6To18TCBrwY4HliXh5OmaCvFT5s910NOPsvnTEdNVW1Qzxow6gTA-SVgzn3fXPlJ5GiuNa6obIYl3c7DwDe2tBAS3V5QeqoPkIKGAsMZBoRf7vIqFiODN9RKepROMIdacHN82fJIp9o6hQZKnVMumr9Rb8MNck1cT2hHEA1~m6DH1SEF3TLPD8f456-RMOOYbT8K-3ZEiUgHUZfqXNX6YH~Q4y-hl0nwBq-KADuWp-sVzx-tsIZ3FwP8cVNkN0fW2rOQ~AKU89QDq4UKXCb7PWmECfR9gqktSMKlfyIUbNYsyfVjXg~Ave9IUicSj9JjWOSCGoJA__"
          alt="Nintendo logo"
          className="h-[50px] md:h-[120px] w-auto"
        />
        <Image
          width={250}
          height={120}
          src="https://s3-alpha-sig.figma.com/img/fa11/155e/b3faf63dab37018a89d432579dfed3b5?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bxaY~YOdVo8AQMQgCbWjof7YMDpiPfSLD~TO-57uME0bnQRI1jSyTAFwSbOaRQHC84T5n150YQDAj8BdHC-X9etQhX5v~uYEP897hR41ekaYR1iRyyC8v5Tt7CDoALTm4GKEOKk6TEqywIFOnfYfn9uEBz683nYY7AjzQRnojHA4-NqIJZQEV9KAspr~PKyYiUMSiixrQsxhCAlfO0WzqZdFoNBt~rY2WHOvYJKDLWDWeja3BeZk2kjK8sIwPqR5tfXIRnzrtSfiAJvIhrUtt2qEzNcSFSiWcRhyfmZBQA2TI4xs0gqUiSgxSnkbtLEklUFPQfjoUUuR-pCRpGN-dQ__"
          alt="Jquery logo"
          className="h-[50px] md:h-[120px] w-auto"
        />
        <Image
          width={250}
          height={120}
          src="https://s3-alpha-sig.figma.com/img/5953/36f0/f3b8e8f69a0d8851a5ae3a6a44191111?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MrEtDfz4rHxEqvZLwoZMHLwrhS~599zJhEeKQkQfLzShXLUvE2igMQhCovkibZH0B-LpkQTnO1weSDdJ9SEXCSyeWMyWUK6Z1nmBEdwiTjPwtTMDAuq4ntY8KYFfxXrqIGEeMuCNkqEkIuCMC1nvJ20P2AVTYTPF9pDIHuPuT6zGX4iZXV0LfeJIzhlAxOOYSL4UjKvQSf9sH05A5t84GX9rly5uAmsUXpO5TxC6IP-rTqMo~ukqg3EGVIAAT6e9Oitzs6HE65yH2nyKXwVj04l~hxwcjdtT4O8o1TepzsP3vonV6DKC7R53m0xyO1aW8ew0HZ0o1Ic5uWPsXFrGXQ__"
          alt="Prada logo"
          className="h-[50px] md:h-[120px] w-auto"
        />
      </InfiniteSlider>
    </>
  );
}
