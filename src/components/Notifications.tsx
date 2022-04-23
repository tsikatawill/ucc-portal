const Notifications = () => {
  let date = Date();
  let dateT = date.split("GMT")[0];
  return (
    <section className="notifications p-5">
      <div className="header">Take note of the following</div>
      <div className="all-notes mt-5 grid sm:grid-cols-2 gap-5">
        <div className="notification p-4 bg-slate-300 rounded-md relative">
          <small className="note-head text-gray-600 flex justify-between">
            {dateT}
          </small>
          <span className="condition font-bold absolute -top-2 -right-2 bg-red-400 p-2 rounded-full text-white">
            New
          </span>
          <p>
            Loem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            sapiente vel repudiandae harum aut officia quo optio reiciendis
            laudantium illo ducimus tempore, vero saepe ut magnam quas magni est
            esse.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Notifications;
