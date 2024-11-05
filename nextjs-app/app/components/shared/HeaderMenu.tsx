"use client"
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";

import { generateLink, urlForImage } from "@/sanity/lib/utils";

import { SettingsQueryResult } from "@/sanity.types";

import { stegaClean } from "@sanity/client/stega";
import { Image } from "next-sanity/image";
import LinkButton from "../ui/LinkButton";


type SiteNavigationProps = {
    data: NonNullable<SettingsQueryResult>["header"] | null;
    seo: NonNullable<SettingsQueryResult>["seo"] | null;
  };

export default function HeaderMenu(props: SiteNavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const logo = props?.data?.siteLogo ? (
    <Link href="/" className="w-[117px] h-[40px] block relative">
    <Image
      className="object-cover"
      fill={true}
      alt={stegaClean(props?.data?.siteLogo?.alt) || ""}
      src={
        urlForImage(props?.data?.siteLogo)
          ?.height(40)
          .width(117)
          .auto("format")
          .url() as string
      }
      sizes="100vw"
    />
    </Link>
  ) : (
    <Link href="/">{props.seo?.siteTitle || 'Website Title'}</Link>
  );

  return (
    <Navbar maxWidth="xl" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          {logo}
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex lg:items-center lg:justify-end gap-6 md:gap-14" justify="center">
        {props.data?.headerMenu?.map((item)=>(
            <NavbarItem key={item._key}>
                {item.cta ? (
                    <LinkButton href={item.link ?? ""} type={item.linkType ?? ""} label={item.linkCustomTitle} openinewtab={item.openInNewTab ?? false}/>
                ) : (  
                    <Link href={generateLink(item.link ?? "", item.linkType ?? "")}>
                    {item.linkCustomTitle}
                    </Link>
                )}
            </NavbarItem>
        ))}
    </NavbarContent>
      <NavbarMenu>
        {props.data?.headerMenu?.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="block hover:text-blue-400"
              href="#"
              size="lg"
            >
              {item.linkCustomTitle}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
