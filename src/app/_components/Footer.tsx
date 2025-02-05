"use client";
import React from "react";
import Image from "next/image";
import logoWhite from "../../utilities/icons/Logo-footer.svg";

import itLogocolor from '@/utilities/images/footer-it-logo.svg'
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react"
import facebookIcon from '@/utilities/icons/facebook-icon.svg'
import instagramIcon from '@/utilities/icons/instagram-icon.svg'
import linkedinIcon from '@/utilities/icons/linkedin-latest.svg'
import youtubeIcon from '@/utilities/icons/youtube-icon.svg'
// const Footer = () => {

//   const pathname = usePathname();
//   console.log("pathname", pathname);

//   return (
//     <footer
//     className="bg-black w-full text-white py-16 sm:px-6 md:px-8">
//       <div className="max-w-screen-2xl mx-auto">
//         <div className="grid grid-cols-2 md:grid-cols-4 px-[12px] gap-8">
//           <div>
//             <Image
//               src={!pathname.includes("/it-services") ? logoWhite:itLogocolor}
//               alt="Logo"
//               width={120}
//               height={40}
//               layout="intrinsic"
//             />
//              <p className="text-[28px] mt-4 w-[100px] font-[300]">
//                 Smart Solutions For Your{" "}
//                 <strong className="font-[300] text-[#FBAE17]">Brand</strong>{" "}
//               </p>
//           </div>

//           <div>
//             <h3 className="text-xl font-semibold mb-4">Our Services</h3>
//             <ul className="flex flex-col space-y-5 pt-4 text-[#888888]">
//               <li className="hover:text-white cursor-pointer">
//                 Digital Marketing & PR
//               </li>
//               <li className="hover:text-white cursor-pointer">
//                 Branding & Creative
//               </li>
//               <Link href='/it-services' className="hover:text-white cursor-pointer">
//                 Technology & Development
//               </Link>
//               <li className="hover:text-white cursor-pointer">Visual Impact</li>
//               <li className="hover:text-white cursor-pointer">
//                 Animation & E-learning
//               </li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-xl font-semibold mb-4">Company</h3>
//             <ul className=" flex flex-col space-y-5 pt-4 text-[#888888]">
//               <Link href="/about-us" className="hover:text-white cursor-pointer">About</Link>
//               {/* <li className="hover:text-white cursor-pointer">Services</li> */}
//               {/* <li className="hover:text-white cursor-pointer">Works</li> */}
//               <Link href='/careers' className="hover:text-white cursor-pointer">Careers</Link>
//               <Link href='/contact-us' className="hover:text-white cursor-pointer">Contact</Link>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>
//             <div className="space-y-5 gap-2 text-[#888888]">
//               <div className="flex flex-column items-start">
//                 <Image
//                   src={call}
//                   alt="Phone"
//                   width={24}
//                   height={24}
//                   className=""
//                 />
//                 <span>+91 96068 27607</span>
//               </div>
//               <div className="flex flex-column items-start gap-2 ">
//                 <Image
//                   src={mail}
//                   alt="Email"
//                   width={24}
//                   height={24}
//                   className=""
//                 />
//                 <span className="text-wrap break-all w-full">bd@squadramedia.com</span>

//               </div>
//               <div className="flex flex-column items-start  gap-2 w-full">
//                 <Image
//                   src={navigation}
//                   alt="Location"
//                   width={24}
//                   height={24}
//                   className=""
//                 />
//                 <span className="text-wrap break-all w-full">
//                   1134, 5th Floor, Shreeram Niwas, Opposite Vapour Brewery, 100
//                   Ft Road, Indiranagar, Bengaluru, 560038
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>



//         <div className=" border-t flex flex-col lg:flex-row md:flex-col  items-center gap-4 justify-between border-gray-600 mt-8 pt-6 text-center md:text-left">
//           <div className="flex flex-row gap-8  items-center">
//             <p>Follow Us</p>
//             <div className="flex flex-row items-center gap-8">
//               <Link target="_blank"
//                 href="https://www.instagram.com/_squadra_media_?igsh=MW1lZWJjMW51NXhweA=="
//               >
//                 <Image src={Instagram}
//                   height={24}
//                   width={24}
//                   className="text-gray-400 hover:text-white cursor-pointer" alt={"Instagram"} />
//               </Link>
//               <Link target="_blank" href="https://youtube.com/@squadramedia5111?si=11QTz6g7FJE8yBBh">
//                 <Image
//                   src={Youtube}
//                   height={24}
//                   width={24}
//                   className="text-gray-400 hover:text-white cursor-pointer" alt={"Youtube"} />
//               </Link>
//               <Link target="_blank" href="https://www.linkedin.com/company/squadra-media-bangalore">
//                 <Image src={Linkedin}
//                   height={24}
//                   width={24}
//                   className="text-gray-400 hover:text-white cursor-pointer" alt={"Linkedin"} />
//               </Link>
//               <Link target="_blank" href='https://www.facebook.com/squadramediabangalore'
//               >
//                 <Image
//                   alt={"facebook"}
//                   src={Facebook}
//                   height={24}
//                   width={24}
//                   className="text-gray-400 hover:text-white cursor-pointer"
//                 />
//               </Link>
//             </div>
//           </div>
//           <div className="">
//             <p className="text-gray-400 mb-4  md:mb-0">
//               &copy; Copyright Squadra Media Private Limited 2021. All rights
//               reserved.
//             </p>

//           </div>
//           <div>
//             <div className="space-x-6 mb-4  md:mb-0">
//               <a
//                 href="/terms"
//                 className="text-gray-400 hover:text-white cursor-pointer"
//               >
//                 Terms of Service
//               </a>
//               <a
//                 href="/privacy"
//                 className="text-gray-400 hover:text-white cursor-pointer"
//               >
//                 Privacy Policy
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





export default function Footer() {
  const pathname =usePathname()
  return (
    <footer className="bg-black text-gray-400 py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Tagline */}
          <div className="space-y-3">
            <Link href="/" className="inline-block">
              <Image
                src={!pathname.includes("/it-services") ? logoWhite : itLogocolor
                }
                alt="Squadra"
                className="h-12"
              />
            </Link>
            <h2 className="text-white text-[1.7rem] font-light leading-tight">
            Start
            <br />
            Building
              <br />
              a Solid
              <br/>
              Brand Today!
            </h2>
          </div>

          {/* Our Services */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-medium">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Digital Marketing & PR
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Branding & Creative
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Technology & Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Visual Impact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Animation & E-learning
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-medium">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about-us" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              {/* <li>
                <Link href="/it-services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li> */}
              {/* <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Works
                </Link>
              </li> */}
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Get in touch */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-medium">Get in touch</h3>
            <ul className="space-y-3">
              <li>
                <Link href="tel:+917204701593" className="hover:text-white transition-colors flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  +91 7204701593
                </Link>
              </li>
              <li>
                <Link href="mailto:info@squadramedia.com" className="hover:text-white transition-colors flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  info@squadramedia.com
                </Link>
              </li>
              <li className="flex items-start leading-relaxed">
                <MapPin className="mr-2 h-6 w-12" />

                560038, 1134, 5th Floor, Shreeram Niwas, Opposite Vapour Brewery, 100 Ft Road, Indiranagar, Bengaluru
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row lg:items-center lg:justify-between">
            {/* Copyright */}
            <div className="text-sm text-center lg:text-left">
              © Copyright Squadra Media Private Limited 2021. All right reserved
            </div>

            {/* Terms and Social Links Container */}
            <div className="flex flex-col space-y-6 sm:space-y-0 sm:flex-row sm:items-center sm:justify-center lg:justify-end">
              {/* Terms and Privacy */}
              <div className="flex items-center justify-center space-x-6 sm:mr-8">
                <Link href="#" className="text-sm hover:text-white transition-colors whitespace-nowrap">
                  Terms of services
                </Link>
                <Link href="/privacy-policy" className="text-sm hover:text-white transition-colors whitespace-nowrap">
                  Privacy policy
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center space-x-4 text-white">
                <span className="text-sm text-gray-400 whitespace-nowrap">Follow Us</span>
                <div className="flex items-center space-x-4">
                  <Link target="_blank" href="https://www.instagram.com/_squadra_media_?igsh=MW1lZWJjMW51NXhweA==" className="hover:text-gray-400 transition-colors">
                    {/* <Instagram className="h-5 w-5" /> */}
                    <Image src={instagramIcon} height={24} width={24} className="transition duration-300 hover:filter hover:invert" alt={"Instagram"} />
                  </Link>
                  <Link target="_blank" href="https://youtube.com/@squadramedia5111?si=11QTz6g7FJE8yBBh" className="hover:text-gray-400 transition-colors">
                    {/* <Youtube className="h-5 w-5" /> */}
                    <Image src={youtubeIcon} height={24} width={24} className="transition duration-300 hover:filter hover:invert" alt={"Youtube"} />
                  </Link>
                  <Link target="_blank" href="https://www.linkedin.com/company/squadra-media-bangalore" className="hover:text-gray-400 transition-colors">
                    {/* <Linkedin className="h-5 w-5" /> */}
                    <Image src={linkedinIcon} height={24} width={24} className="transition duration-300 hover:filter hover:invert" alt={"LinkedIn"} />
                  </Link>
                  <Link target="_blank" href="https://www.facebook.com/squadramediabangalore" className="hover:text-gray-400 transition-colors">
                    {/* <Facebook className="h-5 w-5" /> */}
                    <Image src={facebookIcon} height={24} width={24} className="transition duration-300 hover:filter hover:invert" alt={"Facebook"} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

