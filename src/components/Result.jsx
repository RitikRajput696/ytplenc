import handlePlayList from "@/app/api/route";
import { parse, toSeconds } from "iso8601-duration";
import humanizeDuration from "humanize-duration";

function Result({ id }) {
  let [vidData, isLoading] = handlePlayList(id);

  function processVidData() {
    let seconds = 0;
    for (let i = 0; i < vidData.length; ++i) {
      seconds += toSeconds(parse(vidData[i]));
    }
    const avgDuration = parseInt(seconds / vidData.length);
    const duration = humanizeDuration(seconds * 1000, {
      units: ["h", "m", "s"],
    });
    const avgDurationHumanise = humanizeDuration(avgDuration * 1000, {
      units: ["h", "m", "s"],
    });
    return (
      <div>
        <p>total duration: {duration}</p>
        <p>video average length: {avgDurationHumanise}</p>
      </div>
    );
  }

  return (
    <div>
      <h1>hii from result</h1>
      <div>{isLoading ? <p>loading ...</p> : processVidData()}</div>
    </div>
  );
}

export default Result;
