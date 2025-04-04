import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const upcomingGames = defineCollection({
  // Load Markdown and MDX files in the `src/content/upcoming-games/` directory.
  loader: glob({
    base: "./src/content/upcoming-games",
    pattern: "**/*.{md,mdx}",
  }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const devLogs = defineCollection({
  // Load Markdown and MDX files in the `src/content/dev-logs/` directory.
  loader: glob({
    base: "./src/content/dev-logs",
    pattern: "**/*.{md,mdx}",
  }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const games = defineCollection({
  // Load Markdown and MDX files in the `src/content/games/` directory.
  loader: glob({
    base: "./src/content/games",
    pattern: "**/*.{md,mdx}",
  }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const tuneIn = defineCollection({
  // Load Markdown and MDX files in the `src/content/tune-in/` directory.
  loader: glob({
    base: "./src/content/tune-in",
    pattern: "**/*.{md,mdx}",
  }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    videoUrl: z.string().optional(), // YouTube video URL
    videoId: z.string().optional(),  // YouTube video ID
  }),
});

export const collections = { upcomingGames, devLogs, games, tuneIn };
