"use client";

export default function SettingsPage() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-5xl font-bold text-white">
          Settings
        </h1>

        <p className="text-gray-400 mt-2">
          Manage your account and application preferences.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6">

        <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-white">
            👤 Profile
          </h2>

          <p className="text-gray-400 mt-3">
            Update your profile information.
          </p>
        </div>

        <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-white">
            🔒 Security
          </h2>

          <p className="text-gray-400 mt-3">
            Change your password and security settings.
          </p>
        </div>

        <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-white">
            🔔 Notifications
          </h2>

          <p className="text-gray-400 mt-3">
            Configure notification preferences.
          </p>
        </div>

        <div className="bg-[#171717] border border-[#2A2A2A] rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-white">
            🎨 Appearance
          </h2>

          <p className="text-gray-400 mt-3">
            Customize the application theme.
          </p>
        </div>

      </div>

    </div>
  );
}