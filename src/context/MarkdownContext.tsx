import { createContext, useContext } from "react";

export type MarkdownContextType = {
  markdownInput: string;
  setMarkdownInput: (markdownInput: string) => void;
  preview: boolean;
  setPreview: (preview: boolean) => void;
};

export const MarkdownContext = createContext<MarkdownContextType>({
  markdownInput: "",
  setMarkdownInput: (markdownInput: string) => {},
  preview: false,
  setPreview: (preview: boolean) => {}
});

export const useMarkdownContext = () => useContext(MarkdownContext);
