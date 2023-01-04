import React from "react";
import RevivingSound from "../RevivingSound/revivingsound.mp3";

export default function RevivinSound() {
  {
    const audio = new Audio(RevivingSound);
    audio.loop = true;

    return (
      <div>
        <button
          onClick={() => {
            audio.loop = false;
            audio.play();
          }}
          type="button"
          className="bg-blue-700 px-12 py-12 text-center w-full text-lg font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Reviving Sound
        </button>
      </div>
    );
  }
}