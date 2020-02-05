import * as React from "react";
import css from "./index.module.scss";

interface OwnProps {
  title: string;
  onClick: () => void;
}

const AddButton: React.FunctionComponent<OwnProps> = props => {
  return (
    <div>
      <button
        onClick={() => {
          if (props.onClick) {
            props.onClick();
          }
        }}
        className={css.button}
      >
        {props.title}
      </button>
    </div>
  );
};

export default AddButton;
