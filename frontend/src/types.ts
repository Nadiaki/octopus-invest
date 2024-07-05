export interface Course {
    id: number;
    courseId: number;
    title: string;
    author: string;
    lessons: number;
    time: string;
    likes: number;
    image: string;
    completionPercentage: number;
  }

  export interface UserCourseDetails {
    startedCourses: Course[],
    otherCourses: Course[]
  }
  