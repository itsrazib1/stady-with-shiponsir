import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Profile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className=" flex-none lg:flex justify-between">
                    <div className="text-center w-full lg:w-[50%] lg:text-left">
                        <img className="w-[50%] mt-8 rounded-xl  mx-auto" src={user?.photoURL} alt="" />
                    </div>
                    <div className="card shrink-0 mx-auto w-[90%] lg:w-[50%] max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder={user?.displayName} className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder={user?.email} className="input input-bordered" required />

                            </div>
                            <div className="">
                                <label className="text-white font-medium">Student picture</label>
                                <div>
                                    <input
                                        className=" lg:border lg:border-1 border-black lg:p-2 rounded-md"
                                        type="file"
                                        accept="image/*"
                                        name="picture"
                                        id=""
                                    />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number
                                    </span>
                                </label>
                                <input type="text" placeholder={user?.phoneNumber} className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-accent">Update Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;