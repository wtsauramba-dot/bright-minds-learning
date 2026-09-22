import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Query: Fetch all courses with their lessons
export const listCourses = query({
  args: {},
  handler: async (ctx) => {
    const courses = await ctx.db.query("courses").collect();
    const result = await Promise.all(
      courses.map(async (course) => {
        const lessons = await ctx.db
          .query("lessons")
          .filter((q) => q.eq(q.field("courseId"), course._id))
          .collect();
        return {
          ...course,
          id: course._id,
          lessons: lessons.map((l) => ({ ...l, id: l._id })),
        };
      })
    );
    return result;
  },
});

// Query: Fetch single course by ID
export const getCourseById = query({
  args: { id: v.id("courses") },
  handler: async (ctx, args) => {
    const course = await ctx.db.get(args.id);
    if (!course) return null;
    const lessons = await ctx.db
      .query("lessons")
      .filter((q) => q.eq(q.field("courseId"), course._id))
      .collect();
    return {
      ...course,
      id: course._id,
      lessons: lessons.map((l) => ({ ...l, id: l._id })),
    };
  },
});

// Mutation: Add new course (for Tutors)
export const addCourse = mutation({
  args: {
    title: v.string(),
    subject: v.string(),
    level: v.string(),
    mode: v.string(),
    price: v.number(),
    tutorId: v.string(),
    tutorName: v.string(),
    thumbnail: v.string(),
    description: v.string(),
    duration: v.string(),
  },
  handler: async (ctx, args) => {
    const courseId = await ctx.db.insert("courses", {
      ...args,
      rating: 5.0,
      reviewsCount: 1,
      lessonsCount: 2,
      enrolledStudentsCount: 1,
    });

    // Add default starter lessons
    await ctx.db.insert("lessons", {
      courseId,
      title: "Lesson 1: Foundations & Overview",
      duration: "45 mins",
      isPreview: true,
      description: "Introduction and core problem set breakdown.",
    });

    return courseId;
  },
});
