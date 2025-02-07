"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import logo from "../../utilities/icons/Logo-1.svg"
import callIcon from "../../utilities/icons/Call.svg"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { Menu, X, ChevronDown, ChevronRight, ArrowRight } from "lucide-react"
import { ContactPopover } from "./_contactUsComponents/ContactPopover"
import itLogo from "@/utilities/images/it-logo.svg"
import itLogocolor from "@/utilities/images/itLogoColoured.svg"
import TextSlideUp from "./SlideAnimate"
import { AnimatePresence, motion } from "framer-motion"
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isServicesHovered, setIsServicesHovered] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    if (
      pathname.includes("/contact-us") ||
      pathname.includes("/privacy-policy") ||
      pathname.includes("/branding-and-creative") ||
      pathname.includes("/visual-impact")
    )
      return
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [pathname])

  const handleNavigation = (path: string) => {
    router.push(path)
    setIsSidebarOpen(false)
  }

  const primaryColor = "#FBAE17"

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [activeService, setActiveService] = useState<number | null>(null)

  const services = [
    {
      title: "Technology & Development",
      link: "/it-services",
      items: [
        // "Web & Mobile App Development",
        // "E-commerce Solutions",
        // "AI & Machine Learning",
        // "Cloud Solutions",
        // "DevOps & Cybersecurity",
        // "Quality Assurance & Testing",
      ],
    },
    {
      title: "Branding & Creative",
      link: "/branding-and-creative",
      items: [
        // "Brand Strategy & Consulting",
        // "Logo Design & Brand Identity",
        // "Graphic Design",
        // "2D/3D Visualisation",
        // "Brand Collateral",
        // "Industrial Product Design",
      ],
    },
    {
      title: "Digital Marketing & PR",
      link: "/digital-marketing-and-pr",
      items: [
        // "Social Media Management",
        // "SEO & SEM",
        // "Performance Marketing",
        // "Content Marketing",
        // "Public Relations (PR)",
        // "Marketing Automation",
        // "Data & Analytics",
      ],
    },
    {
      title: "Visual Impact",
      link: "/visual-impact",
      items: [
        // "Commercial Photography",
        // "Corporate Films",
        // "Promotional Videos",
        // "Event & Product Photography",
        // "Cinematic Visuals",
      ],
    },
  ]

  const toggleServices = () => setIsServicesOpen(!isServicesOpen)
  const toggleSubmenu = (index: number) => setActiveService(activeService === index ? null : index)

  return (
    <>
      <nav
        className={`fixed z-50 w-full p-2 lg:px-32 transition-all duration-300 ${pathname.includes("/contact-us") ||
            pathname.includes("/our-services") ||
            pathname.includes("/branding-and-creative") ||
            pathname.includes("/openings") ||
            pathname.includes("/direct-apply") ||
            pathname.includes("/job-details") ||
            pathname.includes("/job-apply") ||
            pathname.includes("/privacy-policy") ||
            pathname.includes("/visual-impact")
            ? "bg-white shadow-md text-black"
            : isScrolled
              ? "bg-white text-black"
              : "bg-transparent text-white"
          }`}
      >
        <div className="max-w-screen-2xl mx-auto flex justify-between items-center">
          {!pathname.includes("/it-services") && (
            <Link href={"/"}>
              <div className="w-[260px] flex items-center">
                <Image
                  src={
                    pathname.includes("/contact-us") ||
                      pathname.includes("/our-services") ||
                      pathname.includes("/branding-and-creative") ||
                      pathname.includes("/openings") ||
                      pathname.includes("/direct-apply") ||
                      pathname.includes("/job-details") ||
                      pathname.includes("/job-apply") ||
                      pathname.includes("/privacy-policy") ||
                      pathname.includes("/visual-impact")
                      ? itLogocolor
                      : isScrolled
                        ? itLogocolor
                        : itLogo
                  }
                  alt="Logo"
                  width={120}
                  height={40}
                  layout="intrinsic"
                />
                <TextSlideUp isScroll={isScrolled} isSidebarOpen={isSidebarOpen} />
              </div>
            </Link>
          )}
          <div className=" flex items-center justify-center">
            {pathname.includes("/it-services") && (
              <Link href={"/"}>
                <Image src={isScrolled ? itLogocolor : itLogo} alt="Logo" width={120} height={40} layout="intrinsic" />
              </Link>
            )}
          </div>

          {!pathname.includes("/it-services") && (
            <ul className="lg:flex hidden font-[500] space-x-8">
              <Link
                className={`cursor-pointer py-5 ${pathname.includes("/about-us") ? `text-[${primaryColor}]` : "hover:text-[#FBAE17]"
                  }`}
                href={"/about-us"}
              >
                About Us
              </Link>

              <li
                className="relative py-5 transition duration-500 ease-in-out hover:text-[#FBAE17] cursor-pointer"
                onClick={() => {
                  setIsServicesHovered(!isServicesHovered)
                  setIsScrolled(!isScrolled)
                }}
                onMouseEnter={() => {
                  setTimeout(() => {
                    setIsServicesHovered(true)
                    setIsScrolled(true)
                  }, 100)
                }}
                onMouseLeave={() => {
                  setTimeout(() => {
                    setIsServicesHovered(false)
                    setIsScrolled(false)
                  }, 100)
                }}
              >
                Services
                {/* Services Mega Menu */}
                <AnimatePresence>
                  {isServicesHovered && (
    <motion.div 
      initial={{
        opacity: 0,
        y: -20,
        scale: 0.98,
        x: '-50%'  // Keep the centering during animation
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
        x: '-50%'  // Keep the centering during animation
      }}
      exit={{
        opacity: 0,
        y: -10,
        scale: 0.98,
        x: '-50%'  // Keep the centering during animation
      }}
      transition={{
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1]
      }}
        style={{
        position: 'fixed',
        top: '4.5rem',
        left: '50%',
        width: '100vw',
        maxWidth: '100vw',
        transform: 'translateX(-50%)',
      }}
      className="bg-white text-black shadow-xl z-50"
    >
                <div
                className="container mx-auto"
                >
                  <div className="p-8 flex flex-col">
                    <div className="flex justify-center mb-4">
                      {/* Left Column - Heading */}
                      <div className="w-[20%] pr-0">
                        <h2 className="text-3xl lg:text-4xl font-light leading-tight">
                          Developing
                          <br />
                          Robust
                          <br />
                          Skills to
                          <br />
                          Strengthen
                          <br />
                          Your
                          <br />
                          <span className="text-[#FBAE17]">Brand&apos;s</span>
                          <br />
                          Impact.
                        </h2>

                        {/* <Link href="/our-services" className="py-4 text-sm flex gap-2 hover:gap-4 transition-all">
                          Go to overview <ArrowRight />
                        </Link> */}
                      </div>

                      {/* Right Columns - Services */}
                      <div className="w-2/3 grid grid-cols-4 gap-8">
                        {/* IT and services */}
                        <div className="">
                          <h3 className="font-bold mb-4">
                            <Link
                              onClick={() =>
                                setTimeout(() => {
                                  setIsServicesHovered(false)
                                  setIsScrolled(false)
                                }, 500)
                              }
                              href="/it-services"
                              className=" cursor-pointer"
                            >
                              Technology & Development
                            </Link>
                          </h3>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li>Web & Mobile App Development</li>
                            <li>E-commerce Solutions</li>
                            <li>AI & Machine Learning</li>
                            <li>Cloud Solutions</li>
                            <li>DevOps & Cybersecurity</li>
                            <li>Quality Assurance & Testing</li>
                          </ul>
                        </div>

                        {/* Branding & Creative */}
                        <div>
                          <h3 className="font-bold mb-4">
                            <Link
                              onClick={() =>
                                setTimeout(() => {
                                  setIsServicesHovered(false)
                                  setIsScrolled(false)
                                }, 500)
                              }
                              href="/branding-and-creative"
                              className=" cursor-pointer"
                            >
                              Branding & Creative
                            </Link>
                          </h3>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li>Brand Strategy & Consulting</li>
                            <li>Logo Design & Brand Identity</li>
                            <li>Graphic Design</li>
                            <li>2D/3D Visualisation</li>
                            <li>Brand Collateral</li>
                            <li>Industrial Product Design</li>
                          </ul>
                        </div>

                        {/* Digital Marketing & PR */}
                        <div>
                          <h3 className="font-bold mb-4">
                            <Link
                              onClick={() =>
                                setTimeout(() => {
                                  setIsServicesHovered(false)
                                  setIsScrolled(false)
                                }, 500)
                              }
                              href="/digital-marketing-and-pr"
                              className=" cursor-pointer"
                            >
                              Digital Marketing & PR
                            </Link>
                          </h3>

                          <ul className="space-y-2 text-sm text-gray-600">
                            <li>Social Media Management</li>
                            <li>SEO & SEM</li>
                            <li>Performance Marketing</li>
                            <li>Content Marketing</li>
                            <li>Public Relations (PR)</li>
                            <li>Marketing Automation</li>
                            <li>Data & Analytics</li>
                          </ul>
                        </div>

                        {/* Visual Impact */}
                        <div>
                          <h3 className="font-semibold mb-4">
                            <Link
                              onClick={() =>
                                setTimeout(() => {
                                  setIsServicesHovered(false)
                                  setIsScrolled(false)
                                }, 500)
                              }
                              href="/visual-impact"
                              className=" cursor-pointer"
                            >
                              Visual Impact
                            </Link>
                          </h3>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li>Commercial Photography</li>
                            <li>Corporate Films</li>
                            <li>Promotional Videos</li>
                            <li>Course Management System</li>
                            <li>Event & Product Photography</li>
                            <li>Cinematic Visuals</li>
                          </ul>
                        </div>

                        {/* Animation & E-learning */}
                        <div>
                          <h3 className="font-semibold mb-4">Animation & E-learning</h3>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li>2D/3D Animation</li>
                            <li>Explainer Videos</li>
                            <li>E-learning Modules</li>
                            <li>Motion Graphics</li>
                            <li>Interactive Learning Solutions</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Technology & Development Section */}

                    {/* Go to overview link */}
                    <div className="ml-20">
                    <Link 
                      href="/our-services" 
                      className="inline-flex items-center text-gray-900 hover:underline"
                    >
                      Go to overview <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                  </div>
                      </div></motion.div>
                  )}
                </AnimatePresence>
              </li>
              <Link
                className={`cursor-pointer py-5 ${pathname.includes("/careers") ? `text-[${primaryColor}]` : "hover:text-[#FBAE17]"
                  }`}
                href={"/careers"}
              >
                Careers
              </Link>
            </ul>
          )}

          <ul className="flex font-[500] space-x-8 md:space-x-8">
            {true && <ContactPopover isScrolled={isScrolled} />}
            {true ? (
              <li
                className={`hidden lg:block cursor-pointer py-[7px] px-[12px] rounded-[4px] bg-[#06135B] ${pathname.includes("/contact-us") ||
                    pathname.includes("/our-services") ||
                    pathname.includes("/branding-and-creative") ||
                    pathname.includes("/openings") ||
                    pathname.includes("/direct-apply") ||
                    pathname.includes("/job-details") ||
                    pathname.includes("/job-apply") ||
                    pathname.includes("/privacy-policy") ||
                    pathname.includes("/visual-impact")
                    ? `text-white`
                    : isScrolled
                      ? "text-white"
                      : ""
                  }`}
                onClick={() => handleNavigation("/contact-us")}
              >
                Contact Us
              </li>
            ) : null}
            {/* {!pathname.includes("/it-services") && <ContactPopover isScrolled={isScrolled}/>} */}

            {/* <li>
              <Link href='/contact-us'>
              <Image
                src={pathname.includes("/contact-us") ? callIconBlack : isScrolled ? callIconBlack : callIcon}
                alt="Call Icon"
                width={24}
                height={24}
                />
                </Link>
            </li> */}
            {/* Hamburger menu icon for mobile and tablet */}
            <button className="lg:hidden" onClick={toggleSidebar} aria-label="Toggle menu">
              <Menu className="h-6 w-6" />
            </button>
          </ul>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white z-50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="relative h-full flex flex-col">
          <div className="p-6">
            {pathname.includes("/it-services") ? (
              <Image src={itLogocolor || "/placeholder.svg"} alt="Logo" width={120} height={40} layout="intrinsic" />
            ) : (
              <div>
                <TextSlideUp isScroll={isScrolled} isSidebarOpen={isSidebarOpen} />

                <Image src={logo || "/placeholder.svg"} alt="Logo" width={120} height={40} layout="intrinsic" />
              </div>
            )}
          </div>
          <button className="absolute top-4 right-4 p-2" onClick={toggleSidebar} aria-label="Close menu">
            <X className="h-6 w-6" />
          </button>

          <div className="pt-4 px-6 flex-grow overflow-y-auto">
            <ul className="space-y-0">
              <li>
                <Link
                  href="/about-us"
                  className={`block py-4 text-base ${pathname.includes("/about-us") ? `text-[${primaryColor}]` : "text-black"
                    } border-b border-gray-200`}
                  onClick={toggleSidebar}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className={`block py-4 text-base ${pathname.includes("/careers") ? `text-[${primaryColor}]` : "text-black"
                    } border-b border-gray-200`}
                  onClick={toggleSidebar}
                >
                  Careers
                </Link>
              </li>
              <li>
                {/* Services Menu */}
                <div
                  className="py-4 text-base text-black border-b border-gray-200 flex justify-between items-center cursor-pointer"
                  onClick={toggleServices}
                >
                  <span>Services</span>
                  {isServicesOpen ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                </div>
                <div
                  className={`transition-transform duration-500 ${isServicesOpen ? "max-h-[1000px] opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
                    } overflow-hidden`}
                >
                  <ul className="pl-4 space-y-0">
                    {services.map((service, index) => (
                      <li key={index}>
                        <div
                          className="py-3 text-base transition-all duration-500 text-black flex justify-between items-center cursor-pointer"
                          onClick={() => {
                            toggleSubmenu(index)
                            setIsSidebarOpen(false)
                          }}
                        >
                          {/* {service.title === "Technology & Development" ? ( */}
                          <Link href={service.link} className="">
                            {service.title}
                          </Link>
                          {/* ) : (
                            <span>{service.title}</span>
                          )} */}

                          {/* {activeService === index ? (
                          <ChevronDown className="h-5 w-5" />
                        ) : (
                          <ChevronRight className="h-5 w-5" />
                        )} */}
                        </div>
                        <div
                          className={`overflow-hidden transition-max-height duration-500 ${activeService === index ? "max-h-[1000px]" : "max-h-0"
                            }`}
                        >
                          <ul className="pl-4 text-sm text-gray-600">
                            {service.items.map((item, i) => (
                              <li key={i} className="py-2 border-b border-gray-200">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              {/* <li>
              <Link
                href="/contact-us"
                className={`block py-4 text-base ${
                  pathname.includes("/contact-us")
                    ? `text-[${primaryColor}]`
                    : "text-black"
                } border-b border-gray-200`}
                onClick={toggleSidebar}
              >
                Contact Us
              </Link>
            </li> */}
            </ul>
          </div>

          {/* Contact Us Button */}
          <div className="p-6">
            <Link
              href="/contact-us"
              className="flex items-center justify-center w-full py-3 px-4 text-white bg-black hover:bg-gray-800 transition-colors duration-300"
              onClick={toggleSidebar}
            >
              <Image src={callIcon || "/placeholder.svg"} alt="Call Icon" width={24} height={24} className="mr-2" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleSidebar} />}
    </>
  )
}

export default Navbar
