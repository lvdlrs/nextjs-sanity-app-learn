import { stegaClean, type PortableTextBlock } from "next-sanity";
import PortableText from "@/app/components/PortableText";
import Link from "next/link";
import { Image } from "next-sanity/image";
import { generateLink, urlForImage } from "@/sanity/lib/utils";
import { SettingsQueryResult } from "@/sanity.types";

type FooterProps = {
  footer: NonNullable<SettingsQueryResult>["footer"] | null;
};

export default async function Footer(props: FooterProps) {

  const footerData = props?.footer;

  return (
    <footer className="relative">
      <div className="flex flex-col gap-10 md:gap-20 lg:gap-[86px]">
        <div className="container">
          <div className="flex justify-between">
            {(footerData?.footerLogo || footerData?.footerContent || footerData?.socialIcon) ?
            <div className="flex flex-col text-center gap-10 md:text-left md:max-w-[280px]">
              {footerData?.footerLogo  && (
                <Link href="/" className="w-[115px] h-[40px] block mx-auto relative md:ml-0 md:mr-auto">
                <Image
                  className="object-cover"
                  fill={true}
                  alt={stegaClean(footerData?.footerLogo .alt) || ""}
                  src={
                    urlForImage(footerData?.footerLogo)
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
              { footerData?.footerContent && (
                <PortableText
                className="leading-normal footer__contents"
                value={footerData?.footerContent?.content as PortableTextBlock[]}
              />
              ) }
              { footerData?.socialIcon?.length && (
                <ul className="flex items-center gap-10">
                  {footerData?.socialIcon.map((socialitem) => (
                    <li key={socialitem._key} className="block">
                    <Link href={socialitem.href ?? ""} target="_blank" className="block w-5 h-5 relative">
                    <Image
                      className="object-cover"
                      fill={true}
                      alt={stegaClean(socialitem?.socialIcon?.alt) || ""}
                      src={
                        urlForImage(socialitem?.socialIcon)
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
            {footerData?.footerMenu?.length && (
              <div className={(footerData?.footerLogo || footerData?.footerContent || footerData?.socialIcon) ? "flex flex-col gap-10 md:flex-row max-w-[592px] w-full" : "flex flex-col gap-10 md:flex-row max-w-[592px] w-full"}>
                {footerData?.footerMenu?.map((menu)=>(
                  <div key={menu._key} className="flex flex-col text-center md:text-left gap-6 md:gap-10 max-w-[280px] w-full">
                    {menu.menuheading && (<h3 className="leading-normal text-[18px] font-semibold">{menu.menuheading}</h3>)}
                    {menu.footerMenuItems && (
                      <ul className="flex flex-col gap-3 leading-normal">
                        
                        {menu.footerMenuItems.map((navItem)=>(
                          <li key={navItem._key}>
                           <Link href={generateLink(navItem.link ?? "", navItem.linkType ?? "")}>{navItem.linkCustomTitle}</Link>
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
            {footerData?.copyrightSite ? <p className="text-[14px] text-grey-700 text-center md:text-left">{footerData?.copyrightSite}</p> : null }
            <p className="text-[14px] text-grey-700 text-center md:text-right">Webdesign by Fjellvann, a part of Solid Media</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
