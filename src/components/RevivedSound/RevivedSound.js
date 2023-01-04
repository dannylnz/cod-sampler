import React from "react";
import RevivedSound from "../RevivedSound/revivedsound.mp3";

export default function ReviveSound() {
  {
    const audio = new Audio(RevivedSound);
    audio.loop = true;

    return (
      <div>
        <button
          onClick={() => {
            audio.loop = false;
            audio.play();
          }}
          type="button"
          className="bg-green-700 px-12 py-12 text-center w-full text-lg font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Revived Sound
        </button>
      </div>
    );
  }
}