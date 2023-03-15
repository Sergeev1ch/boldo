import img from './img/img.png';
import avatar1 from './img/avatar1.png';
import avatar2 from './img/avatar2.png';
import avatar3 from './img/avatar3.png';
import block1 from './img/block1.png';
import block2 from './img/block2.png';
import block3 from './img/block3.png';
import block4 from './img/block4.png';
import block5 from './img/block5.png';
import block6 from './img/block6.png';

import React from 'react';

const Blog = () => {
    return (
        <>
            <div className="w-full pt-14 px-25">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center">
                        <svg width="26" height="34" viewBox="0 0 26 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 16H17.0678C21.9511 16 25.9099 19.9588 25.9099 24.8421C25.9099 29.7255 21.9511 33.6842 17.0678 33.6842H0V16Z" fill="#0A2640"/>
                            <path d="M0 0.526337H11.3927C15.0552 0.526337 18.0243 3.4954 18.0243 7.15792C18.0243 10.8204 15.0552 13.7895 11.3927 13.7895H0V0.526337Z" fill="#0A2640"/>
                        </svg>
                        <p className="font-manrope text-main text-logo font-bold ml-4">Boldo</p>
                    </div>
                    <div className="text-main font-open-sans font-semibold">
                        <a>Product</a>
                        <a className="ml-10">Services</a>
                        <a className="ml-10">About</a>
                        <a className="ml-10 py-2 px-10 rounded-3xl border-2 border-main">Log In</a>
                    </div>
                </div>
                <div>
                    <div className="flex flex-col items-center mt-18">
                        <p className="text-main font-open-sans text-xl">Blog</p>
                        <p className="text-main font-manrope text-6-1/3xl mt-3">Thoughts and words</p>
                    </div>
                    <div className="mt-17 pb-18 flex items-center border-b border-main">
                        <img src={img} className="w-5/12"/>
                        <div className="ml-25">
                            <p className="font-open-sans font-semibold text-main"> Category<span className="font-open-sans text-gray font-normal ml-3">November 22, 2021</span></p>
                            <p className="mt-3 font-manrope text-main text-5xl">Pitch termsheet backing validation focus release.</p>
                            <div className="flex items-center mt-5">
                                <img src={avatar1} className="w-16" />
                                <span className="ml-3 text-black font-open-sans">Chandler Bing</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-24 mx-25">
                    <p className="text-5xl font-manrope">Latest news</p>
                    <div className="mt-10 w-full flex justify-between">
                        <div className="w-30pr">
                            <img src={block1}/>
                            <p className="font-open-sans font-semibold text-main mt-6"> Category<span className="font-open-sans text-gray font-normal ml-3">November 22, 2021</span></p>
                            <p className="font-open-sans text-xl mt-3 h-90px">Pitch termsheet backing validation focus release.</p>
                            <div className="flex items-center mt-5">
                                <img src={avatar1} className="w-16" />
                                <span className="ml-3 text-black font-open-sans">Chandler Bing</span>
                            </div>
                        </div>
                        <div className="w-30pr">
                            <img src={block2}/>
                            <p className="font-open-sans font-semibold text-main mt-6"> Category<span className="font-open-sans text-gray font-normal ml-3">November 22, 2021</span></p>
                            <p className="font-open-sans text-xl mt-3">Seed round direct mailing non-disclosure agreement graphical user interface rockstar.</p>
                            <div className="flex items-center mt-5">
                                <img src={avatar2} className="w-16" />
                                <span className="ml-3 text-black font-open-sans">Rachel Green</span>
                            </div>
                        </div>
                        <div className="w-30pr">
                            <img src={block3}/>
                            <p className="font-open-sans font-semibold text-main mt-6"> Category<span className="font-open-sans text-gray font-normal ml-3">November 22, 2021</span></p>
                            <p className="font-open-sans text-xl mt-3">Beta prototype sales iPad gen-z marketing network effects value proposition</p>
                            <div className="flex items-center mt-5">
                                <img src={avatar3} className="w-16" />
                                <span className="ml-3 text-black font-open-sans">Monica Geller</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 w-full flex justify-between">
                        <div className="w-30pr">
                            <img src={block4}/>
                            <p className="font-open-sans font-semibold text-main mt-6"> Category<span className="font-open-sans text-gray font-normal ml-3">November 22, 2021</span></p>
                            <p className="font-open-sans text-xl mt-3 h-90px">Pitch termsheet backing validation focus release.</p>
                            <div className="flex items-center mt-5">
                                <img src={avatar1} className="w-16" />
                                <span className="ml-3 text-black font-open-sans">Chandler Bing</span>
                            </div>
                        </div>
                        <div className="w-30pr">
                            <img src={block5}/>
                            <p className="font-open-sans font-semibold text-main mt-6"> Category<span className="font-open-sans text-gray font-normal ml-3">November 22, 2021</span></p>
                            <p className="font-open-sans text-xl mt-3">Seed round direct mailing non-disclosure agreement graphical user interface rockstar.</p>
                            <div className="flex items-center mt-5">
                                <img src={avatar2} className="w-16" />
                                <span className="ml-3 text-black font-open-sans">Rachel Green</span>
                            </div>
                        </div>
                        <div className="w-30pr">
                            <img src={block6}/>
                            <p className="font-open-sans font-semibold text-main mt-6"> Category<span className="font-open-sans text-gray font-normal ml-3">November 22, 2021</span></p>
                            <p className="font-open-sans text-xl mt-3">Beta prototype sales iPad gen-z marketing network effects value proposition</p>
                            <div className="flex items-center mt-5">
                                <img src={avatar3}/>
                                <span className="ml-3 text-black font-open-sans">Monica Geller</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-28 mb-35 flex justify-center w-full">
                       <a className="font-open-sans font-semibold text-xl py-4 px-14 rounded-56px border-2 border-main">Load more</a>
                    </div>
                </div>
                <div className="bg-main w-full pt-18 pb-18 flex items-center flex-col rounded-xl mb-21 bg-[url('./img/Ellipse2.svg')] bg-no-repeat bg-right-top">
                    <p className="font-manrope text-white text-5xl w-2/3 text-center">An enterprise template to ramp up your company website</p>
                    <div className="flex flex-row items-center mt-12 justify-center">
                        <input className="py-3 w-80 rounded-56px px-8 placeholder:text-black placeholder:font-open-sans placeholder:text-xl" placeholder="Your email address"/>
                        <a className="text-main bg-green-btn px-14 py-3 rounded-56px font-open-sans font-bold text-xl ml-6">Start now</a>
                    </div>
                </div>
                <div className="pt-25 pb-29 flex flex-row">
                    <div className="w-1/4">
                        <div className="flex flex-row items-center">
                            <svg width="25" height="33" viewBox="0 0 25 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 15.5H16.2851C21.0522 15.5 24.9167 19.3645 24.9167 24.1316C24.9167 28.8987 21.0522 32.7632 16.2851 32.7632H0V15.5Z" fill="#0A2640"/>
                                <path d="M0 0.394775H10.8597C14.435 0.394775 17.3333 3.29314 17.3333 6.86846C17.3333 10.4438 14.435 13.3421 10.8597 13.3421H0V0.394775Z" fill="#0A2640"/>
                            </svg>
                            <p className="font-manrope text-main text-logo font-bold ml-4">Boldo</p>
                        </div>
                        <p className="font-open-sans text-gray mt-10">Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.</p>
                        <p className="font-open-sans text-gray mt-16">All rights reserved.</p>
                    </div>
                    <div className="w-3/4 flex flex-row justify-end mt-4">
                        <div className="w-1/4 flex flex-col font-open-sans text-gray text-xl text-normal">
                            <a className="font-open-sans text-main font-bold text-xl">Landings</a>
                            <div className="mt-8 flex flex-col justify-between h-full">
                                <a>Home</a>
                                <a>Products</a>
                                <a>Services</a>
                            </div>
                        </div>
                        <div className="w-1/4 flex flex-col font-open-sans text-gray text-xl text-normal">
                            <a className="font-open-sans text-main font-bold text-xl">Company</a>
                            <div className="mt-8 flex flex-col justify-between h-full">
                                <a>Home</a>
                                <a>Careers <span className="text-main font-open-sans text-sm bg-green-btn py-0.5 px-3.5 rounded-3xl font-bold align-middle">Hiring!</span></a>
                                <a>Services</a>
                            </div>
                        </div>
                        <div className="w-1/4 flex flex-col font-open-sans text-gray text-xl text-normal">
                            <a className="font-open-sans text-main font-bold text-xl">Resources</a>
                            <div className="mt-8 flex flex-col justify-between h-full">
                                <a>Blog</a>
                                <a>Products</a>
                                <a>Services</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Blog;