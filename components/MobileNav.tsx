"use client";

import React from "react";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const pathName = usePathname();

  return (
    <section>
      <Sheet>
        <SheetTrigger>
          <Image
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="menu"
          />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="border-none bg-black-1"
        >
          <Link
            className="flex cursor-pointer items-center gap-1 pb-10 pl-4"
            href="/"
          >
            <Image
              src="/icons/logo.svg"
              alt="logo"
              width={23}
              height={27}
            />
            <h1 className="text-white-1 text-24 font-extrabold ml-2">Youcastr</h1>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 text-white-1">
                {sidebarLinks.map(({ route, label, imgURL }) => {
                  const isActive = pathName === route || pathName.startsWith(`${route}/`);

                  return (
                    <SheetClose
                      asChild
                      key={route}
                    >
                      <Link
                        className={cn("flex gap-3 items-center py-4 max-lg:px-4", {
                          "bg-nav-focus border-r-4 border-orange-1": isActive,
                        })}
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
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
