import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // 1. Courses Table
  courses: defineTable({
    title: v.string(),
    subject: v.string(),
    level: v.string(),     // 'Primary' | 'High School' | 'College'
    mode: v.string(),      // 'Live' | 'Recorded'
    price: v.number(),
    tutorId: v.string(),
    tutorName: v.string(),
    tutorAvatar: v.optional(v.string()),
    rating: v.number(),
    reviewsCount: v.number(),
    thumbnail: v.string(),
    description: v.string(),
    duration: v.string(),
    lessonsCount: v.number(),
    enrolledStudentsCount: v.optional(v.number()),
  }),

  // 2. Lessons Table (Associated with Courses)
  lessons: defineTable({
    courseId: v.id("courses"),
    title: v.string(),
    duration: v.string(),
    videoUrl: v.optional(v.string()),
    isPreview: v.boolean(),
    pdfUrl: v.optional(v.string()),
    worksheetUrl: v.optional(v.string()),
    description: v.optional(v.string()),
  }),

  // 3. Tutors Table
  tutors: defineTable({
    name: v.string(),
    title: v.string(),
    subject: v.string(),
    bio: v.string(),
    rating: v.number(),
    reviewCount: v.number(),
    photo: v.string(),
    hourlyRate: v.number(),
    totalStudents: v.number(),
    coursesCount: v.number(),
    education: v.optional(v.string()),
  }),

  // 4. Bookings Table
  bookings: defineTable({
    studentId: v.string(),
    studentName: v.string(),
    studentAvatar: v.optional(v.string()),
    tutorId: v.string(),
    tutorName: v.string(),
    subject: v.string(),
    date: v.string(),
    time: v.string(),
    status: v.string(), // 'Upcoming' | 'Completed' | 'Cancelled'
    meetingUrl: v.string(),
    mode: v.string(),
  }),

  // 5. Downloadable Resources Table
  resources: defineTable({
    title: v.string(),
    courseTitle: v.string(),
    subject: v.string(),
    type: v.string(), // 'Formula Sheet' | 'PDF Notes' | 'Worksheet'
    size: v.string(),
    downloadUrl: v.string(),
    uploadDate: v.string(),
  }),
});
