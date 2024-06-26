export interface Course {
    id: number;
    title: string;
    author: string;
    lessons: number;
    time: string;
    likes: number;
    image: string;
  }
  
  export interface UserProgress {
    courseId: number;
    completedLessons: number;
    totalLessons: number;
  }
  