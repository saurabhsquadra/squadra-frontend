import React from 'react';
import VisualImpactUi from '../_components/VisualImpact/VisualImpactUI';

function Careers() {
  return (
    <div className='min-h-screen max-w-full mx-auto'>
      <div className="hidden lg:block min-w-fit  mx-auto">
        <VisualImpactUi/>
        {/* <h1>Desktop careers view</h1> */}
      </div>
      <div className="hidden sm:block lg:hidden">
      <VisualImpactUi/>
        {/* <DesktopUi /> */}
      </div>
         <div className="block sm:hidden min-w-fit max-w-[410px] mx-auto">
         <h1>Mobile career view</h1>
        {/* <DesktopUi /> */}
      </div>
    </div>
  );
}
export default Careers;