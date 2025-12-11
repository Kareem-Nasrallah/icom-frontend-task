import React from "react";
import ColorfulColumn from "./ColorfulColumn";

const IconImage = () => {
  return (
    <div className="absolute -top-12 sm:top-0 right-0 h-[234px] w-[169.61px] overflow-hidden">
      <div className="h-[245.05px] w-[133.76px] -rotate-90 absolute -top-14.5 right-14">
        <ColorfulColumn color="#ffbbbf" right="-8" bottom="-47" />
        <ColorfulColumn color="#b70d0d" right="24" bottom="5" />
        <ColorfulColumn color="#e1fafe" right="56" bottom="-47" zIndex="10" />
      </div>
    </div>
  );
};

export default IconImage;
