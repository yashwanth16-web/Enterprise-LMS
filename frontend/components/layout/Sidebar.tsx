"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import {
  LayoutDashboard,
  BookOpen,
  PlayCircle,
  Users,
  GraduationCap,
  BarChart3,
  MessageSquare,
  Settings,
  LogOut,
  Sparkles,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    title: "Courses",
    icon: BookOpen,
    href: "/dashboard/courses",
  },
  {
    title: "Lessons",
    icon: PlayCircle,
    href: "/dashboard/lessons",
  },
  {
    title: "Students",
    icon: Users,
    href: "/dashboard/students",
  },
  {
    title: "Instructors",
    icon: GraduationCap,
    href: "/dashboard/instructors",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    href: "/dashboard/analytics",
  },
  {
    title: "Messages",
    icon: MessageSquare,
    href: "/dashboard/messages",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  function logout() {
    localStorage.removeItem("token");
    router.push("/login");
  }

  return (
    <aside className="w-72 h-screen bg-card border-r border-border flex flex-col">

      {/* Logo */}

      <div className="h-24 flex items-center gap-3 px-8 border-b border-border">

        <div className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center">

          <Sparkles size={24} />

        </div>

        <div>

          <h1 className="text-xl font-bold text-foreground">
            Enterprise LMS
          </h1>

          <p className="text-sm text-muted-foreground">
            Admin Panel
          </p>

        </div>

      </div>

      {/* Menu */}

      <nav className="flex-1 px-4 py-6 space-y-2">

        {menu.map((item) => {

          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`
                flex items-center gap-4
                rounded-2xl
                px-5
                py-4
                transition-all
                duration-200

                ${
                  active
                    ? "bg-white text-black shadow-lg"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                }
              `}
            >

              <Icon size={22} />

              <span className="font-medium">
                {item.title}
              </span>

            </Link>
          );
        })}

      </nav>

      {/* Logout */}

      <div className="p-5 border-t border-border">

        <button
          onClick={logout}
          className="
            w-full
            rounded-2xl
            bg-red-600
            hover:bg-red-700
            text-white
            py-4
            flex
            justify-center
            items-center
            gap-3
            transition
          "
        >

          <LogOut size={20} />

          Logout

        </button>

      </div>

    </aside>
  );
}