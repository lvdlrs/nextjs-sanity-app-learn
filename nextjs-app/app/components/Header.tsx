import { sanityFetch } from "@/sanity/lib/live";
import { settingsQuery } from "@/sanity/lib/queries";
import Link from "next/link";

import { stegaClean } from "@sanity/client/stega";
import { Image } from "next-sanity/image";

import { urlForImage } from "@/sanity/lib/utils";


export default async function Header() {
  const { data: settings } = await sanityFetch({query: settingsQuery});


  const logo = settings?.siteLogo?.asset?._ref ? (
    <Link href="/" className="w-[117px] h-[40px] block relative">
    <Image
      className="object-cover"
      fill={true}
      alt={stegaClean(settings?.siteLogo?.alt) || ""}
      src={
        urlForImage(settings?.siteLogo)
          ?.height(40)
          .width(117)
          .auto("format")
          .url() as string
      }
      sizes="100vw"
    />
    </Link>
  ) : (
    <Link href="/">{settings?.siteTitle || 'Website Title'}</Link>
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
            <div className="w-full lg:ml-8 lg:block">
              <ul className="flex items-center lg:justify-end gap-6 md:gap-14">
                <li><Link className="py-[50px] block" href="#">Menu 1</Link></li>
                <li><Link className="py-[50px] block" href="#">Menu 2</Link></li>
                <li><Link className="py-[50px] block" href="#">Menu 3</Link></li>
                <li><Link className="py-[50px] block" href="#">Menu 4</Link></li>
                <li><Link className="block py-4 px-6 border rounded-[500px] border-blue-400 bg-blue-400 text-white hover:bg-transparent hover:text-blue-400 transition-all duration-300 ease-in-out" href="#">Header CTA</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </nav>


    </header>
  );
}
