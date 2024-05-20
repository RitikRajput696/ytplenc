"use client";

import { useEffect, useState } from "react";

export default function handlePlayList(playListId) {
  const [vidData, setVidData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  let maxResult = 50;
  let videoIdArr = [];
  let videoDurationArr = [];
  let apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

  let url1 =
    `https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=${maxResult}&playlistId=` +
    playListId +
    `&key=${apiKey}`;

  useEffect(() => {
    async function fetchAllVideoIds() {
      if (playListId === null) {
        return;
      }
      // fetch all videoIDs of playlist videos
      setIsLoading(true);
      let response1 = await fetch(url1);
      let res1 = await response1.json();
      for (let i = 0; i < res1.items.length; ++i) {
        videoIdArr.push(res1.items[i].contentDetails.videoId);
      }

      // all playlist videos duration

      for (let i = 0; i < videoIdArr.length; ++i) {
        let url2 = `https://www.googleapis.com/youtube/v3/videos?&part=contentDetails&id=${videoIdArr[i]}&key=${apiKey}&fields=items/contentDetails/duration`;
        let response2 = await fetch(url2);
        let res2 = await response2.json();
        videoDurationArr.push(res2.items[0].contentDetails.duration);
      }
      setVidData(videoDurationArr);
      setIsLoading(false);
    }
    fetchAllVideoIds();
  }, [playListId]);

  return [vidData, isLoading];
}
