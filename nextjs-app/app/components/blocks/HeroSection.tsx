import { HeroSection } from "@/sanity.types";
import ResolvedLink from "@/app/components/ResolvedLink";
import LinkGroup from "../ui/LinkGroup";

type HeroProps = {
  block: HeroSection;
  index: number;
};

export default function Hero({ block }: HeroProps) {
  const showBtnLinks = (block?.btnLink?.length ?? 0) > 0;
  const textColor = block?.textColor;
  const overlayColor = block?.overlayColor;
  const videoThumbnail = block?.thumbImage;
  const video = block?.mediaurl;

  return (
    <div data-color={textColor} className="relative w-full h-[729px] md:h-[740px] lg:h-[769px] overflow-hidden data-[color=lighttext]:text-white">
        <div className="absolute top-0 left-0 w-full h-full">
        <div data-overlay={overlayColor} className="absolute top-0 left-0 w-full h-full z-[4] data-[overlay=darkoverlay]:bg-[#012C46] bg-opacity-45"></div>
        </div>
        <div className="flex flex-col justify-end relative z-[5] h-full py-10 md:py-14 lg:py-[100px]">
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
                            {(block?.btnLink?.length ?? 0) > 0 && LinkGroup(block?.btnLink)}
                            </div>
                        </div>
                    ) : "" }
                </div>
            </div>
        </div>
    </div>
  );
}
