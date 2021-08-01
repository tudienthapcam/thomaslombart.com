import React from "react";
import Link from "next/link";
import Image from "next/image";

import config from "../config";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-900">
      <header className="sticky top-0 z-10 w-full px-4 py-4 mx-auto bg-gray-900 md:px-0">
        <div className="flex items-center justify-between max-w-3xl mx-auto">
          <Link href="/">
            <a className="flex items-center text-gray-200">
              <div className="flex p-1 bg-gray-700 rounded-full ring-2 ring-yellow-500">
                <Image width={44} height={44} src="/assets/icon.png" alt="" />
              </div>

              <span className="ml-4 text-xl font-bold text-gray-200 sm:text-2xl">
                {config.title}
              </span>
            </a>
          </Link>

          <Link href="/articles">
            <a className="inline-block px-3 py-1 font-bold transition bg-gray-100 rounded-lg shadow-lg hover:bg-gray-300">
              Blog
            </a>
          </Link>
        </div>
      </header>

      <main className="max-w-3xl px-4 mx-auto my-4 md:px-0">{children}</main>

      <footer className="py-6">
        <p className="text-sm font-medium text-center text-gray-300 ">
          © {new Date().getFullYear()} Thomas Lombart
        </p>
      </footer>
    </div>
  );
}

export default Layout;
