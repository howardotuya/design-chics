import React from "react";

type Props = {
  style?: string;
  innerStyle?: string;
  innerSize?: string;
  children: React.JSX.Element;
};

function Container({ style, innerStyle, innerSize, children }: Props) {
  return (
    <div className={`${style} flex justify-center items-center px-[10px]`}>
      <div
        className={`${innerStyle} overflow-hidden rounded-[24px] md:rounded-[40px] flex justify-center items-center`}
      >
        <div className={`${innerSize} w-full`}>{children}</div>
      </div>
    </div>
  );
}

export default Container;
