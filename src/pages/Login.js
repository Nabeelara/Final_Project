import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import candyIllustration from "images/candy.jpg";
import logo from "images/logoo.png";
import googleIconImageSrc from "images/google-icon.png";
import twitterIconImageSrc from "images/twitter-icon.png";
import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";
import { useAuth } from "context/AuthProvider";

const LoginPage = () => {
  const { login, form, setForm } = useAuth();

  const logoLinkUrl = "#";
  const illustrationImageSrc = candyIllustration;
  const headingText = "Login to Your Account";
  const socialButtons = [
    {
      iconImageSrc: googleIconImageSrc,
      text: "Sign In With Google",
      url: "https://google.com",
    },
    {
      iconImageSrc: twitterIconImageSrc,
      text: "Sign In With Twitter",
      url: "https://twitter.com",
    },
  ];
  const submitButtonText = "Sign In";
  const forgotPasswordUrl = "#";
  const signupUrl = "#";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call the login function from useAuth
    await login();
  };

  return (
    <AnimationRevealPage>
      <div className="min-h-screen bg-pink-100 text-gray-800 font-medium flex justify-center -m-8">
        <div className="max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1">

          <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div className="mt-12 flex flex-col items-center">
                <h1 className="text-2xl xl:text-3xl font-extrabold text-pink-600 my-4 mt-2 text-center">
                  {headingText}
                </h1>
              <div className="w-full flex-1 mt-8">
                
                {/* Sosmed */}
                <div className="flex flex-col items-center">
                  {socialButtons.map((socialButton, index) => (
                    <a
                      key={index}
                      href={socialButton.url}
                      className="w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-yellow-100 hover:bg-yellow-200 hover:border-yellow-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0"
                    >
                      <span className="iconContainer">
                        <img
                          src={socialButton.iconImageSrc}
                          className="icon"
                          alt=""
                        />
                      </span>
                      <span className="text">{socialButton.text}</span>
                    </a>
                  ))}
                </div>
                <div className="my-12 border-b text-center relative">
                  <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent">
                    Or Sign in with your e-mail
                  </div>
                </div>
                {/* Form */}
                <form className="mx-auto max-w-xs" onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-8 py-4 rounded-lg font-medium bg-pink-50 border border-pink-200 placeholder-gray-500 text-sm focus:outline-none focus:border-pink-400 focus:bg-white mt-5 first:mt-0"
                  />
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="w-full px-8 py-4 rounded-lg font-medium bg-pink-50 border border-pink-200 placeholder-gray-500 text-sm focus:outline-none focus:border-pink-400 focus:bg-white mt-5"
                  />
                  <button
                    type="submit"
                    className="mt-5 tracking-wide font-semibold bg-pink-500 hover:text-white w-full py-4 rounded-lg text-pink-200  hover:bg-pink-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <LoginIcon className="icon text-pink-200 hover:text-white mr-2" />
                    <span className="text">{submitButtonText}</span>
                  </button>
                </form>
                {/* Forgot Password */}
                <p className="mt-6 text-xs text-gray-600 text-center">
                  <a
                    href={forgotPasswordUrl}
                    className="border-b border-pink-400 border-dotted"
                  >
                    Forgot Password ?
                  </a>
                </p>
                {/* Sign Up */}
                <p className="mt-8 text-sm text-gray-600 text-center lg:hidden">
                  Don’t have an account?{" "}
                  <a
                    href={signupUrl}
                    className="border-b border-pink-400 border-dotted"
                  >
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="sm:rounded-r-lg flex bg-yellow-100 text-center hidden lg:flex justify-center px-20">
            <a href={logoLinkUrl}>
              <img src={logo} className="h-auto mx-auto mt-40" alt="Candy Logo" />
              {/* Sign Up */}
              <p className="mt-8 text-sm text-gray-600 text-center">
                Don’t have an account?{" "}
                <a
                  href={signupUrl}
                  className="border-b border-pink-400 border-dotted"
                >
                  Sign Up
                </a>
              </p>
            </a>
          </div>
        </div>
      </div>
    </AnimationRevealPage>
  );
};

export default LoginPage;
