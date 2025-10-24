"use client";

import Image from "next/image";
import Link from "next/link";
import { ChangeEvent, FormEvent, useMemo, useState } from "react";

const emailPattern = /^(?:[a-zA-Z0-9_'^&/+-])+(?:\.(?:[a-zA-Z0-9_'^&/+-])+)*@(?:(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})$/;

type FormFields = {
  email: string;
  password: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

export default function LoginPage() {
  const [fields, setFields] = useState<FormFields>({ email: "", password: "" });
  const [touched, setTouched] = useState<Record<keyof FormFields, boolean>>({
    email: false,
    password: false
  });
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo<FormErrors>(() => {
    const nextErrors: FormErrors = {};

    if (!fields.email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!emailPattern.test(fields.email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!fields.password) {
      nextErrors.password = "Password is required.";
    }

    return nextErrors;
  }, [fields.email, fields.password]);

  const showEmailError = touched.email && errors.email;
  const showPasswordError = touched.password && errors.password;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched({ email: true, password: true });

    if (Object.keys(errors).length === 0) {
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  const handleChange = <Field extends keyof FormFields>(field: Field) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      setFields((previous) => ({ ...previous, [field]: event.target.value }));
    };

  const handleBlur = (field: keyof FormFields) => () => {
    setTouched((previous) => ({ ...previous, [field]: true }));
  };

  return (
    <div className="min-h-screen w-full bg-slate-950">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col items-center justify-center px-6 py-12 md:flex-row md:px-10">
        <div className="relative mb-10 w-full overflow-hidden rounded-3xl bg-gradient-to-br from-brand-500 via-indigo-500 to-slate-900 p-10 text-white shadow-2xl shadow-indigo-500/40 md:mb-0 md:mr-8 md:w-1/2">
          <div className="absolute inset-0 bg-gradient-radial from-white/20 via-transparent to-transparent" aria-hidden />
          <div className="relative">
            <Image
              src="/northridge-logo.svg"
              alt="Northridge logo"
              width={160}
              height={40}
              priority
              className="h-auto w-40"
            />
            <h1 className="mt-8 text-3xl font-semibold leading-tight md:text-4xl">
              Welcome back to Northridge Risk Investments
            </h1>
            <p className="mt-4 max-w-md text-sm text-slate-100/80 md:text-base">
              Manage your portfolio, monitor risk exposure, and stay informed with the latest market insights tailored for institutional investors.
            </p>
          </div>
        </div>

        <div className="w-full rounded-3xl bg-white/95 p-8 shadow-xl shadow-slate-900/10 backdrop-blur md:w-1/2">
          <form className="space-y-6" noValidate onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={fields.email}
                onChange={handleChange("email")}
                onBlur={handleBlur("email")}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 shadow-inner shadow-slate-200 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/20"
                placeholder="you@example.com"
              />
              {showEmailError ? (
                <p className="mt-2 text-sm text-rose-600">{errors.email}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="password" className="flex items-center justify-between text-sm font-medium text-slate-700">
                <span>Password</span>
                <Link href="/forgot-password" className="text-xs font-semibold text-brand-600 hover:text-brand-500">
                  Forgot password?
                </Link>
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={fields.password}
                onChange={handleChange("password")}
                onBlur={handleBlur("password")}
                className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 shadow-inner shadow-slate-200 focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/20"
                placeholder="Enter your password"
              />
              {showPasswordError ? (
                <p className="mt-2 text-sm text-rose-600">{errors.password}</p>
              ) : null}
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-xl bg-brand-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/40 transition hover:bg-brand-600 focus:outline-none focus:ring-4 focus:ring-brand-500/30"
            >
              Log In
            </button>

            <p className="text-center text-sm text-slate-500">
              Don&apos;t have an account?{" "}
              <Link href="/request-access" className="font-semibold text-brand-600 hover:text-brand-500">
                Request access
              </Link>
            </p>

            {submitted ? (
              <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                This form is configured for demonstration purposes only.
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
}
