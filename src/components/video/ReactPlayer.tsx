"use client";
import React from "react";
import ReactPlayer from "react-player";

export default function VideoPlayer({ url }: { url: string }) {
  console.log(url);
  return (
    <ReactPlayer
      width={"100%"}
      height={"100%"}
      className="w-full h-full rounded-[24px] overflow-hidden"
      url={url}
      controls={true}
      light={false}
      pip={true}
    />
  );
}
