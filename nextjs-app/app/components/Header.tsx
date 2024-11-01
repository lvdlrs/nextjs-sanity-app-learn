import Link from "next/link";

export default async function Header() {

  return (
  <header id="masthead" className="fixed top-0 left-0 w-full z-[999999]">
    <nav className="relative">
      <div className="container py-6 lg:py-0">
        <div className="flex items-center justify-between">

          <div className="flex flex-1 items-center lg:justify-between">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/">Site Title</Link>
            </div>
            <div className="w-full lg:ml-8 lg:block">
              <ul className="flex items-center lg:justify-end gap-6 md:gap-14">
                <li><Link className="py-[50px] block" href="#">Menu 1</Link></li>
                <li><Link className="py-[50px] block" href="#">Menu 2</Link></li>
                <li><Link className="py-[50px] block" href="#">Menu 3</Link></li>
                <li><Link className="py-[50px] block" href="#">Menu 4</Link></li>
                <li><Link className="block py-4 px-6 border rounded-[500px] border-blue-400 bg-blue-400 text-white hover:bg-transparent hover:text-blue-400 transition-all duration-300 ease-in-out" href="#">Header CTA</Link></li>
              </ul>
            </div>
          </div>
          <div className="absolute inset-y-0 right-6 flex items-center lg:hidden">

          </div>
        </div>
      </div>

    </nav>


    </header>
  );
}
