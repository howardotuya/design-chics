import { Metadata } from 'next';
import * as React from 'react';
// import { RiAlarmWarningFill } from 'react-icons/ri';
import ComingSoon from '../../src/components/ComingSoon'
export const metadata: Metadata = {
    title: 'Not Found',
};

export default function NotFound() {
    return (
        <main>
            {/* <section className=' my-20'>
                <div className='layout flex  flex-col items-center justify-center text-center text-white'>
                    {/* <RiAlarmWarningFill
                        size={60}
                        className='drop-shadow-glow animate-flicker text-red-500'
                    /> */}
            {/* <h1 className='mt-8 text-4xl md:text-6xl'>Page Not Found</h1>
                    <a href='/'>Back to home</a>
                </div>
            </section> */}
            <ComingSoon />
        </main>
    );
}