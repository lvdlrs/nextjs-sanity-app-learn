import { Link } from "@/sanity.types";
import ResolvedLink from "../ResolvedLink";

export default async function LinkGroup(links: Array<Link> | undefined){
    if( links != undefined ){
        return (
            <ul className="flex items-center gap-3">
                {links.map((link, index)=>( 
                    <ResolvedLink key={index} link={link}>{link.linkCustomTitle}</ResolvedLink>
                ))}
            </ul>
        )
    }
}