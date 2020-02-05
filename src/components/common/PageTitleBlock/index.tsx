import * as React from "react";
import css from "./index.module.scss";

const PageTitleBlock: React.FunctionComponent = () => {
  return (
    <div className={css.titleWrapper}>
      <div className={css.title}>
        Offices <span className={css.info}>| Company Info</span>
      </div>
      <div className={css.subTitle}>
        Updating your location and contact information helps you appeal to
        regional investors and service providers.
      </div>
    </div>
  );
};

export default PageTitleBlock;
