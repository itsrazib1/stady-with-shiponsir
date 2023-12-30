import { useContext, useState } from "react";
import "./Register.css";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false)

  const handelRegister = async (event) => {
      event.preventDefault();


      const form = event.target;
      const name = form.name.value;
      const Batch = form.Batch.value;
      const Date = form.Date.value;
      const Time = form.Time.value;
      const gender = form.gender.value;
      const phoneNumber = form.phoneNumber.value;
      const email = form.email.value;
      const password = form.password.value;
      const Role = "student";

      const formData = new FormData();
      formData.append("image", form.picture.files[0]);

      try {
          const imgBbResponse = await axios.post(
              // `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Image_Upload_token}`,
              `https://api.imgbb.com/1/upload?key=4803c990e6ad9b3d6298554d7ce49184`,
              formData
          );

          const imgUrl = imgBbResponse.data.data.url;

          const user = await createUser(email, password, name, imgUrl);

          const saveUser = {
              name,
              email,
              phoneNumber,
              picture: user.photoURL,
              gender,
              Batch,
              Date,
              Time,
              Role,
          };

          fetch("http://localhost:5000/logindata", {
              method: "POST",
              headers: {
                  "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
          })
              .then((res) => res.json())
              .then((data) => {
                  if (data.insertedId) {
                      alert("User created successfully!");
                  }
              })
              .catch((error) => {
                  console.error("Error saving user:", error);
              });

          console.log("User created successfully!",user);
      } catch (error) {
          console.error("Error creating user:", error);
      }
  };

  return (
    <div className="reg-main-body m-auto min-h-screen md:px-0 px-4 ">
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
            <form onSubmit={handelRegister}>
              <div className="">
                <label className="text-white font-medium">Your Name</label>
                <div>
                  <input
                    className="info-input"
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    id=""
                  />
                </div>
              </div>
              <div className="flex gap-3">
                <div className="flex flex-col ">
                  <label htmlFor="title" className="mb-2 text-white">
                    Batch
                  </label>
                  <select
                    className="w-28 text-white btn btn-outline "
                    type="text"
                    name="Batch"
                    placeholder="Batch Name"
                    required
                    id=""
                  >

                    <option className="text-black" value="2019-20">2019-20</option>
                    <option className="text-black" value="2020-21">2020-21</option>
                    <option className="text-black" value="2021-22">2021-22</option>
                    <option className="text-black" value="2021-22">2022-23</option>

                  </select>
                </div>
                <div className="flex flex-col ">
                  <label htmlFor="title" className="mb-2 text-white">
                    Date
                  </label>
                  <select
                    className="w-28 text-white btn btn-outline  "
                    type="text"
                    name="Date"
                    placeholder="Date Name"
                    required
                    id=""
                  >

                    <option className="text-black" value="Sun,Tus,Thu">Sun,Tus,Thu</option>
                    <option className="text-black" value="Sat,Mon,Wed">Sat,Mon,Wed</option>

                  </select>
                </div>
                <div className="flex flex-col ">
                  <label htmlFor="title" className="mb-2 text-white">
                    Time
                  </label>
                  <select
                    className="w-28 text-white btn btn-outline "
                    type="text"
                    name="Time"
                    placeholder="Time Name"
                    required
                    id=""
                  >

                    <option className="text-black" value="7:00-8:00">7:00-8:00</option>
                    <option className="text-black" value="8:00-9:00">8:00-9:00</option>
                    <option className="text-black" value="12:00-1:00">12:00-1:00</option>
                    <option className="text-black" value="1:00-2:00">1:00-2:00</option>
                    <option className="text-black" value="2:00-3:00">2:00-3:00</option>
                    <option className="text-black" value="3:00-4:00">3:00-4:00</option>
                    <option className="text-black" value="4:00-5:00">4:00-5:00</option>
                    <option className="text-black" value="5:00-6:00">5:00-6:00</option>

                  </select>
                </div>
              </div>

              <div className="">
                <label className="text-white font-medium">Gender</label>
                <div className="text-white flex gap-4">
                  <div className="">
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
              <div>
                
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
                <div className="flex items-center">
                  <input
                    className="info-input"
                    type={showPassword ? "text":"password"}
                    name="password"
                    id=""
                  />
                  <span className="-ms-[35px]" onClick={()=> setShowPassword(!showPassword)}>
                    {
                      showPassword? <FaEyeSlash /> : <FaEye />
                    }
                  </span>
                </div>
              </div>
              <div className="mt-5">
                <div>
                  <input
                    className="btn hover:bg-sky-500  info-input"
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
