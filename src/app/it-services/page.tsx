import React from 'react';
import DesktopUi from '@/app/_components/ITServices/DesktopUi';
import MobileUi from '@/app/_components/ITServices/MobileUi';
import TabUi from '@/app/_components/ITServices/TabUi';
function ITServices() {
  return (
    <div className='min-h-screen max-w-full bg-black mx-auto overflow-x-hidden'>
      <div className="hidden lg:block w-full mx-auto overflow-x-hidden">
        <DesktopUi />
      </div>
      <div className="hidden sm:block lg:hidden w-full mx-auto overflow-x-hidden">
        <TabUi />
      </div>
      <div className="block sm:hidden w-full max-w-[410px] mx-auto overflow-x-hidden">
        <MobileUi />
      </div>
    </div>
  );
}
export default ITServices;