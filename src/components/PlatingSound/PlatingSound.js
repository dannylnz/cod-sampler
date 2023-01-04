import React from "react";
import PlatingSound from "../PlatingSound/platingsound.mp3";

export default function PlateSound() {
  {
    const audio = new Audio(PlatingSound);
    audio.loop = true;

    return (
      <div>
        <button
          onClick={() => {
            audio.loop = false;
            audio.play();
          }}
          type="button"
          className="bg-purple-500 px-12 py-12 text-center w-full text-lg font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Plating Sound
        </button>
      </div>
    );
  }
}