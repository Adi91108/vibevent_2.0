"use client";
import { useState } from "react";
import {
  Calendar,
  Users,
  Shield,
  Zap,
  ArrowRight,
  Play,
  Star,
  Check,
  Globe,
  Clock,
  BarChart3,
  Sparkles,
  Menu,
  X,
  TrendingUp,
  Eye,
  Download,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import AuthModal from "@/components/AuthModal";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authMode, setAuthMode] = useState<"signin" | "signup" | null>(null);

  return (
    <div className="min-h-screen bg-milk">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-orange/90 backdrop-blur-lg border-b border-milk z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className=" bg-milk rounded-lg">
                <Image
                  src="/logo5.png"
                  alt="Calendar icon"
                  width={36}
                  height={36}
                  className="text-white"
                />
              </div>
              <span className="text-xl font-bold text-milk">
                EventEasee
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setAuthMode("signin")}
                className="text-milk hover:text-black transition-colors text-md font-bold hidden sm:block"
              >
                Sign In
              </button>

              <button
                className="md:hidden p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="w-5 h-5 text-orange" />
                ) : (
                  <Menu className="w-5 h-5 text-orange" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-milk border-t border-gray-100">
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => setAuthMode("signup")}
                className="mx-auto bg-gradient-to-r from-orange to-sunflower hover:bg-slate-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-milk to-milk">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-orange leading-tight">
                Master Your  <span className="text-milk bg-gradient-to-r from-orange to-bubblegum">Event,</span>{" "}
                <span className="bg-gradient-to-r from-orange to-bubblegum bg-clip-text text-transparent">
                  Engage Your Audience
                </span>
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center my-8">
                <button
                  onClick={() => setAuthMode("signup")}
                  className="w-full sm:w-auto bg-gradient-to-r from-peach to-orange hover:bg-orange text-white px-8 py-4 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center group"
                >
                  Start Creating Events
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}

      {/* How It Works Section */}

      {/* Stats Section */}
      <section id="stats" className="py-20 px-4 sm:px-6 lg:px-8 bg-milk">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-orange mb-4">
              About EventEasee
            </h2>
            <p className="text-xl text-orange">
              EventEasee is a powerful, scalable event management platform built
              for efficient planning and seamless participant engagement.
              Designed for Admins, Staff, and Event Owners, it provides secure,
              role-based access to manage events, participants, and interactions
              with ease. Our platform showcases fullstack development expertise,
              featuring secure authentication, a robust API, and responsive
              frontend design. We prioritize reliable database management and
              production-ready deployment, ensuring every event, big or small,
              runs smoothly. EventEase transforms complex event coordination
              into a simple, premium experience, letting you focus on creating
              unforgettable moments.
            </p>
          </div>
        </div>
      </section>

      {authMode && (
        <AuthModal initialMode={authMode} onClose={() => setAuthMode(null)} />
      )}
    </div>
  );
}
