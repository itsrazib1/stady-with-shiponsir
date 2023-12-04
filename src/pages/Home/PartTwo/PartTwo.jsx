

const PartTwo = () => {
    return (
        <>
        <div className="grid  sm:grid-cols-5 grid-cols-1  sm:px-16 px-2 text-center sm:py-16 py-5 sm:mx-28 mx-4 gap-5 text-white text-xl rounded-lg bg-gradient-to-r from-[#04e4c5] via-[#13bde4] to-[#209dff]">
            <div >
                <img className="h-[70px] mx-auto"src="/public/Razib/Professional-Service-2.png" alt="Professional Service" />
                <p className="pt-5">Professional Service</p>
            </div>
            <div >
                <img className="h-[70px] mx-auto"src="/public/Razib/Expert-Instructor.png" alt="Expert Instructor" />
                <p className="pt-5">Expert Instructor</p>
            </div>
            <div >
                <img className="h-[70px] mx-auto"src="/public/Razib/Latest-News.png" alt="Latest News" />
                <p className="pt-5">Latest News</p>
            </div>
            <div >
                <img className="h-[70px] mx-auto"src="/public/Razib/Admission-Now.png" alt="Admission Now" />
                <p className="pt-5">Admission Now</p>
            </div>
            <div >
                <img className="h-[70px] mx-auto"src="/public/Razib/Connections-Academy.png" alt="Connections Academy" />
                <p className="pt-5">Connections Academy</p>
            </div>
        </div>


        {/* part two 2  */}
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
   <div className="">
   <img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" className="max-w-sm rounded-lg shadow-2xl " />
   </div>
    <div className="">
      <h1 className="text-5xl font-bold">Box Office News!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </>
        
    );
};

export default PartTwo;