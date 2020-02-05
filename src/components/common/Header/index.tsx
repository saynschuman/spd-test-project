import * as React from "react";
import css from "./index.module.scss";

const Header: React.FunctionComponent = () => {
  return (
    <div className={css.headerWrapper}>
      <div className={css.header}>
        <div className={css.headerInner}>
          <div className={css.left}>
            <div className={css.logo} />
            <a href="#">Profile Editor</a>
          </div>
          <div className={css.right}>
            <div className={css.topNav}>
              <ul>
                <li>
                  <a href="#">Heroku</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Save and Exit</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
