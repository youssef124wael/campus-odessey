import React from 'react';

function ContainerLayout({children}) {
    return (
        <div className='2xl:max-w-screen-2xl xl:max-w-screen-xl md:max-w-screen-md mx-auto px-4'>
            {children}
        </div>
    );
}

export default ContainerLayout;