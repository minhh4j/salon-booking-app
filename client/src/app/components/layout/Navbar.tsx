"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { UserButton, SignInButton, useUser } from "@clerk/nextjs";
import { IoMdContact } from "react-icons/io";

const Navbar: React.FC = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  return (
    <nav className="flex justify-between items-center p-6 bg-[#312e15] text-gray-300 h-[100px] border-b-2 border-[#000000]">
      {/* Logo */}
      <div className="logo">
      <div className="flex items-center gap-2">
    <Image src="/beard2.png" alt="Thaadi" width={50} height={50} />
    <span className="modal-text">BAROZ</span>
</div>


      </div>

      {/* Navigation Links */}
      <div className="nav-links space-x-6 text-lg">
        {[
          { href: "/", label: "HOME" },
          { href: "/about", label: "ABOUT" },
          { href: "/booking", label: "BOOKING" },
          { href: "/barbers", label: "BARBERS" },
          { href: "/services", label: "SERVICES" },
        ].map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-[#C1A25D] transition">
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
            <span className="text-sm">{user.fullName || user.primaryEmailAddress?.emailAddress}</span>
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
