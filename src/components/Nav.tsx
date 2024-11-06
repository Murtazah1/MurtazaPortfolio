"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type LinkItem = {
    name: string;
    path: string;
};

const links: LinkItem[] = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "projects",
        path: "/projects",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "contact info",
        path: "/contact",
    },
];

const Nav: React.FC = () => {
    const pathname = usePathname();

    return (
        <nav className="absolute top-4 right-4 flex gap-8">
            {links.map((link, index) => (
                <Link
                    href={link.path}
                    key={index}
                    className={`${link.path === pathname ? "text-red-500 border-b-2 border-red-500" : ""}`}
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    );
};

export default Nav;
