import Image from "next/image";
import React from "react";

const ColorfulColumn = ({
  color,
  right,
  bottom,
  zIndex,
}: {
  color: string;
  bottom: string;
  right: string;
  zIndex?: string;
}) => {
  return (
    <div
      className="absolute"
      style={{
        right: `${right}px`,
        bottom: `${bottom}px`,
      }}
    >
      <div
        className={`rotate-y-52 skew-y-22 overflow-hidden relative`}
        style={{
          backgroundColor: color,
          zIndex: zIndex ?? "auto",
        }}
      >
        <Image
          className={`-skew-y-28 scale-105 -translate-y-1 ${
            color === "#b70d0d" && "-translate-y-4"
          }`}
          alt="column"
          height="180"
          width="52"
          src="/column.png"
        />
      </div>
      <div className="absolute -bottom-8.5 h-[180px] w-8 bg-black skew-y-33 right-10.5 border-r border-black rotate-x-180 z-10" />
    </div>
  );
};

export default ColorfulColumn;
