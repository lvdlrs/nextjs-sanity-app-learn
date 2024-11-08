import { HeroSection } from "@/sanity.types";
import ResolvedLink from "@/app/components/ResolvedLink";

type HeroProps = {
  block: HeroSection;
  index: number;
};

export default function Hero({ block }: HeroProps) {
  const showBtnLinks = (block?.btnLink?.length ?? 0) > 0;
  const textColor = block?.textColor;
  const overlayColor = block?.overlayColor;
  const videoThumbnail = block?.thumbImage;

  return (
    <div data-color={textColor} data-overlay={overlayColor} className="relative w-full h-[729px] md:h-[740px] lg:h-[769px] overflow-hidden data-[color=lighttext]:text-white">
        <div className="flex flex-col justify-end">
            <div className="container">
                <div className="flex flex-col gap-10 md:flex-row lg:gap-[100px]">
                    {block?.heading && (
                        <div className="w-full md:w-[calc(50%-20px)] lg:w-[calc(65%-50px)]">  
                            <h1 className="text-heading1 font-semibold">{block?.heading}</h1>
                        </div>
                    )}
                    {(block?.content || showBtnLinks) ? (
                        <div className="w-full md:w-[calc(50%-20px)] lg:w-[calc(35%-50px)]">
                            <div className="flex flex-col gap-6">
                            {block?.content && (
                                <p className="">{ block.content }</p>
                            )}
                            {block?.btnLink?.map((link)=>(
                                <ResolvedLink variant="linkonly" key={link._key} link={link}>{link.linkCustomTitle}</ResolvedLink>
                            ))}
                            </div>
                        </div>
                    ) : "" }
                </div>
            </div>
        </div>
    </div>
  );
}
