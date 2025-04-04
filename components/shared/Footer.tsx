import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    // <footer className="border-t">
    //   <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
    //     <Link href="/">
    //       <Image
    //         src="/assets/images/logo.svg"
    //         alt="logo"
    //         width={128}
    //         height={38}
    //       />
    //     </Link>

    //     <p>
    //       2025 Evently. <br />
    //       All Rights reserved.
    //       <br />
    //       Made With Love.
    //     </p>
    //   </div>
    // </footer>

    <footer className="bg-[#201e1e] text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/">
              <Image
                src="/assets/images/logo.svg"
                alt="logo"
                width={128}
                height={38}
              />
            </Link>

            <p className="text-gray-300">
              Your one-stop platform for discovering and creating amazing
              events.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/events/create"
                  className="text-gray-300 hover:text-white"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/category/music"
                  className="text-gray-300 hover:text-white"
                >
                  Music
                </Link>
              </li>
              <li>
                <Link
                  href="/category/business"
                  className="text-gray-300 hover:text-white"
                >
                  Business
                </Link>
              </li>
              <li>
                <Link
                  href="/category/food-drink"
                  className="text-gray-300 hover:text-white"
                >
                  Food & Drink
                </Link>
              </li>
              <li>
                <Link
                  href="/category/technology"
                  className="text-gray-300 hover:text-white"
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>1234567890</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>info@eventify.com</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
