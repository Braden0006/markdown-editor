import React, { FC, useState } from "react";

import MarkdownPreview from "./MarkdownPreview";
import { useMarkdownContext } from "../context/MarkdownContext";

export default function Markdown() {
  const { markdownInput, setMarkdownInput } = useMarkdownContext();
  const { preview } = useMarkdownContext();

  function handleChange(event: any) {
    setMarkdownInput(event.target.value);
  }

  return (
    <>
      {preview ? (
        <MarkdownPreview />
      ) : (
        <textarea
          className="w-90v h-170v py-4 outline-none"
          value={markdownInput}
          onChange={handleChange}
        ></textarea>
      )}
    </>
  );
}
