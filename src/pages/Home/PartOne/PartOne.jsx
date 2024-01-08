
import "./PartOne.css"
import img from '../../../../public/Razib/wall-background1.jpg'
import img1 from '/public/Razib/part1.png'
import { useSpring, animated } from 'react-spring';
const PartOne = () => {
    const propss = useSpring({
        from: {
          transform: 'translateY(100%)',
        },
        to: {
          transform: 'translateY(0)',
        },
        config: {
            duration: 300,
        },
      });
    const props = useSpring({
        from: {
          transform: 'translateY(-100%)',
        },
        to: {
          transform: 'translateY(0)',
        },
        config: {
            duration: 300,
        },
      });
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 mb-10 bg-gradient-to-r from-[#4cffe7] via-[#53dfff] to-[#4fb3ff]  "style={{backgroundImage: `url(${img}) `}}>
            <animated.div style={propss} className="flex flex-col items-center justify-center  ms-6 md:ms-16 pt-16 sm:pt-32">
                <div>
                    <h1 className="text-5xl font-bold">The Best Education <br /> For Your Bright Future</h1>
                    <p className="mt-6 pe-16">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, aperiam quaerat. Porro, dicta ipsam officiis voluptates, consectetur quas et dignissimos delectus veritatis laborum corrupti impedit assumenda similique pariatur in possimus.</p>
                    <button type="button" className="items-center mt-16 text-white text-lg bg-gradient-to-r from-[#04e4c5] via-[#13bde4] to-[#209dff] hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full px-10 py-2.5 text-center border border-black ">
                        CHECK MY CLASS
                    </button>
                </div>
            </animated.div>
            <div className="relative ">
            <animated.img  style={props} className="backgroundImg " src={img1} alt="Animated Image" />

            </div>
        </div>
    );
};

export default PartOne;