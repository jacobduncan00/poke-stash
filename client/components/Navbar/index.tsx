import Pika from "../../public/pika.svg";
import Image from "next/image";
import Link from "next/link";

type Props = {
  loggedIn: boolean;
};

const Navbar = ({ loggedIn }: Props) => {
  return (
    <div>
      {loggedIn ? (
        <nav className="font-custom bg-primary flex items-center justify-between flex-wrap bg-teal-500 p-6">
          <div className="cursor-pointer flex items-center flex-shrink-0 text-white mr-6">
            <Image src={Pika} alt="pikachu" width="54" height="54" />
            <span className="font-custom font-semibold text-xl tracking-tight">
              Poke Stash
            </span>
          </div>
          <div className="block lg:hidden">
            <button className="text-secondary flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <Link href="#responsive-header">
                <div className="text-secondary block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 cursor-pointer">
                  English Sets
                </div>
              </Link>
              <Link href="#responsive-header">
                <div className="text-secondary block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 cursor-pointer">
                  Japanese Sets
                </div>
              </Link>
              <Link href="#responsive-header">
                <div className="text-secondary block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 cursor-pointer">
                  News
                </div>
              </Link>
            </div>
            <div>
              <Link href="/dashboard">
                <div className="text-secondary block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                  Dashboard
                </div>
              </Link>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="font-custom bg-primary flex items-center justify-between flex-wrap bg-teal-500 p-6">
          <div className="cursor-pointer flex items-center flex-shrink-0 text-white mr-6">
            <Image src={Pika} alt="pikachu" width="54" height="54" />
            <span className="font-custom font-semibold text-xl tracking-tight">
              Poke Stash
            </span>
          </div>
          <div className="block lg:hidden">
            <button className="text-secondary flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
              <Link href="sets/english">
                <div className="text-secondary block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 cursor-pointer">
                  English Sets
                </div>
              </Link>
              <Link href="sets/english">
                <div className="text-secondary block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 cursor-pointer">
                  Japanese Sets
                </div>
              </Link>
              <Link href="sets/english">
                <div className="text-secondary block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 cursor-pointer">
                  News
                </div>
              </Link>
            </div>
            <Link href="/signup">
              <div className="cursor-pointer float-right inline-block text-sm px-4 py-2 leading-none border rounded text-secondary border-secondary hover:border-transparent hover:text-primary hover:bg-secondary mt-4 lg:mt-0">
                Sign Up
              </div>
            </Link>
            <Link href="/signin">
              <div
                className="ml-2 float-right inline-block text-sm px-4 py-2
                leading-none border rounded text-secondary border-secondary
                hover:border-transparent hover:text-primary hover:bg-secondary mt-4
                lg:mt-0 cursor-pointer"
              >
                Sign In
              </div>
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
