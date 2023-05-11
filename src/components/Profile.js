export default function Profile() {
  return (
    <section id="Profile" className=" py-[5rem] bg-[#F4F4F4] dark:bg-[#2A262B]">
      <div className="w-7/12 mx-auto max-w-[1440px] ">
        <h1
          className="text-center text-[#000000] dark:text-[#FFFFFF]"
          id="section-title-small"
        >
          Profile
        </h1>
        <div className="flex flex-row justify-between rounded-[12px] text-[#000000] dark:text-[#FFFFFF] ">
          <div
            id="Basic-information"
            className="flex w-[46.5%] max-w-[500px] flex-col  p-10 gap-5 mt-10 bg-[#FFFFFF] dark:bg-[#525252] shadow-gray"
          >
            <h4 id="basic-info" className="text-[#EA2678] ">
              Basic Information
            </h4>
            <ul className="flex flex-col gap-5  ">
              <li className="flex flex-row">
                <h5 id="info-heads">Doğum Tarihi</h5>
                <span id="info-value">15.11.1993</span>
              </li>
              <li className="flex flex-row">
                <h5 id="info-heads">İkamet Şehri</h5>
                <span id="info-value">İstanbul</span>
              </li>
              <li className="flex flex-row">
                <h5 id="info-heads">Eğitim Durumu</h5>
                <span id="info-value">
                  Eskişehir Osmangazi Üniversitesi Endüstri Mühendisliği, 2016
                </span>
              </li>
              <li className="flex flex-row">
                <h5 id="info-heads">Tercih Ettiği Rol</h5>
                <span id="info-value">Frontend, UI</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center w-6/12 p-10 mt-10 gap-5">
            <h4 id="about-me-title">About me</h4>
            <p id="about-me">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              aut, odit laborum aliquam voluptatum nisi mollitia.
            </p>
            <p id="about-me">
              Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
              deserunt quam temporibus cumque magnam!{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
