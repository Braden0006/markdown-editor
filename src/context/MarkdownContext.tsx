import { createContext, useContext } from "react";

export type MarkdownContextType = {
  markdownInput: string;
  setMarkdownInput: (markdownInput: string) => void;
};

export const MarkdownContext = createContext<MarkdownContextType>({
  markdownInput: "",
  setMarkdownInput: (markdownInput: string) => {},
});

export const useMarkdownContext = () => useContext(MarkdownContext);
