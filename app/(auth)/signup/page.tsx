"use client";
import React from "react";
import Register from "@/components/ui/register";
import Link from "next/link";

const SignUp = () => {
  return (
    <div className="bg-gradient-to-r from-pink-300 to-purple-300 min-h-screen flex items-center justify-center">
      <div className=" m-10 w-full max-w-4xl p-6 md:p-12 bg-white shadow-lg rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-extrabold leading-tight text-gray-800 md:text-5xl lg:text-6xl">
              Find Your Perfect Match with Our Dating App
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Our app uses advanced algorithms to connect you with compatible
              partners. Join now and start your journey to finding love.
            </p>
            <p className="mt-6 text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-pink-600 hover:underline font-semibold"
              >
                Login
              </Link>
            </p>
          </div>
          <Register />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
