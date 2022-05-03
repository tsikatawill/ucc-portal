import NotificationCard from "./NotificationCard";
import { NotificationList } from "./NotificationList";

const Notifications = () => {
  return (
    <section className="notifications p-5">
      <div className="header">Latest information</div>
      <div className="all-notes mt-5 flex flex-col gap-5">
        {NotificationList.length > 0 &&
          NotificationList.map((item) => (
            <NotificationCard
              key={item.id}
              title={item.title}
              noteText={item.noteText}
              id={item.id}
              condition={item.condition}
            />
          ))}
      </div>
    </section>
  );
};

export default Notifications;
