import React from 'react';
import DesktopUi from '../_components/Careers/DesktopUI';
function Careers() {
  return (
    <div className='min-h-screen max-w-full mx-auto'>
      <div className="hidden lg:block min-w-fit  mx-auto">
        <DesktopUi />
        {/* <h1>Desktop careers view</h1> */}
      </div>
      <div className="hidden sm:block lg:hidden">
        {/* <TabUi /> */}
        <DesktopUi />
      </div>
         <div className="block sm:hidden min-w-fit max-w-[410px] mx-auto">
        {/* <MobileUi /> */}
        <DesktopUi />
      </div>
    </div>
  );
}
export default Careers;