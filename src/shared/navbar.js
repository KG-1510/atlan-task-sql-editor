/* eslint-disable jsx-a11y/img-redundant-alt */
import { BsGithub } from "react-icons/bs";

export default function Navbar() {
  return (
    <>
      <div className="w-full flex-grow text-gray-800">
        <header className="flex items-center h-20 px-6 sm:px-10 bg-white shadow-lg w-full">
          <div className="flex flex-row items-center w-full max-w-md">
            <img
              className="rounded-md"
              width={60}
              src="/atlan-logo.png"
              alt="atlan-logo"
            />
            <h1 className="font-bold text-sm md:text-2xl px-2">Online SQL Editor</h1>
          </div>
          <div className="flex flex-shrink-0 items-center ml-auto">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/KG-1510/atlan-task-sql-editor"
            >
              <p className="relative inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg">
                <BsGithub className="mx-2" size={18} />
                View on GitHub
              </p>
            </a>
          </div>
        </header>
      </div>
    </>
  );
}
