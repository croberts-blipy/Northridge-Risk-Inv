"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Logo from "@/components/Brand/Logo";

export default function LoginPage() {
  const [email, setEmail] = useState("admin@northridge.app");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (res?.ok) {
      router.push("/dashboard");
    } else {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0C10] to-[#111827] flex flex-col items-center justify-center text-white px-4">
      {/* Header */}
      <div className="flex flex-col items-center mb-16">
        {/* You can pass a custom path if you renamed your file: <Logo src="/brand/new-logo.png" size={88} /> */}
        <Logo size={88} />
      </div>

      {/* Login card */}
      <form
        onSubmit={handleLogin}
        className="bg-[#1a1d24]/80 backdrop-blur-lg p-10 rounded-2xl shadow-2xl w-full max-w-md border border-gray-700"
      >
        <h2 className="text-xl font-semibold text-center mb-6 tracking-wide">
          Secure access portal
        </h2>

        <div className="mb-5">
          <label htmlFor="email" className="block text-sm text-gray-400 mb-2">Email</label>
          <input
            id="email"
            type="email"
            required
            placeholder="admin@northridge.app"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2.5 rounded-md bg-[#0F1116] border border-gray-700 text-white focus:ring-2 focus:ring-[#2F67FF] outline-none"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="block text-sm text-gray-400 mb-2">Password</label>
          <input
            id="password"
            type="password"
            required
            placeholder="**********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2.5 rounded-md bg-[#0F1116] border border-gray-700 text-white focus:ring-2 focus:ring-[#2F67FF] outline-none"
          />
        </div>

        {error && <p className="text-sm text-red-400 mb-3">{error}</p>}

        <button
          type="submit"
          className="w-full bg-[#2F67FF] hover:bg-[#1E4BFF] text-white font-semibold py-2.5 rounded-md transition-colors"
        >
          Sign in
        </button>

        <div className="mt-5 text-center text-sm text-gray-400">
          <a href="#" className="hover:text-[#2F67FF]">Forgot password?</a>
          <span className="mx-2">•</span>
          <a href="#" className="hover:text-[#2F67FF]">Create account</a>
        </div>
      </form>
    </div>
  );
}
