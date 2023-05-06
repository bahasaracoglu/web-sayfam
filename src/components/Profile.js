export default function Profile() {
  return (
    <section id="Profile">
      <h1 className="text-center">Profile</h1>
      <div className="flex flex-row justify-center gap-10 bg-[#F4F4F4] rounded-[12px]">
        <div id="Basic-information" className="flex flex-col w-4/12 p-10">
          <h4 className="text-[#EA2678]">Basic Information</h4>
          <ul>
            <li>
              <h5>
                Doğum Tarihi <span>15.11.1993</span>
              </h5>
            </li>
            <li>
              <h5>
                İkamet Şehri <span>15.11.1993</span>
              </h5>
            </li>
            <li>
              <h5>
                Eğitim Durumu
                <span>
                  Eskişehir Osmangazi Üniversitesi Endüstri Mühendisliği, 2016
                </span>
              </h5>
            </li>
            <li>
              <h5>
                Tercih Ettiği Rol <span>Frontend, UI</span>
              </h5>
            </li>
          </ul>
        </div>
        <div id="about-me" className="flex flex-col w-4/12 p-10">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            aut, odit laborum aliquam voluptatum nisi mollitia.
          </p>
          <p>
            Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
            deserunt quam temporibus cumque magnam!{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
