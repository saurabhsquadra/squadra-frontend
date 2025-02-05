'use client'
import React from 'react';
import DesktopUi from '../../_components/JobApply/DesktopUI';
import { useParams } from 'next/navigation';

function JobDetails() {
    

    const params = useParams();
    const jobId = params.id; // Extracting the dynamic id
    console.log(jobId, "id")

    return (
        <div className='min-h-screen max-w-full mx-auto'>
            <div className="hidden lg:block min-w-fit  mx-auto">
                <DesktopUi jobId={jobId}/>
                {/* <h1>Desktop careers view</h1> */}
            </div>
            <div className="hidden sm:block lg:hidden">
            <DesktopUi jobId={jobId}/>
                {/* <DesktopUi sections={jobSections}/> */}
            </div>
            <div className="block sm:hidden min-w-fit max-w-[410px] mx-auto">
            <DesktopUi jobId={jobId}/>
                {/* <DesktopUi sections={jobSections}/> */}
            </div>
        </div>
    );
}
export default JobDetails;