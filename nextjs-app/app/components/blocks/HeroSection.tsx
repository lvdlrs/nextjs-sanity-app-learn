import { HeroSection } from "@/sanity.types";

type HeroProps = {
  block: HeroSection;
  index: number;
};

export default function Hero({ block }: HeroProps) {
  const showBtnLinks = (block?.btnLink?.length ?? 0) > 0;
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
                        <div className="w-full md:w-[calc(70%-50px)]">  
                            <h1 className="text-heading1">{block?.heading}</h1>
                        </div>
                    )}
                    {(block?.content || showBtnLinks) ? (
                        <div className="w-full md:w-[calc(30%-50px)]">
                            <div className="flex flex-col gap-6">
                            {block?.content && (
                                <div className=""></div>
                            )}
                            </div>
                        </div>
                    ) : "" }
                </div>
            </div>
        </div>
    </div>
  );
}
