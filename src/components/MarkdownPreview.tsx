import React, { FC } from "react";

import ReactMarkdown from "react-markdown";

import { useMarkdownContext } from "../context/MarkdownContext";

interface Props {}

const MarkdownPreview: FC = () => {
  const { markdownInput } = useMarkdownContext();

  return (
    <div className="preview">
      <ReactMarkdown
        children={markdownInput}
      />
    </div>
  );
};

export default MarkdownPreview;
