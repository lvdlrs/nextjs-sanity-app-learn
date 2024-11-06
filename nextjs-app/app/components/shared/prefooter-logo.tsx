import { SettingsQueryResult } from "@/sanity.types";
import { urlForImage } from "@/sanity/lib/utils";
import { stegaClean } from "next-sanity";
import { Image } from "next-sanity/image";

type PrefooterProps = {
    logo: NonNullable<SettingsQueryResult>["prefooter"] | null;
}

export default function PrefooterLogo(props: PrefooterProps){
    return (
        <div className="prefooter__outercontainer overflow-hidden">
            <div className="container py-20">
                <div className="prefooter__client_logo flex justify-center h-auto mx-auto gap-6 md:gap-[60px] lg:gap-[130px]">        
                    {props.logo?.prefooterGallery?.galleryItem?.map((logoitem)=>(
                    <div key={logoitem._key} className="flex-shrink-0  animate-marquee w-full max-w-[115px] relative h-5 md:h-8">
                        <Image
                            className="block"
                            fill={true}
                            alt={stegaClean(logoitem.alt) || ""}
                            src={
                                urlForImage(logoitem)
                                ?.height(40)
                                .width(115)
                                .auto("format")
                                .url() as string
                                || ""
                            }
                            sizes="100vw"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}