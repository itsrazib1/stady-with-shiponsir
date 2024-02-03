import { useState, useEffect } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Count = () => {
  const [countOn, setCountOn] = useState(true);

  useEffect(() => {
    if (countOn) {
      // Trigger the CountUp animation when countOn becomes true
      // You can customize the delay as needed
      setTimeout(() => {
        document.querySelectorAll(".countup").forEach((el) => {
          el.click();
        });
      }, 100);
    }
  }, [countOn]);

  return (
    <ScrollTrigger onEnter={() => setCountOn(true)} onExit={() => setCountOn(false)}>
      {countOn && (
        <div className="text-center w-full">
          <div className="stat">
            <div className="grid grid-cols-3 lg:grid-cols-4  gap-2 justify-items-center items-center lg:gap-8">
              {/* Your CountUp components */}
              {/* Example for one CountUp component */}
              <div className="md:flex lg:flex items-center">
                <div className="stat-value text-2xl lg:text-6xl text-[#13bde4] font-normal md:border-r-2 lg:border-r-2">
                  <div className="me-6">
                    <CountUp start={10} >
                      {({ countUpRef }) => (
                        <div>
                          <span ref={countUpRef} className="countup"></span>
                        </div>
                      )}
                    </CountUp>
                  </div>
                </div>
                <h1 className="font-normal text-left text-xs lg:text-2xl ms-6 text-white">YEAR OF <br /> EXPERIENCE</h1>
              </div>
              <div className="md:flex lg:flex items-center">
                <div className="stat-value text-2xl lg:text-6xl text-[#13bde4] font-normal md:border-r-2 lg:border-r-2">
                  <div className="me-6">
                    <CountUp
                      start={55}
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
                <h1 className="font-normal text-left text-xs lg:text-2xl lg:ms-6 text-white">QUALITY <br /> COURSES</h1>
              </div>
              <div className="md:flex lg:flex items-center">
                <div className="stat-value text-2xl lg:text-6xl text-[#13bde4] font-normal md:border-r-2 lg:border-r-2">
                  <div className="me-6">
                    <CountUp
                      start={820}
                      
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
                <h1 className="font-normal text-left text-xs lg:text-2xl lg:ms-6 text-white">HAPPY <br /> STUDENTS</h1>
              </div>
              <div className="md:flex lg:flex sm:block hidden items-center lg:ms-10">
                <div className="stat-value text-[#13bde4]  text-2xl lg:text-6xl font-normal md:border-r-2 lg:border-r-2">
                  <div className="me-6">
                    <CountUp
                      start={90}
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
                <h1 className="font-normal text-left text-sm lg:text-2xl ms-6 text-white">QUIZ <br /> COMPLETED</h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </ScrollTrigger>
  );
};

export default Count;
