'use client'
import Image from "next/image";
import { useState } from "react";
import expressjsImage from "@/utilities/images/express-image (2).svg"
import pythonImage from "@/utilities/images/python-image (2).svg"
import graphqlImage from "@/utilities/images/graphql-image (2).svg"
import mongodbImage from "@/utilities/images/mongodb-image (2).svg"
import mysqlImage from "@/utilities/images/mysql-image (2).svg"
import javaImage from "@/utilities/images/java-image.svg"
import springImage from "@/utilities/images/spring-image.svg"
import nestImage from "@/utilities/images/nest-image.svg"
import goImage from "@/utilities/images/go-image.svg"
import phpImage from "@/utilities/images/php-image.svg"
import oracleImage from "@/utilities/images/oracle-image.svg"
import redisImage from "@/utilities/images/redis-image.svg"
import reactImage from "@/utilities/images/react-image.svg"
import angularImage from "@/utilities/images/angular-image.svg"
import vueImage from "@/utilities/images/vuejs-image.svg"
import nextjsImage from "@/utilities/images/nextjs-image.svg"
import javascriptImage from "@/utilities/images/javascript-image.svg"
import typescriptImage from "@/utilities/images/Typescript-image.svg"
import tailwindImage from "@/utilities/images/tailwind-image.svg"
import svelteImage from "@/utilities/images/svelte-image.svg"
import nuxtImage from "@/utilities/images/nuxt-image.svg"
import solidjsImage from "@/utilities/images/solid-image.svg"
import gatsbyImage from "@/utilities/images/gatsby-image.svg"
import remixjsImage from "@/utilities/images/remixjs-image.svg"
import androidImage from "@/utilities/images/android-image.svg"
import iosImage from "@/utilities/images/ios-image.svg"
import flutterImage from "@/utilities/images/flutter-image.svg"
import reactNativeImage from "@/utilities/images/react-native-image.svg"
import awsImage from "@/utilities/images/aws-image.svg"
import azureImage from "@/utilities/images/azure-image.svg"
import gcpImage from "@/utilities/images/gcp-image.svg"
import dockerImage from "@/utilities/images/docker-image.svg"
import kubernetesImage from "@/utilities/images/kubernetes-image.svg"
import terraformImage from "@/utilities/images/terraform-image.svg"
import firebaseImage from "@/utilities/images/firebase-image.svg"
import serverlessImage from "@/utilities/images/serverless-image.svg"
import apacheImage from "@/utilities/images/apache-image.svg"
import vmImage from "@/utilities/images/vm-image.svg"
import jenkinsImage from "@/utilities/images/jenkins-image.svg"
import ga4Image from "@/utilities/images/ga4-image.svg"
import gtmImage from "@/utilities/images/gtm-image.svg"
import nodeImage from '@/utilities/images/node-image.svg'

const TabComponent = () => {
    const [activeTab, setActiveTab] = useState("Backend");

    const tabs = ["Backend", "Frontend", "Mobile", "DevOps", "Analytics & Engagement"];
    const backendTools = [
        { name: "Node.js", logo: nodeImage },
        { name: "Express.js", logo: expressjsImage },
        { name: "Python", logo: pythonImage },
        { name: "GraphQL", logo: graphqlImage },
        { name: "MongoDB", logo: mongodbImage },
        { name: "MySQL", logo: mysqlImage },
        { name: "Java", logo: javaImage },
        { name: "Spring Boot", logo: springImage },
        { name: "Nestjs", logo: nestImage },
        { name: "GO", logo: goImage },
        { name: "PHP", logo: phpImage },
        { name: "Oracle", logo: oracleImage },
        { name: "Redis", logo: redisImage },
    ];

    const frontendTools = [
        { name: "React", logo: reactImage },
        { name: "Angular", logo: angularImage },
        { name: "Vue JS", logo: vueImage },
        { name: "Next js", logo: nextjsImage },
        { name: "Javascript", logo: javascriptImage },
        { name: "Tailwind", logo: tailwindImage },
        { name: "Typescript", logo: typescriptImage },
        { name: "Svelte", logo: svelteImage },
        { name: "Nuxt", logo: nuxtImage },
        { name: "Solidjs", logo: solidjsImage},
        { name: "Gatsby", logo: gatsbyImage },
        { name: "Remixjs", logo: remixjsImage },
    ];

    const mobileTools = [
        { name: "Android", logo: androidImage },
        { name: "IOS", logo: iosImage },
        { name: "Flutter", logo: flutterImage },
        { name: "React Native", logo: reactNativeImage },
    ];

    const devopsTools = [
        { name: "AWS", logo: awsImage },
        { name: "Azure", logo: azureImage },
        { name: "GCP", logo: gcpImage },
        { name: "Docker", logo: dockerImage },
        { name: "kubernetes", logo: kubernetesImage },
        { name: "Terraform", logo: terraformImage },
        { name: "Firebase", logo: firebaseImage },
        { name: "Serverless", logo: serverlessImage },
        { name: "Apache Kafka", logo: apacheImage },
        { name: "VMWare", logo: vmImage},
        { name: "Jenkins", logo: jenkinsImage },
    ];

    const analyticsTools = [
        { name: "GA 4", logo: ga4Image },
        { name: "GTM", logo: gtmImage },
    ];

    return (
        <div className="flex flex-col items-center w-full h-fit bg-[#FAFAFA]">
            {/* Tabs */}
            <div className="flex  w-[713px] space-x-8 border-b border-[#F3EBDC] mb-6 ">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`text-[18px]  leading-[21.48px] py-[30px] px-4 ${activeTab === tab
                            ? "border-b-2 border-[#FBAE17] text-[#06135B] font-semibold"
                            : "text-[#A1A1A1]"
                            }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Cards for Backend */}
            {activeTab === "Backend" && (
                <div className="w-[713px] flex flex-wrap justify-center mt-[50px] gap-[30px] mb-[50px]">
                    {backendTools.map((tool) => (
                        <div
                            key={tool.name}
                            className="flex w-[150px] bg-white h-[150px] flex-col items-center justify-center gap-[8px] rounded-lg"
                        >
                            <Image
                                src={tool.logo}
                                alt={tool.name}
                                width={150} 
                                height={150}
                                className="object-contain"
                            />
                            {/* <span className="text-[#888888] font-[14px] leading-[16.71px]">{tool.name}</span> */}
                        </div>
                    ))}
                </div>
            )}

            {/* Cards for Frontend */}
            {activeTab === "Frontend" && (
                <div className="w-[713px] flex flex-wrap justify-center mt-[50px] gap-[30px] mb-[50px]">
                    {frontendTools.map((tool) => (
                        <div
                            key={tool.name}
                            className="flex w-[150px] bg-white h-[150px] flex-col items-center justify-center gap-[8px] rounded-lg"
                        >
                            <Image
                                src={tool.logo}
                                alt={tool.name}
                                width={150} 
                                height={150}
                                className="object-contain"
                            />
                            {/* <span className="text-[#888888] font-[14px] leading-[16.71px]">{tool.name}</span> */}
                        </div>
                    ))}
                </div>
            )}

            {/* Cards for Mobile */}
            {activeTab === "Mobile" && (
                <div className="w-[713px] flex flex-wrap justify-center mt-[50px] gap-[30px] mb-[50px]">
                    {mobileTools?.map((tool) => (
                        <div
                            key={tool.name}
                            className="flex w-[150px] bg-white h-[150px] flex-col items-center justify-center gap-[8px] rounded-lg"
                        >
                            <Image
                                src={tool.logo}
                                alt={tool.name}
                                width={170} 
                                height={170}
                                className="object-contain"
                            />
                            {/* <span className="text-[#888888] font-[14px] leading-[16.71px]">{tool.name}</span> */}
                        </div>
                    ))}
                </div>
            )}

            {/* Cards for DevOps */}
            {activeTab === "DevOps" && (
                <div className="w-[713px] flex flex-wrap justify-center mt-[50px] gap-[30px] mb-[50px]">
                    {devopsTools?.map((tool) => (
                        <div
                            key={tool.name}
                            className="flex w-[150px] bg-white h-[150px] flex-col items-center justify-center gap-[8px] rounded-lg"
                        >
                            <Image
                                src={tool.logo}
                                alt={tool.name}
                                width={170} 
                                height={170}
                                className="object-contain"
                            />
                            {/* <span className="text-[#888888] font-[14px] leading-[16.71px]">{tool.name}</span> */}
                        </div>
                    ))}
                </div>
            )}

            {/* Cards for Analytics & Engagement */}
            {activeTab === "Analytics & Engagement" && (
                <div className="w-[713px] flex flex-wrap justify-center mt-[50px] gap-[30px] mb-[50px]">
                    {analyticsTools?.map((tool) => (
                        <div
                            key={tool.name}
                            className="flex w-[150px] bg-white h-[150px] flex-col items-center justify-center gap-[8px] rounded-lg"
                        >
                            <Image
                                src={tool.logo}
                                alt={tool.name}
                                width={170} 
                                height={170}
                                className="object-contain"
                            />
                            {/* <span className="text-[#888888] font-[14px] leading-[16.71px]">{tool.name}</span> */}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TabComponent;
