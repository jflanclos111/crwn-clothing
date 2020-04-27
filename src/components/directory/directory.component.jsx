import React, { useState } from "react";
import "./directory.styles.scss";
import { MenuItem } from "../menu-item/menu-item.component";
import DIRECTORY_DATA from "./directory.data";

export function Directory(props) {
  const [state, setState] = useState(DIRECTORY_DATA);

  return (
    <div className="directory-menu">
      {state.sections.map(({ id, ...otherSectionProps }) => {
        return <MenuItem key={id} {...otherSectionProps} />;
      })}
    </div>
  );
}
