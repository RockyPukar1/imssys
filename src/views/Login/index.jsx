import LogoIcon from "../../assets/LogoIcon"
import SocialIcon from "../../assets/SocialIcon";

const Login = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="cover absolute inset-0 flex items-center justify-center gap-96">
          <div className="left flex flex-col gap-5">
            <div className="h-48">
              <LogoIcon />
            </div>
            <div className="uppercase text-[#009ED8] text-5xl">kanban</div>
          </div>
          <div className="right">
            <div className="w-full">
              <div className="rounded px-8 pt-6 pb-8 mb-4">
                <form className="bg-white mb-6">
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm mb-2 text-left" htmlFor="username">
                      Email
                    </label>
                    <input className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none" id="username" type="text" placeholder="Enter you email" />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm mb-2 text-left" htmlFor="password">
                      Password
                    </label>
                    <input className="appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none" id="password" type="password" placeholder="***************" />
                  </div>
                  <div className="flex items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                      <input className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none" type="checkbox" name="remember" id="remember" />
                      <label htmlFor="remember" className="text-sm">Remember for 30 days</label>
                    </div>
                    <a className="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800 text-primary-600" href="#">
                      Forgot Password?
                    </a>
                  </div>
                </form>
                <button className="w-full text-grey-50 bg-primary-600 text-center mb-4 rounded-md p-2">Sign Up</button>
                <button className="w-full text-center mb-4 rounded-md flex gap-3 items-center justify-center p-3 border"><SocialIcon /> <span>Sign in with Google</span></button>
                <p className="text-center text-gray-500 text-xs">
                  Don&apos;t have an account? <span className="text-primary-600">Sign up</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;