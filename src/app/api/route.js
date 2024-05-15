"use client";
import { useState, useEffect } from "react";

export default function handlePlaylist() {
  const [data, setData] = useState([]);
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const playListId = `PLah6faXAgguOeMUIxS22ZU4w5nDvCl5gs`;
  const maxResult = 50;
  const url1 = `https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails&maxResults=${maxResult}&playlistId=${playListId}&key=${apiKey}`;

  useEffect(() => {
    getAllVideoIds();
  }, []);

  async function getAllVideoIds() {
    let response = await fetch(url1);
    response = await response.json();
    console.log(response.items);
    setData(response.items);
  }

  return data;
}
