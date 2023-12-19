import "./Register.css";
const Register = () => {
  return (
    <div className="reg-main-body">
      <div></div>
      <div>
        <form>
          <div className="">
            <label>Your Name</label>
            <div>
              <input type="text" name="1stName" placeholder="First Name" id="" />
              <input type="text" name="2ndName" placeholder="Middle Name" id="" />
              <input type="text" name="3ndName" placeholder="Last Name" id="" />
            </div>
            <input type="date" name="dateOfBirth" placeholder="date of birth" id="" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
