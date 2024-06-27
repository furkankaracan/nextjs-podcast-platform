"use client";

import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { SignedIn, SignedOut, useClerk } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";

const LeftSidebar = () => {
  const pathName = usePathname();
  const router = useRouter();
  const { signOut } = useClerk();

  return (
    <section className="left_sidebar">
      <nav className="flex flex-col gap-6">
        <Link
          className="flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center"
          href="/"
        >
          <Image
            src="/icons/logo.svg"
            alt="logo"
            width={23}
            height={27}
          />
          <h1 className="text-24 font-extrabold text-white max-lg:hidden">Youcastr</h1>
        </Link>

        {sidebarLinks.map(({ route, label, imgURL }) => {
          const isActive = pathName === route || pathName.startsWith(`${route}/`);

          return (
            <Link
              className={cn(
                "flex gap-3 items-center py-4 max-lg:px-4 justify-center lg:justify-start",
                { "bg-nav-focus border-r-4 border-orange-1": isActive }
              )}
              key={label}
              href={route}
            >
              <Image
                src={imgURL}
                alt={label}
                width={24}
                height={24}
              />
              <p>{label}</p>
            </Link>
          );
        })}
      </nav>

      <SignedOut>
        <div className="flex-center w-full pb-14 max-lg:px-4 lg:pr-8">
          <Button
            asChild
            className="text-16 w-full bg-orange-1 font-extrabold"
          >
            <Link href="/sign-in">Sign in</Link>
          </Button>
        </div>
      </SignedOut>

      <SignedIn>
        <div className="flex-center w-full pb-14 max-lg:px-4 lg:pr-8">
          <Button
            onClick={() => {
              signOut(() => router.push("/"));
            }}
            className="text-16 w-full bg-orange-1 font-extrabold"
          >
            Log out
          </Button>
        </div>
      </SignedIn>
    </section>
  );
};

export default LeftSidebar;
