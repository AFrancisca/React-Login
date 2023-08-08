import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <div className="flex justify-center items-center h-500">
      <div className="bg-[#A7A7A7] w-80 px-4 py-12 h-100 rounded-md flex justify-center md:mt-20 mt-10">
        <form className="px-6">
          <h3 className="my-4 text-center font-bold text-lg">Sign Up</h3>
          <div className="my-3 flex flex-col">
            <label htmlFor="text">First Name: </label>
            <input
              type="text"
              placeholder="Enter First Name"
              className="form-control rounded-md py-[3px] px-2"
            />
          </div>
          <div className="my-3 flex flex-col">
            <label htmlFor="text">Last Name: </label>
            <input
              type="text"
              placeholder="Enter Last Name"
              className="form-control rounded-md py-[3px] px-2"
            />
          </div>
          <div className="my-3 flex flex-col">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              placeholder="Enter Email"
              className="form-control rounded-md py-[3px] px-2"
            />
          </div>
          <div className=" my-3 flex flex-col">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              placeholder="Enter password"
              className="form-control rounded-md py-[3px] px-2"
            />
          </div>
          <div>
            <button className="p-1 rounded-md bg-yellow-300 w-full text-center text-white mt-2">
              Sign Up
            </button>
          </div>
          <p className="text-end mt-2 text-sm">
            Already Registered?{" "}
            <Link to="/" className="text-blue-600 ml-1">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
