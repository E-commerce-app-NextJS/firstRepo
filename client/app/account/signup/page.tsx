"use client";

import React, { useState, FormEvent } from 'react';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { register_me } from '@/Services/auth';
import { useRouter } from 'next/navigation';
import { TailSpin } from 'react-loader-spinner';

export default function Register() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    role: "User",
  });

  const [error, setError] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    if (!formData.email) {
      setError({ ...error, email: "Email Field is Required" });
      setLoading(false);
      return;
    }
    if (!formData.password) {
      setError({ ...error, password: "Password Field is required" });
      setLoading(false);
      return;
    }
    if (!formData.fullName) {
      setError({ ...error, fullName: "FullName Field is required" });
      setLoading(false);
      return;
    }

    const data = await register_me(formData);

    if (data.success) {
      setLoading(false);
      toast.success(data.message);
      setTimeout(() => {
        router.push('/account/login');
      }, 1000);
    } else {
      setLoading(false);
      toast.error(data.message);
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold text-center text-gray-900 mb-6">Register your account</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-left">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Your Name</label>
              <input
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                type="text"
                name="fullName"
                id="name"
                className="input-field"
                placeholder="Name"
              />
              {error.fullName && <p className="text-sm text-red-500">{error.fullName}</p>}
            </div>
            <div className="text-left">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
              <input
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                type="email"
                name="email"
                id="email"
                className="input-field"
                placeholder="name@company.com"
              />
              {error.email && <p className="text-sm text-red-500">{error.email}</p>}
            </div>
            <div className="text-left">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
              <input
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="input-field"
              />
              {error.password && <p className="text-sm text-red-500">{error.password}</p>}
            </div>
            <div className="text-left">
              <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900">Your Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleRoleChange}
                className="input-field"
              >
                <option value="User">User</option>
                <option value="Seller">Seller</option>
                <option value="Admin">Admin</option>
              </select>
            </div>

            {loading ? (
              <button
                type="button"
                className="w-full flex items-center justify-center btn-loading"
              >
                <TailSpin
                  height="20"
                  width="20"
                  color="white"
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </button>
            ) : (
              <button
                type="submit"
                className="w-full btn-primary"
              >
                Sign Up
              </button>
            )}

            <p className="text-sm text-gray-500 mt-4">
              Already have an account?{' '}
              <Link href="/account/login" className="font-medium text-orange-600 hover:underline">Sign In</Link>
            </p>
          </form>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}
