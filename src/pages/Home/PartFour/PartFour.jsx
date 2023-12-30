import { Rating } from "@mui/material";
import { IoMdPerson } from "react-icons/io";
import "./PartFour.css";
import  img1  from "../../../../public/Ohi/Learning-jQuery-Mobile-for-Beginners-342x266.webp";
import  img  from "../../../../public/Ohi/HTML5CSS3-Essentials-in-4-Hours-342x266.webp";
import  img2  from "../../../../public/Ohi/PHP-Master-and-Make-Money-Fast-342x266.webp";
import  img3  from "../../../../public/Ohi/Rectangle-40-342x266.webp";
import  img4  from "../../../../public/Ohi/Rectangle-43-342x266.webp";
import  img5  from "../../../../public/Ohi/The-Art-of-Black-and-White-Photography-342x266.webp";


const partFourData = [
  {
    pic: img,
    course_title: "Business Coach Practitioner Accreditation",
    course_link:
      "https://coaching.thimpress.com/demo-instructor/courses/fully-accredited-professional-body-healing-coach-diploma/",
    review: 1,
    student: 311,
    price: "free",
  },
  {
    pic: img1,
    course_title: "The Complete Fitness & Health Masterclass",
    course_link:
      "https://coaching.thimpress.com/demo-instructor/courses/professional-life-coach-certification-guide/",
    review: 3,
    student: 50,
    price: "$69.00",
  },
  {
    pic: img2,
    course_title: "Business Fundamentals and Startup Coach Certification",
    course_link:
      "https://coaching.thimpress.com/demo-instructor/courses/business-coach-practitioner-accreditation/",
    review: 4.5,
    student: 45,
    price: "$60.00",
  },
  {
    pic: img3,
    course_title: "Entrepreneurship and Business Life Coach Certification",
    course_link:
      "https://coaching.thimpress.com/demo-instructor/courses/the-complete-fitness-health-masterclass/",
    review: 2,
    student: 32,
    price: "$30.00",
  },
  {
    pic: img4,
    course_title: "Professional Life Coach Certification & Guide",
    course_link:
      "https://coaching.thimpress.com/demo-instructor/courses/business-fundamentals-and-startup-coach-certification/",
    review: 3.3,
    student: 28,
    price: "$80.00",
  },
  {
    pic: img5,
    course_title: "Fully Accredited Professional Body Healing Coach Diploma",
    course_link:
      "https://coaching.thimpress.com/demo-instructor/courses/entrepreneurship-and-business-life-coach-certification/",
    review: 3,
    student: 27,
    price: "$55.00",
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
      <div className="grid md:grid-cols-3 grid-cols-1 items-center justify-center gap-[38px] md:w-[1232px] my-16 m-auto">
        {partFourData.map((Course, index) => (
          <div
            key={index}
            className="card card-compact md:w-96  bg-base-100 shadow-xl m-auto full-card-style"
          >
            <figure>
              <img
                className="w-full card-img-style"
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
        <a href="https://coaching.thimpress.com/demo-instructor/courses/">
          VIEW ALL
        </a>
      </button>
    </div>
  );
};

export default PartFour;
