"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";

import { useSearch } from "@/hooks/useSearch";
import { useNotifications } from "@/hooks/useNotifications";

import {
  Search,
  Bell,
  Mail,
  Moon,
  Sun,
  ChevronDown,
  User,
  Settings,
  LogOut,
} from "lucide-react";

export default function Navbar() {
  const router = useRouter();

  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  const [search, setSearch] = useState("");

  const { data: results } = useSearch(search);

  const { data: notifications } = useNotifications();

  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  function logout() {
    localStorage.removeItem("token");
    router.push("/login");
  }

  return (
    <header className="h-20 border-b border-border bg-card flex items-center justify-between px-8">

      {/* Left */}

      <div>

        <h1 className="text-3xl font-bold text-foreground">
          Dashboard
        </h1>

        <p className="text-sm text-muted-foreground">
          Welcome back 👋
        </p>

      </div>

      {/* Right */}

      <div className="flex items-center gap-5">

        {/* Search */}

        <div className="relative w-80">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search courses, students..."
            className="
              w-full
              rounded-xl
              border
              border-border
              bg-background
              py-3
              pl-11
              pr-4
              text-foreground
              placeholder:text-muted-foreground
              outline-none
              focus:ring-2
              focus:ring-white/20
            "
          />

          {search.length > 0 && (

            <div className="absolute left-0 right-0 mt-2 rounded-xl border border-border bg-card shadow-xl overflow-hidden z-50 max-h-96 overflow-y-auto">

              {results?.length === 0 && (

                <div className="p-4 text-sm text-muted-foreground">

                  No Results Found

                </div>

              )}

              {results?.map((item: any) => (

                <Link
                  key={`${item.type}-${item.id}`}
                  href={item.url}
                  onClick={() => setSearch("")}
                  className="block px-4 py-3 hover:bg-accent transition border-b border-border last:border-none"
                >

                  <div className="font-semibold">

                    {item.title}

                  </div>

                  <div className="text-xs text-muted-foreground">

                    {item.type}

                  </div>

                </Link>

              ))}

            </div>

          )}

        </div>

        {/* Notifications */}

        <div className="relative">

          <button
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowMessages(false);
              setShowProfile(false);
            }}
            className="rounded-xl p-2 hover:bg-accent transition"
          >

            <Bell size={22} />

          </button>

          {showNotifications && (

            <div className="absolute right-0 mt-3 w-80 rounded-2xl border border-border bg-card shadow-xl overflow-hidden z-50">

              <div className="px-5 py-4 border-b border-border">

                <h3 className="font-bold text-lg">

                  Notifications

                </h3>

                <p className="text-sm text-muted-foreground">

                  Latest Activity

                </p>

              </div>

              <div className="max-h-96 overflow-y-auto">

                {notifications?.length === 0 && (

                  <div className="p-5 text-sm text-muted-foreground">

                    No notifications available.

                  </div>

                )}

                {notifications?.map((item: any) => (

                  <div
                    key={item.id}
                    className="px-5 py-4 border-b border-border hover:bg-accent transition"
                  >

                    <div className="font-semibold">

                      {item.title}

                    </div>

                    <div className="text-sm text-muted-foreground mt-1">

                      {item.description}

                    </div>

                    <div className="text-xs text-zinc-500 mt-2">

                      {item.type}

                    </div>

                  </div>

                ))}

              </div>

            </div>

          )}

        </div>

        {/* Messages */}

        <div className="relative">

          <button
            onClick={() => {
              setShowMessages(!showMessages);
              setShowNotifications(false);
              setShowProfile(false);
            }}
            className="rounded-xl p-2 hover:bg-accent transition"
          >

            <Mail size={22} />

          </button>

          {showMessages && (

            <div className="absolute right-0 mt-3 w-72 rounded-2xl border border-border bg-card shadow-xl p-5 z-50">

              <h3 className="font-semibold mb-3">

                Messages

              </h3>

              <p className="text-sm text-muted-foreground">

                No new messages.

              </p>

            </div>

          )}
                  </div>

        {/* Theme Toggle */}

        <button
          onClick={() =>
            mounted &&
            setTheme(theme === "dark" ? "light" : "dark")
          }
          className="rounded-xl p-2 hover:bg-accent transition"
        >
          {mounted ? (
            theme === "dark" ? (
              <Sun size={22} />
            ) : (
              <Moon size={22} />
            )
          ) : (
            <div className="w-[22px] h-[22px]" />
          )}
        </button>

        {/* Profile */}

        <div className="relative">

          <button
            onClick={() => {
              setShowProfile(!showProfile);
              setShowNotifications(false);
              setShowMessages(false);
            }}
            className="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-accent transition"
          >

            <div className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center font-bold">

              Y

            </div>

            <ChevronDown size={18} />

          </button>

          {showProfile && (

            <div className="absolute right-0 mt-3 w-64 rounded-2xl border border-border bg-card shadow-xl overflow-hidden z-50">

              <div className="px-5 py-4 border-b border-border">

                <div className="font-semibold">

                  Yashwanth

                </div>

                <div className="text-sm text-muted-foreground">

                  Administrator

                </div>

              </div>

              <button
                onClick={() => {
                setShowProfile(false);
                router.push("/dashboard/profile");
            }}
            className="w-full flex items-center gap-3 px-5 py-4 hover:bg-accent transition"
       >
            <User size={18} />
            My Profile
          </button>

              <button
                onClick={() => router.push("/dashboard/profile")}
                className="w-full flex items-center gap-3 px-5 py-4 hover:bg-accent"
             >

                <Settings size={18} />

                Settings

              </button>

              <button
                onClick={logout}
                className="w-full flex items-center gap-3 px-5 py-4 text-red-500 hover:bg-red-500/10 transition"
              >

                <LogOut size={18} />

                Logout

              </button>

            </div>

          )}

        </div>

      </div>

    </header>
  );
}