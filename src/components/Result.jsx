import handlePlayList from "@/app/api/route";
import { useState } from "react";

function Result({ id }) {
  let [vidData, isLoading] = handlePlayList(id);

  return (
    <div>
      <h1>hii from result</h1>
      <ul>
        {isLoading ? (
          <li>loading ...</li>
        ) : (
          vidData.map((item, i) => <li key={i}>{item}</li>)
        )}
      </ul>
    </div>
  );
}

export default Result;
