"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { UserButton, SignInButton, useUser } from "@clerk/nextjs";
import { IoMdContact } from "react-icons/io";
import axios from "axios";

const Navbar: React.FC = () => {
  const { isSignedIn, user, isLoaded } = useUser();

  useEffect(() => {
    if(user){
      axios.post("http://localhost:5001/api/user",{userId:user.id})
    }
  },[user])

  return (
    <nav className="flex fixed w-full justify-between items-center p-6 bg-transparent  text-[#ffffff] h-[100px] ">
      {/* Logo */}
      <div className="logo">
      <div className="flex items-center gap-2b  ">
    <Image src="/beard2.png" alt="Thaadi" width={50} height={50} />
    <span className="modal-text">BAROZ</span>
</div>


      </div>

      {/* Navigation Links */}
      <div className="nav-links space-x-10 text-sm">
        {[
          { href: "/", label: "HOME" },
          { href: "/about", label: "ABOUT" },
          { href: "/appointment", label: "APPOINTMENT" },
          { href: "/barbers", label: "BARBERS" },
          { href: "/bookinglist", label: "BOOKING" },
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
