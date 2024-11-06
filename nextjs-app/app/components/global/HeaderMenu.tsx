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
    footer: NonNullable<SettingsQueryResult>["footer"] | null;
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
    <Navbar 
    height="120px"
    classNames={{
      base: [
        'bg-transparent',
        'backdrop-blur-none',
      ],
      wrapper: [
        '!container',
        '!lg:h-auto'
      ],
      item: [
        'data-[active=true]:text-blue-400'
      ],
      brand: [
      ],
      toggle:[
        'w-[30px]',
        'rounded-none'
      ],
      toggleIcon: [
        'bg-blue-400',
        'transition-all',
        'duration-150',
        'group-data-[pressed=true]:opacity-100',
        'group-data-[open=true]:opacity-100',
        'group-data-[open=true]:bg-transparent',
        'w-[30px]',
        'h-[2px]',
        'before:w-[30px]',
        'before:h-[2px]',
        'before:bg-blue-400',
        'before:-translate-y-[10px]',
        'after:w-[30px]',
        'after:h-[2px]',
        'after:bg-blue-400',
        'after:translate-y-[10px]'
      ],
      menu:[
        'text-center',
        'gap-7'
      ],
      menuItem:[
        'text-inherit',
        'leading-normal'
      ]
    }} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand>
          {logo}
        </NavbarBrand>
        
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
      </NavbarContent>

      <NavbarContent className="hidden lg:flex lg:items-center lg:justify-end gap-6 md:gap-14" justify="center">
        {props.data?.headerMenu?.map((item)=>(
            <NavbarItem key={item._key}>
                {item.cta ? (
                    <LinkButton href={item.link ?? "#"} type={item.linkType ?? ""} label={item.linkCustomTitle} openinewtab={item.openInNewTab ?? false}/>
                ) : (  
                    <Link className="py-[50px] hover:text-blue-400 hover:opacity-100" isExternal={item.openInNewTab ? item.openInNewTab : false } href={generateLink(item.link ?? "", item.linkType ?? "")}>
                    {item.linkCustomTitle}
                    </Link>
                )}
            </NavbarItem>
        ))}
    </NavbarContent>
      <NavbarMenu>
        {props.data?.headerMenu?.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            {item.cta ? (
                    <LinkButton className="mt-36 inline-block" href={item.link ?? "#"} type={item.linkType ?? ""} label={item.linkCustomTitle} openinewtab={item.openInNewTab ?? false}/>
                ) : (  
                    <Link className="hover:text-blue-400 hover:opacity-100 text-[24px]" isExternal={item.openInNewTab ? item.openInNewTab : false } href={generateLink(item.link ?? "", item.linkType ?? "")}>
                    {item.linkCustomTitle}
                    </Link>
                )}
          </NavbarMenuItem>
        ))}
          <div className="mt-6 w-full justify-end flex flex-col gap-3 text-center py-6 border-t border-t-blue-400">
            {props.footer?.copyrightSite ? <p className="text-[14px] text-grey-700">{props.footer?.copyrightSite}</p> : null }
            <p className="text-[14px] text-grey-700">Webdesign by Fjellvann, a part of Solid Media</p>
          </div>
      </NavbarMenu>
    </Navbar>
  );
}
