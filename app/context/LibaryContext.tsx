"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { LibraryContextType, Article } from "../type/news";

const LibraryContext = createContext<LibraryContextType | undefined>(
  undefined
);

export const LibraryProvider = ({ children }: { children: ReactNode }) => {
  const [library, setLibrary] = useState<Article[]>(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("library");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  const addToLibrary = (article: Article) => {
    setLibrary((prev) => {
      if (prev.find((item) => item.url === article.url)) return prev;

      const updated = [...prev, article];
      localStorage.setItem("library", JSON.stringify(updated));
      return updated;
    });
  };

  const removeFromLibrary = (url: string) => {
    setLibrary((prev) => {
      const updated = prev.filter((item) => item.url !== url);
      localStorage.setItem("library", JSON.stringify(updated));
      return updated;
    });
  };

  const isSaved = (url: string) => {
    return library.some((item) => item.url === url);
  };

  return (
    <LibraryContext.Provider
      value={{ library, addToLibrary, removeFromLibrary, isSaved }}
    >
      {children}
    </LibraryContext.Provider>
  );
};

export const useLibrary = () => {
  const context = useContext(LibraryContext);
  if (!context) {
    throw new Error("useLibrary must be used inside LibraryProvider");
  }
  return context;
};
