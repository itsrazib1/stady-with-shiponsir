
import "./PartOne.css"
const PartOne = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 mb-10 bg-gradient-to-r from-[#4cffe7] via-[#53dfff] to-[#4fb3ff]  "style={{backgroundImage: 'url(../../../../public/Razib/wall-background1.jpg) '}}>
            <div className="flex flex-col items-center justify-center  ms-6 md:ms-16 pt-16 sm:pt-32">
                <div>
                    <h1 className="text-5xl font-bold">The Best Education <br /> For Your Bright Future</h1>
                    <p className="mt-6 pe-16">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, aperiam quaerat. Porro, dicta ipsam officiis voluptates, consectetur quas et dignissimos delectus veritatis laborum corrupti impedit assumenda similique pariatur in possimus.</p>
                    <button type="button" className="items-center mt-16 text-white text-lg bg-gradient-to-r from-[#04e4c5] via-[#13bde4] to-[#209dff] hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-full px-10 py-2.5 text-center border border-black ">
                        CHECK MY CLASS
                    </button>
                </div>
            </div>
            <div className="relative ">
                <img className="backgroundImg " src="/public/Razib/part1.png" alt="" />

            </div>
        </div>
    );
};

export default PartOne;