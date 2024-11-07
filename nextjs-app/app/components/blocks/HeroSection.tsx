import { type PortableTextBlock } from "next-sanity";

import PortableText from "@/app/components/PortableText";
import { HeroSection } from "@/sanity.types";

type HeroProps = {
  block: HeroSection;
  index: number;
};

export default function Hero({ block }: HeroProps) {

  const textColor = block?.textColor;
  const overlayColor = block?.overlayColor;

  if(textColor == 'lighttext'){
    
  }
  
  return (
    <div className="relative w-full h-full max-h-[730px] lg:max-h-[762px] overflow-hidden">
        <div className="flex flex-col justify-end">
            <div className="container">
                <div className="flex flex-col gap-10">
                    {block?.heading && (
                        <div className="w-full">  
                            <h1 className="text-heading1">{block?.heading}</h1>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
  );
}
