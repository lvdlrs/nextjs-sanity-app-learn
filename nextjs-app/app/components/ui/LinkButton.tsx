import { generateLink } from "@/sanity/lib/utils";
import Link from "next/link";

export default function LinkButton({
    variant = "primary",
  ...props
}: {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "primary-outline";
  type?: string;
  openinewtab?: boolean; 
}){
    return (
        <Link
        data-variant={variant}
        className="block py-4 px-6 border rounded-[500px] transition-all duration-300 ease-in-out data-[variant='primary']:border-blue-400 data-[variant='primary']:bg-blue-400 data-[variant='primary']:text-white data-[variant='primary']:hover:bg-transparent data-[variant='primary']:hover:text-blue-400 data-[variant='secondary']:bg-white data-[variant='secondary']:text-grey-900 data-[variant='secondary']:hover:bg-grey-900 data-[variant='secondary']:hover:text-white data-[variant='primary-outline']:bg-transparent data-[variant='primary-outline']:text-blue-400 data-[variant='primary-outline']:hover:text-white data-[variant='primary-outline']:hover:bg-blue-400"
        href={generateLink(props.href, props.type)}
        target={props.openinewtab ? "_blank": "_self"}
        >
        {props.label}
        </Link>
    )
}