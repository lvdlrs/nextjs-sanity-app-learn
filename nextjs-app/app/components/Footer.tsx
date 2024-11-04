import { sanityFetch } from "@/sanity/lib/live";
import { pagesSlugs, settingsQuery } from "@/sanity/lib/queries";

import { stegaClean, type PortableTextBlock } from "next-sanity";
import PortableText from "@/app/components/PortableText";
import Link from "next/link";
import { Image } from "next-sanity/image";
import { urlForImage } from "@/sanity/lib/utils";

export default async function Footer() {
  const { data: settings } = await sanityFetch({query: settingsQuery});
  const { data } = await sanityFetch({
    query: pagesSlugs,
    perspective: "published",
    stega: false,
  });

  const footerLogo = settings?.footerLogo;
  const footerContent = settings?.footerContent;
  const footerSocial = settings?.socialIcon;

  const footerMenu = settings?.footerMenu;

  const copyright = settings?.copyrightSite;

  return (
    <footer className="relative">
      <div className="flex flex-col gap-10 md:gap-20 lg:gap-[86px]">
        <div className="container">
          <div className="flex justify-between">
            {(footerLogo || footerContent || footerSocial) ?
            <div className="flex flex-col text-center gap-10 md:text-left md:max-w-[280px]">
              {footerLogo && (
                <Link href="/" className="w-[115px] h-[40px] block mx-auto relative md:ml-0 md:mr-auto">
                <Image
                  className="object-cover"
                  fill={true}
                  alt={stegaClean(settings?.siteLogo?.alt) || ""}
                  src={
                    urlForImage(footerLogo)
                      ?.height(40)
                      .width(115)
                      .auto("format")
                      .url() as string
                      || ""
                  }
                  sizes="100vw"
                />
                </Link>
              )}
              { footerContent && (
                <PortableText
                className="leading-normal footer__contents"
                value={footerContent.content as PortableTextBlock[]}
              />
              ) }
              { footerSocial?.length && (
                <ul className="flex items-center gap-10">
                  {footerSocial.map((socialLinks, index) => (
                    <li key={socialLinks._key} className="block">
                    <Link href={socialLinks.href ?? ""} target="_blank" className="block w-5 h-5 relative">
                    <Image
                      className="object-cover"
                      fill={true}
                      alt={stegaClean(socialLinks?.socialIcon?.alt) || ""}
                      src={
                        urlForImage(socialLinks?.socialIcon)
                          ?.height(20)
                          .width(20)
                          .auto("format")
                          .url() as string
                          || ""
                      }
                    />
                    </Link>
                  </li>
                  ))}
                </ul>
              )}
            </div>
            : null }
            {footerMenu?.length && (
              <div className={(footerLogo || footerContent || footerSocial) ? "flex flex-col gap-10 md:flex-row max-w-[592px] w-full" : "flex flex-col gap-10 md:flex-row max-w-[592px] w-full"}>
                {footerMenu.map((menu)=>(
                  <div key={menu._key} className="flex flex-col text-center md:text-left gap-6 md:gap-10 max-w-[280px] w-full">
                    {menu.menuheading && (<h3 className="leading-normal text-[18px] font-semibold">{menu.menuheading}</h3>)}
                    {menu.footerMenuItems && (
                      <ul className="flex flex-col gap-3 leading-normal">
                        
                        {menu.footerMenuItems.map((navItem)=>(
                          <li key={navItem._key}>
                           <Link href="#">{navItem.linkCustomTitle}</Link>
                          </li>
                        ))
                        }
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="container">
          <div className="flex flex-col gap-3 md:justify-between md:flex-row py-6 border-t border-t-blue-400">
            {copyright ? <p className="text-[14px] text-grey-700 text-center md:text-left">{copyright}</p> : null }
            <p className="text-[14px] text-grey-700 text-center md:text-right">Webdesign by Fjellvann, a part of Solid Media</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
