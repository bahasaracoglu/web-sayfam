export default function Footer() {
  return (
    <section>
      <footer className="w-1/2 flex mx-auto  ">
        <div className="flex flex-row gap-5">
          <span className="flex w-2/3 justify-center items-center">
            <h2 id="footer-text" className="text-[#0A0A14]">
              Let’s work together on your next product.
            </h2>
          </span>
          <nav>
            <ul className="flex flex-col">
              <li>
                <a href="#" className="text-[#1769FF]">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-[#0A0A14]">
                  Personal Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-[#0077B5]">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="text-[#AF0C48]">
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
