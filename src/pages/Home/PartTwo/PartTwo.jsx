import phone from '/public/Razib/icons8-phonecall-96.png'
import mail from '/public/Razib/icons8-send-email-96.png'
import address from '/public/Razib/icons8-place-marker-96.png'
import aboutme from '/public/Razib/about-me.jpg'
import Professional from '/public/Razib/Professional-Service-2.png'
import Instructor from '/public/Razib/Expert-Instructor.png'
import Latest from '/public/Razib/Latest-News.png'
import Admission from '/public/Razib/Admission-Now.png'
import Connections from '/public/Razib/Connections-Academy.png'

const PartTwo = () => {
    return (
        <>
            <div className="grid  sm:grid-cols-5 grid-cols-1  sm:px-16 px-2 text-center sm:py-16 py-5 sm:mx-28 mx-4 gap-5 text-white text-xl rounded-lg bg-gradient-to-r from-[#04e4c5] via-[#13bde4] to-[#209dff]">
                <div >
                    <img className="h-[70px] mx-auto" src={Professional} alt="Professional Service" />
                    <p className="pt-5">Professional Service</p>
                </div>
                <div >
                    <img className="h-[70px] mx-auto" src={Instructor} alt="Expert Instructor" />
                    <p className="pt-5">Expert Instructor</p>
                </div>
                <div >
                    <img className="h-[70px] mx-auto" src={Latest} alt="Latest News" />
                    <p className="pt-5">Latest News</p>
                </div>
                <div >
                    <img className="h-[70px] mx-auto" src={Admission} alt="Admission Now" />
                    <p className="pt-5">Admission Now</p>
                </div>
                <div >
                    <img className="h-[70px] mx-auto" src={Connections} alt="Connections Academy" />
                    <p className="pt-5">Connections Academy</p>
                </div>
            </div>


            {/* part two 2  */}
            <div id='About' className="sm:px-28 sm:pt-32 p-4 min-h-screen">
                <div className="sm:flex  lg:flex-row">
                    <div className=" sm:w-[50%] w-full">
                        <div className="swssrelative">
                            <img src={aboutme} alt="About me avatar" />
                        </div>
                        <div className="font-bold text-lg swssabsolute rounded-lg bg-white p-4 shadow-lg w-60 sm:-mt-[390px] -mt-60 sm:ms-96 ms-1">
                            <div className="flex items-center">
                                <div>

                                </div>
                                <div className="ml-2">CONTACT ME NOW</div>
                            </div>
                        </div>
                        <div className="bg-white swssabsolute rounded-lg sm:-mt-[320px] -mt-44 p-4 text-slate-700 shadow-lg w-60 sm:ms-96 ms-24">
                            <div className="flex items-center">
                                <div>
                                    <img className="w-7" src={phone} alt="phone" />
                                </div>
                                <div className="ml-2">+8801922-257757</div>
                            </div></div>
                        <div className="bg-white swssabsolute rounded-lg -mt-28 p-4 text-slate-700 sm:-mt-[250px] shadow-lg w-60  sm:ms-96 ms-1">
                            <div className="flex items-center">
                                <div>
                                    <img className="w-7" src={mail} alt="phone" />
                                </div>
                                <div className="ml-2 text-sm">sheponalamdu506@gmail.com</div>
                            </div>
                        </div>
                        <div className="bg-white swssabsolute  rounded-lg p-4 text-slate-700 shadow-lg w-60 sm:ms-96 sm:-mt-[180px] ms-20 -mt-12">

                            <div className="flex items-center">
                                <div>
                                    <img className="w-7" src={address} alt="phone" />
                                </div>
                                <div className="ml-2 text-sm">Karatia Tangail,<br />Bangladesh</div>
                            </div>
                        </div>
                    </div>

                    <div className="sm:w-[50%] w-full py-10">
                        <h1 className="text-5xl font-bold">Hi, I am Shepon Alam <br /> About me</h1>
                        <p className="py-6">
                        Dedicated college teacher in Accounting since June 1, 2016. Passionate about fostering student growth through engaging lectures and practical insights. Committed to cultivating a dynamic learning environment and instilling a deep understanding of accounting principles.
                        </p>
                        <button className="font-bold text-black hover:text-white py-3 px-10 border border-[#13bde4] hover:bg-gradient-to-r from-[#04e4c5] via-[#13bde4] to-[#209dff] rounded-3xl">
                            <span className="">VIEW DETAIL</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PartTwo;