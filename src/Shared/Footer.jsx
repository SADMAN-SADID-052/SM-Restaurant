const Footer = () => {
  return (
    <footer className=" text-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {/* CONTACT SECTION */}
        <div className="bg-[#111827] pl-72 pt-10 pb-10 text-center">
          <h2 className="text-lg font-semibold mb-4">CONTACT US</h2>
          <p>ABS Street, Bangladesh</p>
          <p>+88 123456789</p>
          <p className="mt-2">Mon - Fri: 08:00 - 22:00</p>
          <p>Sat - Sun: 10:00 - 23:00</p>
        </div>

        {/* SOCIAL SECTION */}
        <div className="text-center  bg-[#1F2937] pr-72 pt-10 pb-10">
          <h2 className="text-lg font-semibold mb-4">Follow US</h2>
          <p className="mb-4">Join us on social media</p>
          <div className="flex justify-center  space-x-6 text-white">
            <a href="#" aria-label="Facebook">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="hover:text-blue-500 transition"
                viewBox="0 0 24 24"
              >
                <path d="M9 8H6v4h3v12h5V12h3.642l.358-4H14V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="hover:text-pink-500 transition"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.056 1.97.246 2.43.415a4.92 4.92 0 011.675 1.08 4.92 4.92 0 011.08 1.675c.17.46.36 1.26.415 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.17-.246 1.97-.415 2.43a4.92 4.92 0 01-1.08 1.675 4.92 4.92 0 01-1.675 1.08c-.46.17-1.26.36-2.43.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.056-1.97-.246-2.43-.415a4.92 4.92 0 01-1.675-1.08 4.92 4.92 0 01-1.08-1.675c-.17-.46-.36-1.26-.415-2.43C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.17.246-1.97.415-2.43a4.92 4.92 0 011.08-1.675 4.92 4.92 0 011.675-1.08c.46-.17 1.26-.36 2.43-.415 1.266-.058 1.646-.07 4.85-.07zm0 1.838c-3.164 0-3.54.012-4.788.07-1.032.05-1.59.218-1.957.363a3.092 3.092 0 00-1.12.73 3.092 3.092 0 00-.73 1.12c-.145.367-.313.925-.363 1.957-.058 1.248-.07 1.624-.07 4.788s.012 3.54.07 4.788c.05 1.032.218 1.59.363 1.957.18.438.43.818.73 1.12.302.302.682.552 1.12.73.367.145.925.313 1.957.363 1.248.058 1.624.07 4.788.07s3.54-.012 4.788-.07c1.032-.05 1.59-.218 1.957-.363.438-.18.818-.43 1.12-.73.302-.302.552-.682.73-1.12.145-.367.313-.925.363-1.957.058-1.248.07-1.624.07-4.788s-.012-3.54-.07-4.788c-.05-1.032-.218-1.59-.363-1.957a3.092 3.092 0 00-.73-1.12 3.092 3.092 0 00-1.12-.73c-.367-.145-.925-.313-1.957-.363-1.248-.058-1.624-.07-4.788-.07zm0 4.838a5.997 5.997 0 100 12 5.997 5.997 0 000-12zm0 1.8a4.2 4.2 0 110 8.4 4.2 4.2 0 010-8.4zm6.406-3.372a1.44 1.44 0 110 2.88 1.44 1.44 0 010-2.88z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="hover:text-blue-400 transition"
                viewBox="0 0 24 24"
              >
                <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.918 4.918 0 00-8.384 4.482A13.965 13.965 0 011.671 3.149a4.917 4.917 0 001.524 6.574 4.897 4.897 0 01-2.229-.616v.06a4.922 4.922 0 003.946 4.827 4.903 4.903 0 01-2.224.084 4.924 4.924 0 004.6 3.419 9.868 9.868 0 01-6.102 2.104c-.396 0-.787-.023-1.175-.068a13.945 13.945 0 007.548 2.212c9.057 0 14.007-7.514 14.007-14.026 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM COPYRIGHT */}
      <div className="text-center bg-black text-[#FFFFFF] text-sm py-4">
        <p>Copyright © SM Food. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
