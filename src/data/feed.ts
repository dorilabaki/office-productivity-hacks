/**
 * FEED CONFIGURATION - Office Productivity Hacks
 *
 * Add your top LinkedIn posts here. Each post needs:
 * - linkedInUrl: Direct link to the LinkedIn post
 * - content: The post text (copy from LinkedIn)
 * - likes, comments, reposts: Current engagement numbers
 * - date: When it was posted (YYYY-MM-DD)
 *
 * Tips:
 * - Feature your 5-10 best performing posts
 * - Update engagement numbers periodically
 * - Put newest/best posts first
 */

export interface FeedPost {
  id: string
  linkedInUrl: string
  content: string
  likes: number
  comments: number
  reposts?: number
  date: string
}

export const feedConfig = {
  pageName: "Office Productivity Hacks",
  linkedInUrl: "https://www.linkedin.com/company/office-productivity-hacks",
  followers: "115,000+",
  description: "Practical tips and shortcuts from our LinkedIn community.",
}

// Add your top posts below - update URLs and engagement numbers as needed
export const feedPosts: FeedPost[] = [
  // EXAMPLE POST - Replace with your actual posts
  {
    id: "1",
    linkedInUrl: "https://www.linkedin.com/company/office-productivity-hacks/posts/", // Replace with actual post URL
    content: `Ctrl + ; inserts today's date in Excel.

One shortcut. Saves you typing the date 100+ times per year.

That's the kind of small win that adds up.`,
    likes: 3200,
    comments: 145,
    reposts: 210,
    date: "2024-01-15",
  },
  {
    id: "2",
    linkedInUrl: "https://www.linkedin.com/company/office-productivity-hacks/posts/",
    content: `Excel shortcuts that save hours every week:

Ctrl + D → Fill down
Ctrl + R → Fill right
Ctrl + Shift + L → Toggle filters
Ctrl + ; → Insert date
Ctrl + : → Insert time

How many do you use?`,
    likes: 5400,
    comments: 320,
    reposts: 445,
    date: "2024-01-12",
  },
  {
    id: "3",
    linkedInUrl: "https://www.linkedin.com/company/office-productivity-hacks/posts/",
    content: `VLOOKUP is great.

But INDEX MATCH is better.

Here's why:
• Works left to right AND right to left
• Doesn't break when you add columns
• Faster on large datasets

Make the switch. Your future self will thank you.`,
    likes: 4100,
    comments: 278,
    reposts: 312,
    date: "2024-01-08",
  },
  // Add more posts here...
]
