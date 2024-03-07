"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Props = {};

const menu: { title: string; href: string; description: string }[] = [
  {
    title: "Architecture",
    href: "/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloribus iste quam nobis sapiente expedita quo mollitia consequuntur dicta. Eius iusto aliquam reprehenderit laboriosam at sapiente assumenda repudiandae voluptatem totam?",
  },
  {
    title: "Interior",
    href: "/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloribus iste quam nobis sapiente expedita quo mollitia consequuntur dicta. Eius iusto aliquam reprehenderit laboriosam at sapiente assumenda repudiandae voluptatem totam?",
  },
  {
    title: "Religious",
    href: "/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloribus iste quam nobis sapiente expedita quo mollitia consequuntur dicta. Eius iusto aliquam reprehenderit laboriosam at sapiente assumenda repudiandae voluptatem totam?",
  },
  {
    title: "Urban Design",
    href: "/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloribus iste quam nobis sapiente expedita quo mollitia consequuntur dicta. Eius iusto aliquam reprehenderit laboriosam at sapiente assumenda repudiandae voluptatem totam?",
  },
  {
    title: "Commercial Building",
    href: "/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloribus iste quam nobis sapiente expedita quo mollitia consequuntur dicta. Eius iusto aliquam reprehenderit laboriosam at sapiente assumenda repudiandae voluptatem totam?",
  },
  {
    title: "Corporate",
    href: "/",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit doloribus iste quam nobis sapiente expedita quo mollitia consequuntur dicta. Eius iusto aliquam reprehenderit laboriosam at sapiente assumenda repudiandae voluptatem totam?",
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const TopNav = (props: Props) => {
  return (
    <div className="flex justify-between w-[100vw] p-5 fixed top-0">
      <Link href="/cms">
        <img src="https://urbane.co.id/images/99ecc7baf3c8b616f63bda6456afe771.png" />
      </Link>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                {menu.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                News
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Community
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Download
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Store
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center">
        <Button className="px-2 py-2 rounded-full ease-linear duration-400 transition-all bg-transparent hover:bg-white hover:bg-opacity-40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </Button>
        <input
          type="text"
          className="px-3 py-2 w-48 bg-transparent focus:outline-none"
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default TopNav;
