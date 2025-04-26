"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { UserButton, SignInButton, useUser } from "@clerk/nextjs";
import { IoMdContact } from "react-icons/io";
import axios from "axios";
import clsx from "clsx"; // Make sure clsx is installed: npm i clsx

const Navbar: React.FC = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (user) {
      axios.post("http://localhost:5001/api/user", { userId: user.id });
    }
  }, [user]);

  // Scroll detection logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={clsx(
        "fixed w-full flex justify-between items-center p-6 bg-transparent text-white h-[100px] z-50 transition-transform duration-200",
        {
          "-translate-y-full": !showNavbar,
          "translate-y-0": showNavbar,
        }
      )}
    >
      {/* Logo */}
      <div className="flex items-center gap-7">
        <Image src="/beard2.png" alt="New Cut Logo" width={50} height={50} />
        <span className="text-2xl font-bold tracking-wide text-[#d8a60d] font-serif">New Cut</span>
      </div>

      {/* Navigation Links */}
      <div className="nav-links space-x-10 text-sm">
        {[
          { href: "/", label: "HOME" },
          { href: "/about", label: "ABOUT" },
          { href: "/displaybookings", label: "BOOKINGLIST" },
          { href: "/barbers", label: "BARBERS" },
          { href: "/bookinglist", label: "APPOINTMENT" },
        ].map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-[#b27546] transition">
            {link.label}
          </Link>
        ))}
      </div>

      {/* Profile Section */}
      <div>
        {!isLoaded ? (
          <p className="text-sm">Loading...</p>
        ) : isSignedIn && user ? (
          <div className="flex items-center gap-4">
            <UserButton />
            <span className="text-sm">{user.firstName || user.primaryEmailAddress?.emailAddress}</span>
          </div>
        ) : (
          <div className="profile">
            <SignInButton>
              <div className="hover:text-amber-200">
                <IoMdContact className="h-8 w-8" />
              </div>
            </SignInButton>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
