import React, { FC } from "react";
import { NotificationInterface } from "../interfaces";

const NotificationCard: FC<NotificationInterface> = ({
  title,
  noteText,
  condition,
}) => {
  let date = Date();
  let dateT = date.split("GMT")[0];
  return (
    <div className="notification p-4 bg-white rounded-md relative border border-gray-500 shadow-md">
      <small className="note-head text-gray-800 flex justify-between">
        {dateT}
      </small>
      {condition && (
        <span className="condition font-bold absolute -top-2 -right-2 bg-red-400 p-2 rounded-full text-white">
          {condition}
        </span>
      )}
      <h3 className="font-bold capitalize text-blue-500 mt-2 text-xl">
        {title}
      </h3>
      <p className="mb-3">{noteText}</p>
    </div>
  );
};

export default NotificationCard;
