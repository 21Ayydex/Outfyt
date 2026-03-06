import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";

export default function Signin() {
  return (
    <div className=" h-screen  text-white py-10 px-5 max-w-md mx-auto">
      <div className="text-center animate-dropdown">
        <h1 className=" text-4xl font-bold">Sign In</h1>
        <p className="font-semibold py-2">Welcome back! Please enter your details</p>
      </div>

      <form action="">

        <div>
          <div className="py-4">
            <div className="py-4 animate-slidein">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                className="bg-[#333] p-2 rounded w-full mt-2"
              />
            </div>

            <div className="py-4 animate-slidein">
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

          <div className="flex justify-end animate-slideleft">
            <p >
              <a href="" className="underline text-[#E48045]">
                Forgot password?
              </a>
            </p>
          </div>
        </div>


        <div>
          <button className="bg-[#E48045] text-white py-2 px-4 rounded w-full mt-4 animate-scaleout">
            Sign In
          </button>
        </div>
      </form>


      <div className="relative my-10 animate-slideup">
        <span className="w-full h-px bg-[#626262] block"></span>
        <span className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#212121] px-2 text-[#626262]">
          or continue with
        </span>
      </div>

      <div className=" flex items-center justify-center gap-7 animate-slideup">
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

      <p className="text-center py-7 animate-slideup">
        Don't have an account?{" "}
        <a href="create-account" className="text-[#E48045] underline">
          Sign up
        </a>
      </p>
    </div>
  );
}
