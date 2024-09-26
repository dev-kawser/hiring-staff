import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/shared/PrimaryButton";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useEffect } from "react";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import axios from "axios";


const SignIn = () => {


    const location = useLocation()
    const navigate = useNavigate()

    const { signInUser, googleSignIn, user } = useAuth()
    const [showPassword, setShowPassword] = useState(false)


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {

        const email = data.email
        const password = data.password


        // Sign in with email,password authentication 
        signInUser(email, password)
            .then(() => {
                toast.success("Successfully Login !")
                navigate(location?.state ? location.state : "/")
            })
            .catch(() => {
                toast.warn("User not found. Please check your password")
            })
    };


    // Sign in with google authentication 
    const handleGoogleLogin = () => {
        googleSignIn()
            .then((result) => {

                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    photo: result.user?.photoURL,
                }

                axios.post("http://localhost:5000/users", userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            toast.success("Successfully Google Login");
                            navigate(location?.state ? location.state : '/');
                        }
                    })


            })
    }

    useEffect(() => {
        if (user) {
            navigate(location.state || "/")
        }
    }, [location.state, navigate, user])

    return (
        <div className="container">
            <div className="max-w-md mx-auto text-center">
                <div className="space-y-3">
                    <p className="text-blue">Login</p>
                    <h3>Welcome Back!</h3>
                    <p>Access your account by signing in</p>
                    <button
                        onClick={handleGoogleLogin}
                        className="flex items-center gap-2 justify-center font-medium py-2 w-full border rounded-lg hover:scale-95 transition-all duration-500">
                        <span className="text-xl">
                            <FcGoogle />
                        </span>{" "}
                        Sign in with Google
                    </button>
                </div>

                <div className="divider my-7">Or continue with</div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-left font-medium pb-1">
                            Email*
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                    message: "Email is not valid",
                                },
                            })}
                            className="input input-bordered w-full"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">{errors.email.message}</p>
                        )}
                    </div>

                    <div className="relative">
                        <label htmlFor="password" className="block text-left font-medium pb-1">
                            Password*
                        </label>
                        <input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            {...register("password", {
                                required: "Password is required",
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*\d)[a-zA-Z\d]{6,}$/,
                                    message:
                                        "Password must be at least 6 characters, contain letters and numbers",
                                },
                            })}
                            className="input input-bordered w-full"
                        />
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute text-18 top-11 right-5">
                            {
                                showPassword ? <FaRegEyeSlash /> : <FaRegEye />
                            }
                        </span>
                        {errors.password && (
                            <p className="text-red-500 text-sm">{errors.password.message}</p>
                        )}
                    </div>

                    <div className="flex justify-end">
                        <Link to="/reset-password" className="text-blue underline text-sm">
                            Forgot password?
                        </Link>
                    </div>

                    <PrimaryButton formSubmit={true} title={"Login"} />

                    <p className="mt-4 text-sm">
                        Already have an account?{" "}
                        <Link to="/register" className="text-blue underline">
                            Register
                        </Link>
                    </p>
                </form>

                

            </div>
        </div>
    );
};

export default SignIn;
