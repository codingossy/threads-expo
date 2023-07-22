export interface Reply {
    id: number;
    userId: number;
    text: string;
    timestamp: string;
  }
  
  export interface Threads {
    id?: number;
    userId: number; // Add this property to match the data structure
    text: string;
    timestamp: string;
    replies: Reply[];
    images?: string; // New field for storing Threads images (optional).
  }
  
  export interface User {
    id: number;
    username: string;
    name: string;
    bio: string;
    followers: number;
    following: number;
    verified: boolean; // New field for storing user verification status.
    threads: Threads[]; // Change 'Threadss' to 'threads'
  }
  
  export interface ThreadsData {
    users: User[];
    threads: Threads[];
  }
  