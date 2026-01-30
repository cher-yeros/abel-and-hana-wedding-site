"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Story" },
  {
    href: "/services",
    label: "Services",
    dropdown: [
      { href: "#", label: "Web Design" },
      { href: "#", label: "eCommerce" },
      { href: "#", label: "Branding" },
      { href: "#", label: "API" },
    ],
  },
  {
    href: "/gallery",
    label: "Gallery",
    dropdown: [
      { href: "#", label: "HTML5" },
      { href: "#", label: "CSS3" },
      { href: "#", label: "Sass" },
      { href: "#", label: "jQuery" },
    ],
  },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  const [offcanvas, setOffcanvas] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (offcanvas) {
      document.body.classList.add("overflow", "offcanvas");
    } else {
      document.body.classList.remove("overflow", "offcanvas");
    }
  }, [offcanvas]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav className="fh5co-nav" role="navigation">
        <div className="container">
          <div className="row">
            <div className="col-xs-2">
              <div id="fh5co-logo">
                <Link href="/">
                  Wedding<strong>.</strong>
                </Link>
              </div>
            </div>
            <div className="col-xs-10 text-right menu-1">
              <ul>
                {navItems.map((item) => (
                  <li
                    key={item.href}
                    className={
                      (item.dropdown ? "has-dropdown " : "") +
                      (isActive(item.href) ? "active" : "")
                    }
                    onMouseEnter={() =>
                      item.dropdown && setOpenDropdown(item.href)
                    }
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link href={item.href}>{item.label}</Link>
                    {item.dropdown && (
                      <ul
                        className="dropdown"
                        style={{
                          display:
                            openDropdown === item.href ? "block" : "none",
                        }}
                      >
                        {item.dropdown.map((d) => (
                          <li key={d.label}>
                            <Link href={d.href}>{d.label}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile toggle - injected for offcanvas */}
      <a
        href="#"
        className={`js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white ${
          offcanvas ? "active" : ""
        }`}
        aria-label="Toggle menu"
        onClick={(e) => {
          e.preventDefault();
          setOffcanvas(!offcanvas);
        }}
      >
        <i />
      </a>
      <div
        id="fh5co-offcanvas"
        style={{ display: offcanvas ? "block" : "none" }}
      >
        <ul>
          {navItems.map((item) => (
            <li key={item.href} className={isActive(item.href) ? "active" : ""}>
              <Link href={item.href} onClick={() => setOffcanvas(false)}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
