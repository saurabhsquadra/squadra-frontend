'use client'
import React, { useEffect, useState } from 'react';
import DesktopUi from '@/app/_components/JobDetails/DesktopUI';
import { useParams } from 'next/navigation';
import axios from 'axios';
function JobDetails() {
  const params = useParams();
  const jobId = params.id; // Extracting the dynamic id
  console.log(jobId, "id")

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [jobDetails, setJobDetails] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
    console.log(jobDetails, "jobDetails")
    useEffect(() => {
        const fetchJobDetails = async () => {
            setLoading(true)
            try {
                const response = await axios.get(`/api/jobs/${jobId}`);
                console.log('Job Details:', response.data);
                setJobDetails(response.data.data);
                setLoading(false)
                // You can set the job details to state here if needed
            } catch (error) {
                console.error('Error fetching job details:', error);
            } finally {
                setLoading(false)
            }
        };

        if (jobId) {
            fetchJobDetails();
        }
    }, [jobId]);

    const jobSections = [
        {
          title: "Company Description",
          content: jobDetails?.companyDescription
        },
        {
          title: "Job Description",
          content: jobDetails?.jobDescription
        },
        {
          title: "Qualification",
          content: jobDetails?.qualifications
        },
        {
          title: "Locations",
          content: jobDetails?.location
        },
        {
          title: "Additional Informations",
          content: jobDetails?.additionalInfo
        }
      ]
    

  return (
    <div className='min-h-screen max-w-full mx-auto'>
      <div className="hidden lg:block min-w-fit  mx-auto">
        <DesktopUi jobDetails={jobDetails} sections={jobSections} loading={loading}/>
        {/* <h1>Desktop careers view</h1> */}
      </div>
      <div className="hidden sm:block lg:hidden">
        {/* <TabUi /> */}
        <DesktopUi jobDetails={jobDetails} sections={jobSections} loading={loading}/>
      </div>
         <div className="block sm:hidden min-w-fit max-w-[410px] mx-auto">
        {/* <MobileUi /> */}
        <DesktopUi  jobDetails={jobDetails} sections={jobSections} loading={loading}/>
      </div>
    </div>
  );
}
export default JobDetails;