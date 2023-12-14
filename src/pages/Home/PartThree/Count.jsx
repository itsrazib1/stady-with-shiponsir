import { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";


const Count = () => {
    const [countOn, setCountOn] = useState(false);

    return (
        <ScrollTrigger onEnter={() => setCountOn(true)} onExit={() => setCountOn(false)}>
            {
                countOn &&
                <div className="text-center w-full">

                    <div className="stat">
                        <div className=" grid grid-cols-2 lg:grid-cols-4 justify-items-center items-center gap-8">
                            <div className="md:flex lg:flex items-center">
                                <div className="stat-value text-5xl lg:text-6xl text-[#13bde4] font-normal md:border-r-2 lg:border-r-2">
                                    <div className="me-6">
                                        <CountUp
                                            start={0}
                                            end={10}
                                            duration={3.75}
                                        >
                                            {({ countUpRef, start }) => (
                                                <div>
                                                    <span ref={countUpRef} />
                                                    <h1 onClick={start}></h1>
                                                </div>
                                            )}
                                        </CountUp>
                                    </div>
                                </div>
                                <h1 className="font-normal text-left text-xl lg:text-2xl ms-6 text-white">YEAR OF <br /> EXPERIENCE</h1>
                            </div>
                            <div className="md:flex lg:flex items-center">
                                <div className="stat-value text-5xl lg:text-6xl text-[#13bde4] font-normal md:border-r-2 lg:border-r-2">
                                    <div className="me-6">
                                        <CountUp
                                            start={0}
                                            end={55}
                                            duration={3.75}
                                        >
                                            {({ countUpRef, start }) => (
                                                <div>
                                                    <span ref={countUpRef} />
                                                    <h1 onClick={start}></h1>
                                                </div>
                                            )}
                                        </CountUp>
                                    </div>
                                </div>
                                <h1 className="font-normal text-left text-xl lg:text-2xl lg:ms-6 text-white">QUALITY <br /> COURSES</h1>
                            </div>
                            <div className="md:flex lg:flex items-center">
                                <div className="stat-value text-5xl lg:text-6xl text-[#13bde4] font-normal md:border-r-2 lg:border-r-2">
                                    <div className="me-6">
                                        <CountUp
                                            start={0}
                                            end={820}
                                            duration={3.75}
                                        >
                                            {({ countUpRef, start }) => (
                                                <div>
                                                    <span ref={countUpRef} />
                                                    <h1 onClick={start}></h1>
                                                </div>
                                            )}
                                        </CountUp>
                                    </div>
                                </div>
                                <h1 className="font-normal text-left text-xl lg:text-2xl lg:ms-6 text-white">HAPPY <br /> STUDENTS</h1>
                            </div>
                            <div className="md:flex lg:flex items-center lg:ms-10">
                                <div className="stat-value text-[#13bde4]  text-5xl lg:text-6xl font-normal md:border-r-2 lg:border-r-2">
                                    <div className="me-6">
                                        <CountUp
                                            start={0}
                                            end={90}
                                            duration={3.75}
                                        >
                                            {({ countUpRef, start }) => (
                                                <div>
                                                    <span ref={countUpRef} />
                                                    <h1 onClick={start}></h1>
                                                </div>
                                            )}
                                        </CountUp>
                                    </div>
                                </div>
                                <h1 className="font-normal text-left text-xl lg:text-2xl ms-6 text-white">QUIZ <br /> COMPLETED</h1>
                            </div>

                        </div>
                    </div>
                </div>
            }
        </ScrollTrigger>
    );
};

export default Count;