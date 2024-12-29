import React, { useState } from 'react';
import leftImg from '../assets/left-img.jpg';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [showAdmin, setShowAdmin] = useState(true); 
  const navigate = useNavigate();

  const showAdminForm = () => {
    setShowAdmin(true); 
  };

  const showEmployeeForm = () => {
    setShowAdmin(false); 
  };

  const scrollToSplash = () => {
    navigate('/sjm');
  };

  return (
    <section id="admin-login" className="flex h-screen">
      {/* Left Section */}
      <div className="relative w-3/4 h-full">
        <img
          src={leftImg}
          alt="left-img"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center bg-black bg-opacity-60" style={{ fontFamily: 'Poppins, sans-serif' }}>
          <h1 className="text-3xl font-semibold">Welcome back!</h1>
          <p className="mt-4 text-sm font-bold">
            The first private services and trading corporation<br />
            based in San Juan, Batangas providing<br />
            manpower, hospitality, utility services,<br />
            equipment, and materials.
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative w-full h-full flex justify-center items-center bg-[#FEFAE0]">
        {/* Admin Form */}
        <div
          id="admin"
          className={`w-[450px] h-[500px] p-6 bg-[#D6CCC2] rounded-[30px] rounded-tl-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-x1 ${showAdmin ? 'z-20' : 'z-10'}`}
        >
          <div
            className="admin-label flex justify-center items-center w-[225px] h-[55px] absolute top-[-55px] left-0 bg-[#D6CCC2] text-[#5c215b] text-xl font-bold rounded-t-lg cursor-pointer"
            onClick={showAdminForm}
          >
            ADMIN
          </div>
          <img
            src={logo}
            alt="Company Logo"
            className="w-[120px] mx-auto my-4 cursor-pointer"
            onClick={scrollToSplash}
          />
          <form>
            <div className="mb-4">
              <label htmlFor="admin-email" className="block text-sm font-semibold">
                Email/Username
              </label>
              <input
                type="email"
                id="admin-email"
                placeholder="Enter your email"
                required
                className="w-full mt-2 p-3 rounded-md bg-[#b7b4a1] border border-[#D6CCC2] shadow-inner focus:outline-none focus:border-[#5c215b]"
                style={{
                    boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.2), inset -2px -2px 5px rgba(0, 0, 0, 0.2 )',
                }}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="admin-password" className="block text-sm font-semibold">
                Password
              </label>
              <input
                type="password"
                id="admin-password"
                placeholder="Enter your password"
                required
                className="w-full mt-2 p-3 rounded-md bg-[#b7b4a1] border border-[#D6CCC2] shadow-inner focus:outline-none focus:border-[#5c215b]"
                style={{
                    boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.2), inset -2px -2px 5px rgba(0, 0, 0, 0.2 )',
                }}
              />
            </div>

            <a href="#" className="block text-xs text-[#5c215b] mb-4">
              Forgot password?
            </a>

            <button
              type="submit"
              className="w-full py-3 bg-[#5c215b] text-white font-semibold rounded-md hover:bg-[#732574] focus:outline-none shadow-lg"
            >
              LOGIN
            </button>
          </form>
        </div>

        {/* Employee Form */}
        <div
          id="employee"
          className={`w-[450px] h-[500px] p-6 bg-[#E3D5CA] rounded-[30px] rounded-tr-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-x1 ${!showAdmin ? 'z-20' : 'z-10'}`}
        >
          <div
            className="employee-label flex justify-center items-center w-[225px] h-[55px] absolute top-[-55px] right-0 bg-[#E3D5CA] text-[#5c215b] text-xl font-bold rounded-t-lg cursor-pointer"
            onClick={showEmployeeForm}
          >
            EMPLOYEE
          </div>
          <img
            src={logo}
            alt="Company Logo"
            className="w-[120px] mx-auto my-4 cursor-pointer"
            onClick={scrollToSplash}
          />
          <form>
            <div className="mb-4">
              <label htmlFor="employee-email" className="block text-sm font-semibold">
                Company Email
              </label>
              <input
                type="email"
                id="employee-email"
                placeholder="Enter your email"
                required
                className="w-full mt-2 p-3 rounded-md bg-[#b7b4a1] border border-[#E3D5CA] shadow-inner focus:outline-none focus:border-[#5c215b]"
                style={{
                    boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.2), inset -2px -2px 5px rgba(0, 0, 0, 0.2 )',
                }}
                />
            </div>

            <div className="mb-4">
              <label htmlFor="employee-password" className="block text-sm font-semibold">
                Password
              </label>
              <input
                type="password"
                id="employee-password"
                placeholder="Enter your password"
                required
                className="w-full mt-2 p-3 rounded-md bg-[#b7b4a1] border border-[#E3D5CA] shadow-inner focus:outline-none focus:border-[#5c215b]"
                style={{
                    boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.2), inset -2px -2px 5px rgba(0, 0, 0, 0.2 )',
                }}
              />
            </div>

            <a href="#" className="block text-xs text-[#5c215b] mb-4">
              Forgot password?
            </a>

            <button
              type="submit"
              className="w-full py-3 bg-[#5c215b] text-white font-semibold rounded-md hover:bg-[#732574] focus:outline-none shadow-lg"
            >
              LOGIN
            </button>
          </form>
        </div>

        {/* Copyright Section */}
        <p className="absolute bottom-0 w-full text-center text-[#1e1e1e] text-xs py-2 opacity-50">
          Copyright © 2024. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Login;
