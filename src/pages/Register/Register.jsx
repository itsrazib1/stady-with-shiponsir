import "./Register.css";
const Register = () => {
  return (
    <div className="reg-main-body m-auto  md:px-0 px-4 ">
      <div className="md:flex justify-center gap-20 items-center m-auto">
        <div className="">
          <h1 className="md:text-4xl text-3xl font-bold text-white md:mb-4 mb-2">Login/Register Forms</h1>
          <p className="text-white mb-3">If you have already registered then go to login</p>
          <div>
            <button className="reg-bag-btn me-3"><a href="/login">Login</a></button>
            <button className="reg-bag-btn"><a href="/">Home</a></button>
          </div>
        </div>
        <div className="bg-[#4cbdc56c] mt-7 rounded-xl">
          <div className="p-3">
            <h1 className="text-2xl text-center text-[rgb(44,238,252)] font-semibold">
              Register Form
            </h1>
            <form>
              <div className="">
                <label className="text-white font-medium">Your Name</label>
                <div>
                  <input
                    className="info-input"
                    type="text"
                    name="Name"
                    placeholder="Name"
                    required
                    id=""
                  />
                </div>
              </div>
              <div className="">
                <label className="text-white font-medium">Father's Name</label>
                <div>
                  <input
                    className="info-input"
                    type="text"
                    name="fatherName"
                    placeholder="Father Name"
                    required
                    id=""
                  />
                </div>
              </div>
              <div className="">
                <label className="text-white font-medium">Mother's Name</label>
                <div>
                  <input
                    className="info-input"
                    type="text"
                    name="Mother Name"
                    placeholder="Mother Name"
                    required
                    id=""
                  />
                </div>
              </div>
              <div className="">
                <label className="text-white font-medium">Gender</label>
                <div className="text-white">
                  <div>
                    <input
                      className="me-1"
                      type="radio"
                      name="gender"
                      value="male"
                      id=""
                    />
                    Male
                  </div>
                  <div>
                    <input
                      className="me-1"
                      type="radio"
                      name="gender"
                      value="female"
                      id=""
                    />
                    Female
                  </div>
                  <div>
                    <input
                      className="me-1"
                      type="radio"
                      name="gender"
                      value="other"
                      id=""
                    />
                    Other
                  </div>
                </div>
              </div>
              <div className="">
                <label className="text-white font-medium">Phone Number</label>
                <div>
                  <input
                    className="info-input"
                    type="tel"
                    name="phoneNumber"
                    placeholder="Phone"
                    id=""
                    required
                    pattern="[0-9]"
                  />
                </div>
              </div>
              <div className="">
                <label className="text-white font-medium">Your E-mail</label>
                <div>
                  <input
                    className="info-input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                    id=""
                  />
                </div>
              </div>
              <div className="">
                <label className="text-white font-medium">Student picture</label>
                <div>
                  <input
                    className="info-input"
                    type="file"
                    accept="image/*"
                    name="picture"
                    id=""
                  />
                </div>
              </div>
              <div className="">
                <label className="text-white font-medium">Password</label>
                <div>
                  <input
                    className="info-input"
                    type="password"
                    name="password"
                    id=""
                  />
                </div>
              </div>
              <div className="mt-5">
                <div>
                  <input
                    className="btn hover:bg-sky-500 info-input"
                    type="submit"
                    id=""
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
