import React, { useState } from "react";
import NavigationLink from "./../NavigationLink";

import MenuIcon from "./../MenuIcon";

export function Navigation() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/workflow-mark-on-dark.svg"
                alt="Workflow logo"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavigationLink to="/">Home</NavigationLink>

                <NavigationLink to="/liked">Liked</NavigationLink>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            >
              <MenuIcon isOpen={isMobileNavOpen} />
            </button>
          </div>
        </div>
      </div>

      <div className={`${isMobileNavOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <NavigationLink
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >
            Home
          </NavigationLink>

          <NavigationLink
            to="/liked"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
          >
            Liked
          </NavigationLink>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
