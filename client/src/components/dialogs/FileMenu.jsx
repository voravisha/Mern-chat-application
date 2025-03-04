import { Menu } from "@mui/material";
import React from "react";

const FileMenu = ({ anchorE1 }) => {
  return (
    <Menu anchorE1={anchorE1} open= {false} >
      <div
        style={{
          width: "10rem",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero magni
        temporibus, sequi ad labore aliquam! Consequatur quaerat aliquid sunt
        nisi rerum? Itaque, soluta at? Vel quia id fuga delectus non.
      </div>
    </Menu>
  );
};

export default FileMenu;
