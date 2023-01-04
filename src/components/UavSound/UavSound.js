import React from "react";
import UAVSample from "../UavSound/uavsample.mp3";

export default function UavSound() {
  {
    const audio = new Audio(UAVSample);
    audio.loop = true;

    return (
      <div>
        <button
          onClick={() => {
            audio.loop = false;
            audio.play();
          }}
          type="button"
          className=" bg-yellow-700 px-12 py-12 text-center w-full text-lg font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          UAV Overhead
        </button>
      </div>
    );
  }
}
