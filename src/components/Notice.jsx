import React from "react";

function Notice() {
  return (
    <div className="bg-green-2100 flex flex-col items-center justify-center rounded border-2 border-green-400 bg-green-100 p-12 text-green-900">
      <p>
        This application helps you to calculate total duration of a playlist.
      </p>
      <p>just paste the playList url and hit calculate.</p>
    </div>
  );
}

export default Notice;
