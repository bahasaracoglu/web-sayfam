import laptop from "../projects/laptop.png";
import arrowRight from "../projects/arrow-right.svg";
export function Projects() {
  return (
    <section id="Projects ">
      <div className="flex flex-row justify-center gap-10">
        <div id="Project-card " className="w-4/12 p-10">
          <h3>Title</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia.
          </p>

          <ul className="flex flex-row gap-5 my-5">
            <li>react</li>
            <li>vercel</li>
            <li>axios</li>
            <li>router</li>
          </ul>
          <div id="Project-Links" className="flex justify-between">
            <a href="#">View on GitHub</a>
            <a href="#" className="flex">
              Go to app
              <img src={arrowRight} alt="arrowRight" />
            </a>
          </div>
          <div id="Project-Image-Cont" className="flex">
            <img src={laptop} className="mt-5" />
          </div>
        </div>
        <div id="Project-card " className="w-4/12 p-10">
          <h3>Title</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia.
          </p>

          <ul className="flex flex-row gap-5 my-5">
            <li>react</li>
            <li>vercel</li>
            <li>axios</li>
            <li>router</li>
          </ul>
          <div id="Project-Links" className="flex justify-between">
            <a href="#">View on GitHub</a>
            <a href="#" className="flex">
              Go to app
              <img src={arrowRight} alt="arrowRight" />
            </a>
          </div>
          <div id="Project-Image-Cont" className="flex">
            <img src={laptop} className="mt-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
