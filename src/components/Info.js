export default function () {
  return (
    <header className="App-header flex flex-col">
      <div className="toggle flex self-end my-7">
        <button></button>
        <h4>DARK MODE</h4>
        <h4>TÜRKÇE' YE GEÇ</h4>
      </div>
      <section className="info flex flex-row">
        <div className="info-text flex flex-col">
          <div className="w-7/12 p-2  ">
            <p>
              <h2>Hi! </h2>
            </p>
            <p>
              <h1>
                I’m Baha. I’m a full-stack developer. I can craft solid and
                scalable frontend products. Let’s meet!
              </h1>
            </p>
          </div>
          <div className="p-2">
            <a href="#">LinkenIn</a>
            <a href="#1">GitHub</a>
          </div>
          <div className="w-1/2 p-2">
            <p>
              <h3>
                Currently Freelancing for UX, UI, & Web Design Project . Invite
                me to join your team -> pratamaiosi@gmail.com
              </h3>
            </p>
          </div>
        </div>
        <div className="profile-image">
          <img src="https://picsum.photos/id/1/341/341"></img>
        </div>
      </section>
    </header>
  );
}
