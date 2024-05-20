"use client";
import { useState } from "react";

function Form({ id }) {
  const [formData, setFormData] = useState("");

  function handleChange(e) {
    setFormData(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (formData == "") {
      alert("paste playlist link");
      return;
    }
    id(getPlaylistId(formData));
  }

  function getPlaylistId(url) {
    if (url != "") {
      const regex = /[?&]list=([a-zA-Z0-9_-]+)/;
      const match = url.match(regex);
      return match ? match[1] : null;
    }
  }

  return (
    <div className="flex items-center justify-center pb-12 pt-12 ">
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex w-full max-w-4xl items-center justify-between gap-1"
      >
        <label htmlFor="playlist-link" className="text-xl font-semibold">
          playlist_link
        </label>
        <input
          type="text"
          className="w-full rounded-md border-2 border-black p-2 text-xl"
          name="playlist-link"
          value={formData}
          onChange={handleChange}
        />
        <button
          className="rounded-md border-2 border-orange-700 bg-orange-600 
        p-2 text-xl text-white"
          type="submit"
        >
          Calculate
        </button>
      </form>
    </div>
  );
}

export default Form;
