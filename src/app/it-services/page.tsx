import React from 'react';
import DesktopUi from '@/app/_components/ITServices/DesktopUi';
import MobileUi from '@/app/_components/ITServices/MobileUi';
import TabUi from '@/app/_components/ITServices/TabUi';
function ITServices() {
  return (
    <div className='min-h-screen max-w-full bg-black mx-auto'>
      <div className="hidden lg:block min-w-fit  mx-auto">
        <DesktopUi />
      </div>
      <div className="hidden sm:block lg:hidden">
        <TabUi />
      </div>
         <div className="block sm:hidden min-w-fit max-w-[410px] mx-auto">
        <MobileUi />
      </div>
    </div>
  );
}
export default ITServices;