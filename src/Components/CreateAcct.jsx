import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";

export default function CreateAcct() {
  return (
    <div className=" h-screen text-white py-10 px-5 max-w-md mx-auto">
      <div className="text-center mb-4">
        <h1 className=" text-3xl font-bold ">Create Account</h1>
        <p className="">Join Outfyt and start shopping smarter today.</p>
      </div>

      <form action="">
        <div>
          <div>
            <div className="mb-4">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                className="bg-[#333] p-2 rounded w-full mt-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                className="bg-[#333] p-2 rounded w-full mt-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password">Password:</label>
              <div className="relative">
                <input
                type="password"
                id="password"
                className="bg-[#333] p-2 rounded w-full mt-2"
              />
              <div className="absolute top-1/2 -translate-y-1/4 right-3 z-10"><IoMdEyeOff /></div>
              </div>
            </div>
            
          </div>
          <div className="flex gap-2">
            <input type="checkbox" name="" id="" className="" />
            <p>
              Agree with{" "}
              <a href="" className="underline text-[#E48045]">
                Terms and Conditions
              </a>
            </p>
          </div>
        </div>
        <div>
          <button className="bg-[#E48045] text-white py-2 px-4 rounded w-full mt-4">
            Create Account
          </button>
        </div>
      </form>
      <div className="relative my-10">
        <span className="w-full h-px bg-[#626262] block"></span>
        <span className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#212121] px-2 text-[#626262]">
          or with
        </span>
      </div>

      <div className=" flex items-center justify-center gap-7">
        <div className="border-1 rounded-full p-2">
          <FaApple size={24} />
        </div>
        <div className="border-1 rounded-full p-2">
          <FcGoogle size={24} />
        </div>
        <div className="border-1 rounded-full p-2 ">
          <FaFacebookF size={24} color="#1877F2" />
        </div>
      </div>
      
      <p className="text-center mt-9">
        Already have an account?{" "}
        <a href="#" className="text-[#E48045] underline">
          Sign in
        </a>
      </p>
    </div>
  );
}
