import React from "react"

export interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
  // icon: () => JSX.Element;
}

export interface FooterLink {
  title: string;
  href: string;
}

export interface FooterProps {
  socials?: SocialLink[];
  links?: FooterLink[];
  companyName: string;
  copyrightYear: number | string;
}
