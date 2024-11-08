import { sanityFetch } from "@/sanity/lib/live";
import { settingsQuery } from "../lib/queries";

export async function getGlobalData(){
    return await sanityFetch({query: settingsQuery});
}