export interface Threads {
    id?: number;
    avatar: string;
    username: string;
    verified: boolean;
    name: string;
    images?: string; // New field for storing Threads images (optional).
    thread: Thread[];
  }
  
  export interface Thread {
    id: number;
    userId: number;
    text: string;
    timestamp: string;
    images?: string; // New field for storing thread images (optional).
    replies: Reply[];
  }
  
  export interface Reply {
    id: number;
    user: string;
    text: string;
    timestamp: string;
  }
  