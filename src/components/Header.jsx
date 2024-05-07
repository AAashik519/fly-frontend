import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/logo.png";

const Header = () => {
  return (
    <div className="bg-[#151F29]  ">
      <header className="max-w-[1200px] mx-auto h-20 flex justify-between items-center">
        <Link href="/">
          <Image src={Logo} alt="Logo" width={120} height={40} />
        </Link>

        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/signup" className="text-white hover:text-gray-400">
                <button class="bg-[#FCAF17] text-base text-[#4C4B4B] py-2 px-6 rounded-md font-semibold ">Sign in</button>
              </Link>
            </li>
            {/* Add more navigation links here */}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
