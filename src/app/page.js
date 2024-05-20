"use client";
import { useState } from "react";
import Form from "@/components/Form";
import Notice from "@/components/Notice";
import Result from "@/components/Result";

export default function Home() {
  const [playListId, setPlayListId] = useState(null);

  function handleId(id) {
    setPlayListId(id);
  }

  return (
    <main className="m-auto max-w-screen-lg">
      <Form id={handleId} />
      <Notice />
      <Result id={playListId} />
    </main>
  );
}
