import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Header = ({
  headerTitle,
  titleClassName,
}: {
  headerTitle?: string;
  titleClassName?: string;
}) => {
  return (
    <header className={cn("flex items-center justify-between", titleClassName)}>
      {headerTitle ? <h1>{headerTitle}</h1> : <div />}
      <Link
        href="/discovery"
        className="text-16 font-semibold text-white-1 text-orange-1"
      >
        See all
      </Link>
    </header>
  );
};

export default Header;
