import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import iconG from "../../../public/Images/Icons/google-Icon.png";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const { createUser, signInWithGoogle, updateUserProfileImage } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const from = location.state?.from?.pathname || "/";
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;
    const photo = form.photo.value;

    console.log(name, email, photo, password);
    if (password.length < 7) {
      setError("Password should be more than 6 characters");
      return;
    } else {
      setSuccess("User created successfully!");
    }
    // createUser(email, password)
    // .then(result => {
    //   const createdUser = result.user;
    //   console.log(createdUser);
    //   createdUser.displayName= name,
    //   createdUser.photoURL= photo,
    //   navigate(from, { replace: true });
    // })
    // .catch(error =>{
    //   setError(error.message);
    //   console.log(error);
    // });

    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        // updateUserProfileImage(name, photo)
        //   .then(() => {
        //     console.log('user profile');
        //   })
        //   .catch((error) => {
        //     setError(error.message);
        //     console.log(error);
        //   });

        updateUserProfileImage(name, photo)
          .then(() => {
            console.log("user profile");
            const saveUser = { name: name, email: email };
            fetch("https://learn-hub-server-zeta.vercel.app//users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.insertedId) {
                  reset();
                }
              });
          })
          .catch((error) => {
            setError(error.message);
            console.log(error);
          });

        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });

    // Handle form submission here
  };

  // const handleGoogleSignIn = () => {
  //   signInWithGoogle()
  //     .then((result) => {
  //       const saveUser = { name: displayName, email: email };
  //       fetch("https://learn-hub-server-zeta.vercel.app//users", {
  //         method: "POST",
  //         headers: {
  //           "content-type": "application/json",
  //         },
  //         body: JSON.stringify(saveUser),
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           if (data.insertedId) {
  //             navigate(from, { replace: true });
  //           }
  //         });

  //     })

  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // Show Pass word when someone click on eye drop icon

  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [showCPassword, setShowCPassword] = useState(false);
  const togglePasswordCVisibility = () => {
    setShowCPassword(!showCPassword);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <form
        onSubmit={handleRegister}
        className="py-8 px-4 shadow sm:rounded-lg sm:px-10 w-[35vw]"
      >
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Register
        </h2>
        <div className="mt-10">
          <label
            htmlFor="name"
            className="block text-start text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <div className="mt-1">
            <input
              placeholder="Type your name"
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              onChange={(e) => setName(e.target.value)}
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
          </div>
        </div>
        <div className="mt-3">
          <label
            htmlFor="email"
            className="block text-start text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <div className="mt-1">
            <input
              placeholder="Type your email"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              onChange={(e) => setEmail(e.target.value)}
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
          </div>
        </div>
        <div className="mt-3">
          <label
            htmlFor="password"
            className="block text-start text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <div className="mt-1 relative">
            <input
              placeholder="Type your password"
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
            <span
              className="absolute -mt-7 ml-[90%] mr-[10px] cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
          </div>
        </div>
        <div className="mt-3">
          <label
            htmlFor="confirmPassword"
            className="block text-start text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <div className="mt-1 relative">
            <input
              placeholder="Type your password"
              id="confirmPassword"
              name="confirmPassword"
              type={showCPassword ? "text" : "password"}
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
            <span
              className="absolute -mt-7 ml-[90%] mr-[10px] cursor-pointer"
              onClick={togglePasswordCVisibility}
            >
              {showCPassword ? <FaRegEye /> : <FaRegEyeSlash />}
            </span>
          </div>
        </div>

        <div className="mt-3">
          <label
            htmlFor="photoUrl"
            className="block text-start text-sm font-medium text-gray-700"
          >
            Photo Url
          </label>
          <div className="mt-1">
            <input
              placeholder="Your Photo url"
              type="text"
              id="photo"
              name="photo"
              autoComplete="photo"
              onChange={(e) => setPhotoUrl(e.target.value)}
              required
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            />
          </div>
        </div>
        <div className=" py-5 ">
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#fbbd23] hover:bg-[#ec7210]  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Register
          </button>
        </div>
        <div className="mt-3">
          <div className="mt-3">
            {error && !success && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
          </div>
        </div>

        {/* <div className="divider">OR</div> */}
        {/* Social Media Loing */}
        {/* <div className=" flex mx-auto justify-center gap-3"> */}
        {/* Google login */}
        {/* <div>
            <button
              onClick={handleGoogleSignIn}
              className="text-sm font-medium text-center px-4 py-2 border-[1px] rounded border-yellow-400  "
            >
              <div className="flex mx-auto items-center gap-2">
                <div className="w-[18px]">
                  <img src={iconG} alt="" />
                </div>
                Sign in
              </div>
            </button>
          </div>
        </div> */}
      </form>
    </div>
  );
};

export default Register;
