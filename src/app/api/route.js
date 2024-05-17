"use client";
import { useState, useEffect } from "react";

function handlePlaylist(playListId) {
  const [data, setData] = useState([]);
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const maxResult = 50;
  let url1 =
    `https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=${maxResult}&playlistId=` +
    playListId +
    `&key=${apiKey}`;
  useEffect(() => {
    getAllVideoIds();
  }, [playListId]);

  async function getAllVideoIds() {
    if (playListId) {
      let response = await fetch(url1);
      response = await response.json();
      setData(response.items);
    } else {
      console.log("playListId is not available");
    }
  }
  let dataArr = [];
  for (let i = 0; i < data.length; i++) {
    dataArr.push(data[i].contentDetails.videoId);
  }
  return dataArr;
}

function getVidDuration(videoIdArr) {
  let videoDurationArr = [];
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

  useEffect(() => {
    fetchData();
  }, [videoIdArr]);

  async function fetchData() {
    for (let i = 0; i < videoIdArr.length; ++i) {
      let url2 = `https://www.googleapis.com/youtube/v3/videos?&part=contentDetails&id=${videoIdArr[i]}&key=${apiKey}&fields=items/contentDetails/duration`;
      let res = await fetch(url2);
      res = await res.json();
      videoDurationArr.push(res.items[0].contentDetails.duration);
    }
  }

  return videoDurationArr;
}

export { handlePlaylist, getVidDuration };
