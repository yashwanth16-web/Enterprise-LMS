"use client";

import { User, Mail, Phone, Shield, Edit } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-4xl font-bold text-white">
          My Profile
        </h1>

        <p className="text-zinc-400 mt-2">
          Manage your account information.
        </p>
      </div>

      <div className="bg-[#171717] border border-[#2A2A2A] rounded-2xl p-8">

        <div className="flex items-center gap-6">

          <div className="w-24 h-24 rounded-full bg-white text-black flex items-center justify-center text-4xl font-bold">
            Y
          </div>

          <div>
            <h2 className="text-3xl font-bold text-white">
              Yashwanth
            </h2>

            <p className="text-zinc-400">
              Enterprise LMS Administrator
            </p>

            <button className="mt-5 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition flex items-center gap-2">
              <Edit size={18} />
              Edit Profile
            </button>

          </div>

        </div>

      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div className="bg-[#171717] border border-[#2A2A2A] rounded-2xl p-6">

          <h3 className="text-2xl font-bold text-white mb-6">
            Personal Information
          </h3>

          <div className="space-y-5">

            <div className="flex items-center gap-4">
              <User />
              <div>
                <p className="text-zinc-400 text-sm">Name</p>
                <p className="text-white">Yashwanth</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Mail />
              <div>
                <p className="text-zinc-400 text-sm">Email</p>
                <p className="text-white">
                  admin@enterpriselms.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone />
              <div>
                <p className="text-zinc-400 text-sm">Phone</p>
                <p className="text-white">
                  +91 9876543210
                </p>
              </div>
            </div>

          </div>

        </div>

        <div className="bg-[#171717] border border-[#2A2A2A] rounded-2xl p-6">

          <h3 className="text-2xl font-bold text-white mb-6">
            Security
          </h3>

          <div className="flex items-center gap-4">

            <Shield />

            <div>

              <p className="text-white font-semibold">
                Password
              </p>

              <p className="text-zinc-400">
                Last changed recently
              </p>

            </div>

          </div>

          <button className="mt-8 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold">
            Change Password
          </button>

        </div>

      </div>

    </div>
  );
}