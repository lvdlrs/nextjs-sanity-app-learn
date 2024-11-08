import Link from "next/link";

import { linkResolver } from "@/sanity/lib/utils";

interface ResolvedLinkProps {
  link: any;
  variant?: "linkonly" | "primary" | "secondary" | "primary-outline" | "secondary-outline";
  children: React.ReactNode;
  className?: string;
}

export default function ResolvedLink({
  link,
  variant,
  children,
  className,
}: ResolvedLinkProps) {
  const resolvedLink = linkResolver(link);

  if (typeof resolvedLink === "string") {
    return (
      
      <Link
        data-variant={variant}
        href={resolvedLink}
        target={link?.openInNewTab ? "_blank" : undefined}
        rel={link?.openInNewTab ? "noopener noreferrer" : undefined}
        className={(variant == 'linkonly') ? className : className ? "block leading-tight border rounded-[500px] py-4 px-6 transition-all duration-300 ease-in-out data-[variant='primary']:border-blue-400 data-[variant='primary']:bg-blue-400 data-[variant='primary']:text-white data-[variant='primary']:hover:bg-transparent data-[variant='primary']:hover:text-blue-400 data-[variant='secondary']:bg-white data-[variant='secondary']:text-grey-900 data-[variant='secondary']:hover:bg-grey-900 data-[variant='secondary']:hover:text-white data-[variant='primary-outline']:bg-transparent data-[variant='primary-outline']:text-blue-400 data-[variant='primary-outline']:hover:text-white data-[variant='primary-outline']:hover:bg-blue-400" + " " + className : "block leading-tight border rounded-[500px] py-4 px-6 transition-all duration-300 ease-in-out data-[variant='primary']:border-blue-400 data-[variant='primary']:bg-blue-400 data-[variant='primary']:text-white data-[variant='primary']:hover:bg-transparent data-[variant='primary']:hover:text-blue-400 data-[variant='secondary']:bg-white data-[variant='secondary']:text-grey-900 data-[variant='secondary']:hover:bg-grey-900 data-[variant='secondary']:hover:text-white data-[variant='primary-outline']:bg-transparent data-[variant='primary-outline']:text-blue-400 data-[variant='primary-outline']:hover:text-white data-[variant='primary-outline']:hover:bg-blue-400"}
      >
        {children}
      </Link>
    );
  }
  return <>{children}</>;
}
