import React from "react";

function Notice() {
  return (
    <div className="bg-green-2100 flex flex-col items-center justify-center rounded border-2 border-gray-950 bg-gray-800 p-12 text-white">
      <p>
        This application helps you to calculate total duration of a playlist.
      </p>
      <p>just paste the playList url and hit calculate.</p>
    </div>
  );
}

export default Notice;
