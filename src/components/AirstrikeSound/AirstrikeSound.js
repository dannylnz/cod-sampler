import React from "react";
import AirstrikeSound from "../AirstrikeSound/airstrikesound.mp3";

export default function PrecisionAirstrikeSound() {
  {
    const audio = new Audio(AirstrikeSound);
    audio.loop = true;

    return (
      <div>
        <button
          onClick={() => {
            audio.loop = false;
            audio.play();
          }}
          type="button"
          className="bg-yellow-500 px-12 py-12 text-center w-full text-lg font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Airstrike Sound
        </button>
      </div>
    );
  }
}