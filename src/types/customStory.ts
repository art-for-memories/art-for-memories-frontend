// Simple model for a custom story submission
export interface CustomStory {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  storyType: string;
  title: string;
  author: string;
  date: string; // ISO string or Date
  file?: string;
  image?: string;
  kinyarwandaContent: string;
  englishContent: string;
  frenchContent: string;
}
