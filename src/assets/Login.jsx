import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="login flex justify-center items-center h-500">
      <div className="bg-[#A7A7A7] w-80 px-4 py-12 h-100 rounded-md flex justify-center md:mt-40 mt-20">
        <form className="px-6">
          <h3 className="my-4 text-center font-bold text-lg">Sign In</h3>
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
          <div className="mb-2">
            <input
              type="checkbox"
              className="custom-control custom-checkbox"
              id="check"
            />
            <label htmlFor="check" className="custom-input-label px-1">
              Remember me
            </label>
          </div>
          <div>
            <button className="p-1 rounded-md bg-yellow-300 w-full text-center text-white mt-2">
              Sign in
            </button>
          </div>
          <p className="text-end mt-2 text-sm">
            Forgot{" "}
            <a className="text-blue-600" href="#">
              Password?
            </a>
            <Link to="/signup" className="text-blue-600 ml-1">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
