import { getGlobalData } from "@/sanity/data/general";
import BlockRenderer from "./components/BlockRenderer";

export default async function Page() {
  const { data: page } = await getGlobalData();
  
  if (page?.frontpage && page?.frontpage?.length > 0) {
    return (
      <>
        {page?.frontpage?.map((block: any, index: number) => (
          <BlockRenderer key={block._key} index={index} block={block} />
        ))}
      </>
    );
  }
}
