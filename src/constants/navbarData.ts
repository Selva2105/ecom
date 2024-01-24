import { LinkProps } from "../global.types";

// Interface defining the structure of Navbar data with an array of links
interface NavbarData {
  links: LinkProps[];
}

// Interface defining the structure of Navbar button data with an array of buttons
interface NavbarBtnData {
  btns: LinkProps[];
}

// Constant for storing navigation links data
export const navLinks: NavbarData = {
  links: [
    { label: "Home", url: "/" },
    { label: "Products", url: "/products" },  // Fixed typo in label "Produts" to "Products"
    { label: "About us", url: "/aboutUs" },
    { label: "Support", url: "/support" },
  ],
};

// Constant for storing navigation buttons data
export const navBtns: NavbarBtnData = {
  btns: [
    { label: "Signin", url: "/signin" },
    { label: "Signup", url: "/signup" },
  ],
};
