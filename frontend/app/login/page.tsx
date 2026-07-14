"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { GraduationCap } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { loginUser } from "@/services/auth";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    try {
      setLoading(true);

      const data = await loginUser(email, password);

      localStorage.setItem(
        "access_token",
        data.access_token
      );

      alert("Login Successful ✅");

      router.push("/dashboard");

    } catch (error) {
      alert("Invalid Email or Password");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 flex items-center justify-center p-6">

      <Card className="w-full max-w-md rounded-3xl border border-slate-700 bg-slate-900/80 backdrop-blur-xl shadow-2xl">

        <CardContent className="p-8 space-y-6">

          <div className="flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600">
              <GraduationCap className="h-8 w-8 text-white"/>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-4xl font-bold text-white">
              Enterprise LMS
            </h1>

            <p className="mt-2 text-slate-400">
              Welcome Back 👋
            </p>
          </div>

          <Input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <Button
            className="w-full h-11 bg-indigo-600 hover:bg-indigo-700"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? "Logging In..." : "Login"}
          </Button>

        </CardContent>

      </Card>

    </div>
  );
}