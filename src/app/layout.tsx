import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface MenubarButtonProps {
  displayName: string;
  href: string;
  imagePath?: string;
}

interface SocialMediaProps {
  href: string;
  src: string;
  alt: string;
}

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const menubarButtons: MenubarButtonProps[] = [
  {
    displayName: "7Racing logo",
    href: "/",
    imagePath: "/logo-bg.png",
  },
  {
    displayName: "Team",
    href: "/team",
  },
  {
    displayName: "Blog",
    href: "/blog",
  },
];

const socials: SocialMediaProps[] = [
  {
    href: "https://www.linkedin.com/company/yeditepe-university-seven-racing",
    src: "/linkedin.png",
    alt: "Linkedin logo",
  },
  {
    href: "https://www.instagram.com/yeditepesevenracing/",
    src: "/ig.svg",
    alt: "Instagram logo",
  },
  {
    href: "https://www.youtube.com/channel/UC6mH-gplUv_qMa8t7b17sqA",
    src: "/ytsquircle.png",
    alt: "YouTube logo",
  },
  {
    href: "https://www.tiktok.com/@sevenracing",
    src: "/tiktokcircle.png",
    alt: "TikTok logo",
  },
  {
    href: "https://github.com/yeditepesevenracing",
    src: "/gh.svg",
    alt: "GitHub logo",
  },
];

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Menubar />
        <div className="pt-[64px] overflow-auto">{children}</div>
      </body>
    </html>
  );
};

const Menubar = () => {
  return (
    <div className="fixed flex flex-row border border-grey justify-between items-center top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md">
      <div className="flex flex-row">
        {menubarButtons.map(({ displayName, href, imagePath }, index) => (
          <MenubarButton
            displayName={displayName}
            href={href}
            imagePath={imagePath}
            key={index}
          />
        ))}
      </div>
      <div className="flex flex-row">
        {socials.map(({ href, src, alt }: SocialMediaProps, index: number) => (
          <SocialMediaIcon href={href} src={src} alt={alt} key={index} />
        ))}
      </div>
    </div>
  );
};

const MenubarButton = ({
  displayName,
  href,
  imagePath,
}: MenubarButtonProps) => {
  return (
    <div className="my-2 mx-4">
      {/* <Button variant="ghost" asChild> */}
      <Link href={href}>
        {imagePath ? (
          <Image src={imagePath} width={36} height={36} alt={displayName} />
        ) : (
          <div className="font-bold text-xl mt-1">{displayName}</div>
        )}
      </Link>
      {/* </Button> */}
    </div>
  );
};

const SocialMediaIcon = ({ href, src, alt }: SocialMediaProps) => {
  return (
    <a href={href} target="_blank">
      <Image src={src} width={36} height={36} alt={alt} className="m-2" />
    </a>
  );
};

export default RootLayout;
