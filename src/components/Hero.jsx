import React, { useState } from 'react';

const Hero = () => {        
    return (
        <div className="bg-white ">

        

    <section className="py-6">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                <div>
                    <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                    Lovin' it? Get it now!
                        <div className="relative inline-flex">
                            <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#FFC72C]"></span>
                            <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">McDonald's.</h1>
                        </div>
                    </h1>

                    <p className="mt-8 text-base text-black sm:text-xl">Fire up the app, tap your order, and savor the taste of McDonald's in minutes. Your favorites, faster than ever.</p>

                    <div className="mt-10 sm:flex sm:items-center sm:space-x-8">
                        <a href="#" title="" className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-[#DA291C] hover:bg-[#e72e2e] rounded-[10px]" role="button"> Start exploring </a>

                        
                    </div>
                </div>

                <div >
                    <img className="relative -right-20 w-full " src="src/assets/heroburger.png" alt="" />
                </div>
            </div>
        </div>
    </section>
</div>

    )
}
export default Hero;