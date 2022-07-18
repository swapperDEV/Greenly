import React from "react";
import Link from "next/link";
export const NavbarListButton = ({
  name,
  link,
}: {
  name: string;
  link: string;
}) => {
  return (
    <li>
      <Link href={`${link}`}>
        <a>{name}</a>
      </Link>
    </li>
  );
};
