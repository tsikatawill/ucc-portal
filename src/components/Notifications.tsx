const Notifications = () => {
  let date = Date();
  let dateT = date.split("GMT")[0];
  return (
    <section className="notifications p-5">
      <div className="header">Latest information</div>
      <div className="all-notes mt-5 grid sm:grid-cols-2 gap-5">
        <div className="notification p-4 bg-slate-300 rounded-md relative">
          <small className="note-head text-gray-800 flex justify-between">
            {dateT}
          </small>
          <span className="condition font-bold absolute -top-2 -right-2 bg-red-400 p-2 rounded-full text-white">
            New
          </span>
          <h3 className="font-bold capitalize text-blue-500 mt-2 text-xl">
            60th anniversary``
          </h3>
          <p>
            To commerate UCC's 60th anniversary, dolor sit amet consectetur
            adipisicing elit. Quia, esse..
          </p>
        </div>
        <div className="notification p-4 bg-slate-300 rounded-md relative">
          <small className="note-head text-gray-800 flex justify-between">
            {dateT}
          </small>
          <span className="condition font-bold absolute -top-2 -right-2 bg-red-400 p-2 rounded-full text-white">
            New
          </span>
          <h3 className="font-bold capitalize text-blue-500 mt-2 text-xl">
            Official launch!!!
          </h3>
          <p>
            There is goint to be an official launch Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Numquam, expedita? Dolor sit amet
            consectetur adipisicing elit. Quia, esse..
          </p>
        </div>
        <div className="notification p-4 bg-slate-300 rounded-md relative">
          <small className="note-head text-gray-800 flex justify-between">
            {dateT}
          </small>
          <span className="condition font-bold absolute -top-2 -right-2 bg-red-400 p-2 rounded-full text-white">
            New
          </span>
          <h3 className="font-bold capitalize text-blue-500 mt-2 text-xl">
            Registration of courses!!!
          </h3>
          <p>
            The portal has been reopened to allow for registration of courses
            orem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="notification p-4 bg-slate-300 rounded-md relative">
          <small className="note-head text-gray-800 flex justify-between">
            {dateT}
          </small>
          <h3 className="font-bold capitalize text-blue-500 mt-2 text-xl">
            Important information
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            molestias vitae nobis excepturi fuga vel.
          </p>
        </div>
        <div className="notification p-4 bg-slate-300 rounded-md relative">
          <small className="note-head text-gray-800 flex justify-between">
            {dateT}
          </small>
          <h3 className="font-bold capitalize text-blue-500 mt-2 text-xl">
            Important information
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            molestias vitae nobis excepturi fuga vel.
          </p>
        </div>
        <div className="notification p-4 bg-slate-300 rounded-md relative">
          <small className="note-head text-gray-800 flex justify-between">
            {dateT}
          </small>
          <h3 className="font-bold capitalize text-blue-500 mt-2 text-xl">
            Important information
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            molestias vitae nobis excepturi fuga vel.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Notifications;
