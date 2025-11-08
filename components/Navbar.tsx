"use client";
import * as React from "react";
import { Logo, HamburgerIcon } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

// Types
export interface NavbarNavLink {
  href: string;
  label: string;
  active?: boolean;
}
export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  logoHref?: string;
  navigationLinks?: NavbarNavLink[];
  ctaText?: string;
  ctaHref?: string;
  onSignInClick?: () => void;
  onCtaClick?: () => void;
}
// Default navigation links
const defaultNavigationLinks: NavbarNavLink[] = [
  { href: "/", label: "Home" },
  { href: "/plans", label: "Workout Plans" },
  { href: "/calculators", label: "Calculator" },
  { href: "/about", label: "About" },
];
export const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  (
    {
      className,
      logo = <Logo />,
      logoHref = "#",
      navigationLinks = defaultNavigationLinks,
      ctaText = "Get Started",
      ctaHref = "#get-started",
      onCtaClick,
      ...props
    },
    ref
  ) => {
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef<HTMLElement>(null);
    useEffect(() => {
      const checkWidth = () => {
        if (containerRef.current) {
          const width = containerRef.current.offsetWidth;
          setIsMobile(width < 768); // 768px is md breakpoint
        }
      };
      checkWidth();
      const resizeObserver = new ResizeObserver(checkWidth);
      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }
      return () => {
        resizeObserver.disconnect();
      };
    }, []);
    // Combine refs
    const combinedRef = React.useCallback(
      (node: HTMLElement | null) => {
        containerRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      },
      [ref]
    );
    return (
      <header
        ref={combinedRef}
        className={cn(
          // "sticky top-0 z-50 w-full border-b bg-background/40 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6 [&_*]:no-underline",
          "sticky top-0 z-50 w-full border-b border-neutral-200/20 bg-neutral-border-neutral-200/10 backdrop-blur-xl shadow-xl shadow-neutral-700/7 rounded-b-xl px-4 md:px-6 [&_*]:no-underline supports-[backdrop-filter]:bg-background/20",
          className
        )}
        {...props}
      >
        <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between gap-4">
          {/* Left side */}
          <div className="flex items-center gap-2">
            {/* Mobile menu trigger */}
            {isMobile && (
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    className="group h-9 w-9 hover:bg-accent hover:text-accent-foreground"
                    variant="ghost"
                    size="icon"
                  >
                    <HamburgerIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-48 p-2">
                  <NavigationMenu className="max-w-none">
                    <NavigationMenuList className="flex-col items-start gap-1">
                      {navigationLinks.map((link, index) => (
                        <NavigationMenuItem key={index} className="w-full">
                          <Link
                            href={link.href}
                            className={cn(
                              "flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer no-underline",
                              link.active
                                ? "bg-accent text-accent-foreground"
                                : "text-foreground/80"
                            )}
                          >
                            {link.label}
                          </Link>
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenu>
                </PopoverContent>
              </Popover>
            )}
            {/* Main nav */}
            <div className="flex items-center gap-6">
              <button
                onClick={(e) => e.preventDefault()}
                className="flex items-center space-x-2 text-primary hover:text-primary/90 transition-colors cursor-pointer"
              >
                <div className="text-2xl">
                  <Link href="/">
                    <Logo />
                  </Link>
                </div>
                <span className="font-bold text-lg md:text-xl sm:inline-block">
                  <Link href="/">Gym Buddy</Link>
                </span>
              </button>
              {/* Navigation menu */}
              {!isMobile && (
                <NavigationMenu className="flex">
                  <NavigationMenuList className="gap-1">
                    {navigationLinks.map((link, index) => (
                      <NavigationMenuItem key={index}>
                        <Link
                          href={link.href}
                          className={cn(
                            "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer no-underline",
                            link.active
                              ? "bg-accent text-accent-foreground"
                              : "text-foreground/80 hover:text-foreground"
                          )}
                        >
                          {link.label}
                        </Link>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              )}
            </div>
          </div>
          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Add Right Side Comp Here (Sign In in Future) */}
            <Button
              size="sm"
              className="text-sm font-medium px-3 h-9 rounded-md shadow-sm"
              onClick={(e) => {
                e.preventDefault();
                if (onCtaClick) onCtaClick();
              }}
            >
              {ctaText}
            </Button>
          </div>
        </div>
      </header>
    );
  }
);
Navbar.displayName = "Navbar";
