import { Rating } from "@mui/material";
import { IoMdPerson } from "react-icons/io";
import "./PartFour.css";
import  img1  from "../../../../public/Razib/pof.jpg";
import  img  from "../../../../public/Razib/poa.jpg";
import  img2  from "../../../../public/Razib/tob.webp";
import  img3  from "../../../../public/Razib/iacc.jpg";
import  img4  from "../../../../public/Razib/bm.jpg";
import  img5  from "../../../../public/Razib/ac.jpg";


const partFourData = [
  {
    pic: img,
    course_title: "Principles of Accounting",
    course_link:
      "/",
    review: 4,
    student: 300,
    price: "10$/Month",
  },
  {
    pic: img1,
    course_title: "Principles of Finance",
    course_link:
      "/",
    review: 3,
    student: 50,
    price: "10$/Month",
  },
  {
    pic: img2,
    course_title: "Taxation in Bangladesh",
    course_link:
      "/",
    review: 4.5,
    student: 45,
    price: "10$/Month",
  },
  {
    pic: img3,
    course_title: "Intermediate Accounting",
    course_link:
      "/",
    review: 4,
    student: 32,
    price: "10$/Month",
  },
  {
    pic: img4,
    course_title: "Business Mathematics",
    course_link:
      "/",
    review: 3.5,
    student: 28,
    price: "10$/Month",
  },
  {
    pic: img5,
    course_title: "Advanced Accounting",
    course_link:
      "/",
    review: 3,
    student: 27,
    price: "10$/Month",
  },
];
const PartFour = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-5xl">Popular Course</h1>
      <p className="w-full md:w-[520px] text-center m-auto mt-8 text-gray-500">
        Lorem ipsum dolor sit amet mollis felis dapibus arcu donec viverra. Pede
        phasellus eget etiam maecenas vel vici quis dictum.{" "}
      </p>
      <div className="grid md:grid-cols-3 grid-cols-1 px-5 items-center justify-center gap-[38px] md:w-[1232px] my-16 m-auto">
        {partFourData.map((Course, index) => (
          <div
            key={index}
            className="card card-compact md:w-96  bg-base-100 shadow-xl m-auto full-card-style"
          >
            <figure>
              <img
                className="w-full card-img-style h-[300px] "
                src={Course.pic}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <a
                className="font-semibold text-2xl my-3"
                href={Course.course_link}
              >
                <h1>{Course.course_title}</h1>
              </a>
              <Rating
                className="mb-3"
                name="text-feedback"
                value={Course.review}
                readOnly
                precision={Course.review}
              />
              <div className="bg-gray-300 w-full h-[1px]"></div>
              <div className="flex justify-between my-2">
                <div className="flex items-center gap-2">
                  <IoMdPerson className="text-lg text-gray-500 " />
                  <p className="text-gray-500 text-base">
                    {Course.student} Student
                  </p>
                </div>
                <h1 className="text-xl font-bold text-black price-style">
                  {Course.price}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="viewAll-btn-link-style">
        <a href="/#About">
          VIEW ALL
        </a>
      </button>
    </div>
  );
};

export default PartFour;
