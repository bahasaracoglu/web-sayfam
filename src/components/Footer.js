export default function Footer() {
  return (
    <section>
      <footer className="w-7/12 flex mx-auto max-w-[1440px] ">
        <div className="flex flex-row gap-14 ml-7 mt-[12.6%] mb-[16.0%] justify-center items-center">
          <span className="flex w-6/12 ">
            <h2
              id="footer-text"
              className="text-[#0A0A14] dark:text-[#FFFFFF] relative"
            >
              Let’s
              <span className="absolute w-[275px] h-[18px] bg-[#82BBFF] top-[2.6rem] left-[12.45rem] rounded-[4px] dark:bg-[#3968A0]"></span>{" "}
              <span className="relative z-10">work together</span> on your next
              product.
            </h2>
          </span>
          <nav>
            <ul className="flex flex-col">
              <li>
                <a
                  id="footer-links"
                  href="#"
                  className="text-[#1769FF] dark:text-[#82BBFF]"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  id="footer-links"
                  href="#"
                  className="text-[#0A0A14] dark:text-[#FFFFFF]"
                >
                  Personal Blog
                </a>
              </li>
              <li>
                <a
                  id="footer-links"
                  href="#"
                  className="text-[#0077B5] dark:text-[#419CCB]"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  id="footer-links"
                  href="#"
                  className="text-[#AF0C48] dark:text-[#EA2678]"
                >
                  Email
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </section>
  );
}
