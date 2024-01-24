import { LinkProps } from "../global.types";

interface NavbarData {
  links: LinkProps[];
}

interface NavbarBtnData {
  btns: LinkProps[];
}

export const navLinks: NavbarData = {
  links: [
    { label: "Home", url: "/" },
    { label: "Produts", url: "/products" },
    { label: "Wishlist", url: "/wishlist" },
    { label: "Support", url: "/support" },
  ],
};

export const navBtns: NavbarBtnData = {
  btns: [
    { label: "Signin", url: "/signin" },
    { label: "Signup", url: "/signup" },
  ],
};
