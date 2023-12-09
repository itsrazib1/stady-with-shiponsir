import Count from './Count';
import './PartThree.css'

const PartThree = () => {
    return (
        <div className='py-10'>
            <div className='bgI'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 justify-items-center items-center container mx-auto'>
                    <div className='w-9/12 lg:w-7/12 mx-auto'>
                        <h1 className='text-3xl lg:text-5xl font-semibold'>How Can I Help You</h1>
                        <p className='mt-8'>Lorem ipsum dolor sit amet mollis felis dapibus arcu donec viverra. Pede phasellus eget etiam Maecenas vel vici quis dictum rutrum nec nisi et. Ac penatibus aenean laoreet donec viverra felis dapibus arcu, ipsum dolor sit amet mollis ipsum dolor sit amet ipsum dolor.</p>
                        <button className="font-bold text-black hover:text-white py-3 px-10 border-[#13bde4] border hover:bg-gradient-to-r from-[#04e4c5] via-[#13bde4] to-[#209dff] rounded-3xl mt-10">
                            <span className="font-medium">VIEW DETAIL</span>
                        </button>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 justify-items-center items-center'>
                        <div className='bg-base-100 shadow-xl hover:text-white hover:bg-gradient-to-r from-[#04e4c5] via-[#13bde4] to-[#209dff] w-80 h-72 p-4 rounded-xl'>
                            <img className='mt-4' src="https://coaching.thimpress.com/demo-instructor/wp-content/uploads/sites/45/2019/10/hover-icon-1-1.png" alt="" />
                            <h3 className='mt-6 text-2xl font-semibold'>Learn From The Experts</h3>
                            <p className='mt-4'>Lorem ipsum dolor sit amet mollis felis dapibus arcu donec viverra tiam maecenas vel vici quis dictum</p>
                        </div>
                        <div className='bg-base-100 shadow-xl hover:text-white hover:bg-gradient-to-r from-[#04e4c5] via-[#13bde4] to-[#209dff] w-80 h-72 p-4 rounded-xl lg:-mt-20'>
                            <img className='mt-4' src="https://coaching.thimpress.com/demo-instructor/wp-content/uploads/sites/45/2019/10/hover-icon-4-1.png" alt="" />
                            <h3 className='mt-6 text-2xl font-semibold'>Systematic Structure</h3>
                            <p className='mt-4'>Lorem ipsum dolor sit amet mollis felis dapibus arcu donec viverra tiam maecenas vel vici quis dictum</p>
                        </div>
                        <div className='bg-base-100 shadow-xl hover:text-white hover:bg-gradient-to-r from-[#04e4c5] via-[#13bde4] to-[#209dff] w-80 h-72 p-4 rounded-xl'>
                            <img className='mt-4' src="https://coaching.thimpress.com/demo-instructor/wp-content/uploads/sites/45/2019/10/hover-icon-3-1.png" alt="" />
                            <h3 className='mt-6 text-2xl font-semibold'>Flexible Learning Options</h3>
                            <p className='mt-4'>Lorem ipsum dolor sit amet mollis felis dapibus arcu donec viverra tiam maecenas vel vici quis dictum</p>
                        </div>
                        <div className='bg-base-100 shadow-xl hover:text-white hover:bg-gradient-to-r from-[#04e4c5] via-[#13bde4] to-[#209dff] w-80 h-72 p-4 rounded-xl lg:-mt-20'>
                            <img className='mt-4' src="https://coaching.thimpress.com/demo-instructor/wp-content/uploads/sites/45/2019/10/hover-icon-5-1.png" alt="" />
                            <h3 className='mt-6 text-2xl font-semibold'>24/7 Support</h3>
                            <p className='mt-4'>Lorem ipsum dolor sit amet mollis felis dapibus arcu donec viverra tiam maecenas vel vici quis dictum</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-40'>
                <div className="hero min-h-screen relative" style={{ backgroundImage: 'url(https://coaching.thimpress.com/demo-instructor/wp-content/uploads/sites/45/2019/10/bk-contact.jpg)' }}>
                    <div className="hero-overlay bg-opacity-20"></div>
                    <div className="hero-content w-full text-center text-neutral-content">


                        <div className="w-8/12 absolute -top-28">
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-2 gap-5 justify-items-center items-center card shrink-0 w-full shadow-2xl bg-base-100 py-5 lg:py-0'>
                                <div>
                                    <img className='w-36 lg:w-full' src="https://coaching.thimpress.com/demo-instructor/wp-content/uploads/sites/45/2019/10/contact-img.png" alt="" />
                                </div>
                                <div className="text-center text-black w-10/12 mx-auto">
                                    <h1 className='text-xl lg:text-5xl font-bold'>Register now</h1>
                                    <form className="mt-3 lg:mt-8">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text font-semibold">Name</span>
                                            </label>
                                            <input type="text" placeholder="Name" className="input input-bordered lg:py-8" required />
                                        </div>
                                        <div className="form-control mt-4">
                                            <label className="label">
                                                <span className="label-text font-semibold">Phone</span>
                                            </label>
                                            <input type="tel" placeholder="Phone" className="input input-bordered lg:py-8" required />
                                        </div>
                                        <div className="form-control mt-4">
                                            <label className="label">
                                                <span className="label-text font-semibold">Email</span>
                                            </label>
                                            <input type="Email" placeholder="Email" className="input input-bordered lg:py-8" required />
                                        </div>
                                        <div className="form-control mt-10">
                                            <button className="btn btn-ghost hover:text-white py-3 px-10 border-[#13bde4] border hover:bg-gradient-to-r from-[#04e4c5] via-[#13bde4] to-[#209dff] rounded-3xl">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='absolute bottom-6 w-9/12 mx-auto'>
                        <Count />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartThree;