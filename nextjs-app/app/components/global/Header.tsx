import { sanityFetch } from "@/sanity/lib/live";
import { settingsQuery } from "@/sanity/lib/queries";
import Link from "next/link";

import { stegaClean } from "@sanity/client/stega";
import { Image } from "next-sanity/image";

import { generateLink, urlForImage } from "@/sanity/lib/utils";
import LinkButton from "../ui/LinkButton";


export default async function Header() {
  const { data: settings } = await sanityFetch({query: settingsQuery});


  const logo = settings?.header?.siteLogo?.asset?._ref ? (
    <Link href="/" className="w-[117px] h-[40px] block relative">
    <Image
      className="object-cover"
      fill={true}
      alt={stegaClean(settings?.header?.siteLogo?.alt) || ""}
      src={
        urlForImage(settings?.header?.siteLogo)
          ?.height(40)
          .width(117)
          .auto("format")
          .url() as string
      }
      sizes="100vw"
    />
    </Link>
  ) : (
    <Link href="/">{settings?.seo?.siteTitle || 'Website Title'}</Link>
  );

  return (
  <header id="masthead" className="fixed top-0 left-0 w-full z-[999999]">
    <nav className="relative">
      <div className="container py-6 lg:py-0">
        <div className="flex items-center justify-between">

          <div className="flex flex-1 items-center lg:justify-between">
            <div className="flex flex-shrink-0 items-center">
              {logo}
            </div>
            <div className="w-full hidden lg:ml-8 lg:block">
              {settings?.header?.headerMenu && (
                <ul className="flex items-center lg:justify-end gap-6 md:gap-14">
                  {settings?.header?.headerMenu.map((navitem)=>(
                    <li key={navitem._key}>
                      {navitem.cta ? (
                        <LinkButton href={navitem.link ?? ""} type={navitem.linkType ?? ""} label={navitem.linkCustomTitle} openinewtab={navitem.openInNewTab ?? false}/>
                      ) :(
                        <Link className="py-[50px] block hover:text-blue-400" href={generateLink(navitem.link ?? "", navitem.linkType ?? "")}>{navitem.linkCustomTitle}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

    </nav>


    </header>
  );
}
