export interface Blog {
  id: string; // unique ID for lookup
  title: string;
  description: string;
  metaData: {
    date: Date;
    author?: string;
  };
  category: string; // could also be string[]
  slug: string; // for SEO-friendly URLs (e.g. /blog/react-hooks)
  content: string;
  image?: string[];
}

export const blogs: Blog[] = [
  {
    id: "1",
    title: "Intro to TypeScript",
    description: "Learn how to use interfaces and types effectively.",
    metaData: {
      date: new Date("2024-01-01"),
      author: "Alice",
    },
    category: "TypeScript",
    slug: "intro-to-typescript",
    content: "Here’s the full content of the post...",
    image: ["typescript-cover.jpg"],
  },
  {
    id: "2",
    title: "React Hooks Deep Dive",
    description: "Understand useState, useEffect, and custom hooks.",
    metaData: {
      date: new Date("2024-03-15"),
      author: "Bob",
    },
    category: "React",
    slug: "react-hooks-deep-dive",
    content: "React hooks simplify component logic and state management...",
    image: ["react-hooks.png"],
  },
];
