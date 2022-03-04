import React, { useContext } from "react";
import TasksContext from "../../../store/tasks-context";
import "./NewTask.css";
import readFile from "../../scripts/read-file";
import resizeImage from "../../scripts/resize-image";
import { uploadFile } from "../../scripts/cloud-storage";

export default function NewTask(props) {
  const ctxTasks = useContext(TasksContext);
  const { key, name, price, imageLink } = props.list;

  const onChangeHandler = () => {
    ctxTasks.toggleStatus(key);
  };

  const onAddImage = async (event) => {
    const file = event.target.files[0];
    const uniqueId = new Date().getTime();
    const fileName = `thumbnail-${uniqueId}.png`;
    const image = await readFile(file);
    const resizedImage = await resizeImage(image, 88, 88);
    const imageURL = await uploadFile(resizedImage, fileName);

    ctxTasks.editImageLink(key, imageURL);
  };

  return (
    <div className="new-task-wrapper">
      <div className="wraper-checkbox">
        <label className="new-task-label">
          <input
            onChange={onChangeHandler}
            type="checkbox"
            checked={props.completedDecorations}
          ></input>
          <span
            className={props.completedDecorations ? "completed-decoration" : ""}
          >{` ${name}, ${price}:-`}</span>
        </label>
        <label className="image-input-wrapper">
          <input
            className="image-input"
            type="file"
            accept="image/png, image/jpeg"
            onChange={onAddImage}
          />
          <img
            className="thumbnail"
            src={imageLink}
            alt="black and white with default value"
            label="black and white with default value"
          />
        </label>
      </div>
      {props.list.length === 0 && <p>No items to display.</p>}
    </div>
  );
}
