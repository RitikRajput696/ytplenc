"use client";
import { useState } from "react";
import Form from "@/components/Form";
import Notice from "@/components/Notice";
import { handlePlaylist, getVidDuration } from "./api/route";
import Result from "@/components/Result";

export default function Home() {
  const [playListId, setPlayListId] = useState("");

  function handleId(id) {
    setPlayListId(id);
  }

  const data = handlePlaylist(playListId);
  const videoDuration = getVidDuration(data);
  console.log(videoDuration);

  return (
    <main className="m-auto max-w-screen-lg">
      <Form id={handleId} />
      <Notice />
      <Result vidData={videoDuration} />
    </main>
  );
}
