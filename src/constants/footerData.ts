import {
  RiTwitterFill,
  RiYoutubeFill,
  RiLinkedinBoxFill,
  RiInstagramFill,
  RiFacebookBoxFill,
} from "react-icons/ri";
import React from "react";
import { LinkProps } from "../global.types";

// Define an interface for each section in the footer
interface FooterSection {
  title: string;
  links: LinkProps[];
}

// Define the overall structure of the footer data
interface FooterData {
  aboutUs: FooterSection;
  customerService: FooterSection;
  policies: FooterSection;
  socialMedia: FooterSection;
}

// Define the structure of social media links
export interface FooterSocial {
  icon: React.ElementType;
  link: string;
  className?: string;
}

// Social media data with icons, links, and optional styles
export const footerSocialData: FooterSocial[] = [
  {
    icon: RiFacebookBoxFill,
    link: "https://www.facebook.com",
    className: "hover:text-blue-700",
  },
  {
    icon: RiInstagramFill,
    link: "https://www.instagram.com",
    className: "hover:text-[#962fbf]",
  },
  {
    icon: RiLinkedinBoxFill,
    link: "https://www.linkedin.com",
    className: "hover:text-blue-700",
  },
  {
    icon: RiYoutubeFill,
    link: "https://www.youtube.com",
    className: "hover:text-red-700",
  },
  {
    icon: RiTwitterFill,
    link: "https://www.twitter.com",
    className: "hover:text-blue-500",
  },
];

// Data structure for each section in the footer
export const footerData: FooterData = {
  aboutUs: {
    title: "About Us",
    links: [
      { label: "Company Overview", url: "/company-overview" },
      { label: "Our Team", url: "/our-team" },
      { label: "Contact Us", url: "/contact-us" },
    ],
  },
  customerService: {
    title: "Customer Service",
    links: [
      { label: "FAQ", url: "/faq" },
      { label: "Shipping", url: "/shipping" },
      { label: "Returns", url: "/returns" },
    ],
  },
  policies: {
    title: "Policies",
    links: [
      { label: "Privacy Policy", url: "/privacy-policy" },
      { label: "Terms & Conditions", url: "/terms-and-conditions" },
      { label: "Refund Policy", url: "/refund-policy" },
    ],
  },
  socialMedia: {
    title: "Social Media",
    links: [
      { label: "Facebook", url: "https://www.facebook.com" },
      { label: "Twitter", url: "https://www.twitter.com" },
      { label: "Instagram", url: "https://www.instagram.com" },
    ],
  },
};
