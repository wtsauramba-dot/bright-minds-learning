import { mutation } from "./_generated/server";
import { mockCourses } from "../src/data/courses";
import { mockTutors } from "../src/data/tutors";
import { mockBookings, mockResources } from "../src/data/bookings";

export const seedDatabase = mutation({
  args: {},
  handler: async (ctx) => {
    // Clear existing tables
    const existingCourses = await ctx.db.query("courses").collect();
    for (const c of existingCourses) await ctx.db.delete(c._id);

    const existingLessons = await ctx.db.query("lessons").collect();
    for (const l of existingLessons) await ctx.db.delete(l._id);

    const existingTutors = await ctx.db.query("tutors").collect();
    for (const t of existingTutors) await ctx.db.delete(t._id);

    const existingBookings = await ctx.db.query("bookings").collect();
    for (const b of existingBookings) await ctx.db.delete(b._id);

    const existingResources = await ctx.db.query("resources").collect();
    for (const r of existingResources) await ctx.db.delete(r._id);

    // Seed Tutors
    for (const tutor of mockTutors) {
      await ctx.db.insert("tutors", {
        name: tutor.name,
        title: tutor.title,
        subject: tutor.subject,
        bio: tutor.bio,
        rating: tutor.rating,
        reviewCount: tutor.reviewCount,
        photo: tutor.photo,
        hourlyRate: tutor.hourlyRate,
        totalStudents: tutor.totalStudents,
        coursesCount: tutor.coursesCount,
        education: tutor.education,
      });
    }

    // Seed Courses & Lessons
    for (const course of mockCourses) {
      const courseId = await ctx.db.insert("courses", {
        title: course.title,
        subject: course.subject,
        level: course.level,
        mode: course.mode,
        price: course.price,
        tutorId: course.tutorId,
        tutorName: course.tutorName,
        tutorAvatar: course.tutorAvatar,
        rating: course.rating,
        reviewsCount: course.reviewsCount,
        thumbnail: course.thumbnail,
        description: course.description,
        duration: course.duration,
        lessonsCount: course.lessonsCount,
        enrolledStudentsCount: course.enrolledStudentsCount,
      });

      for (const lesson of course.lessons) {
        await ctx.db.insert("lessons", {
          courseId,
          title: lesson.title,
          duration: lesson.duration,
          videoUrl: lesson.videoUrl,
          isPreview: !!lesson.isPreview,
          pdfUrl: lesson.pdfUrl,
          worksheetUrl: lesson.worksheetUrl,
          description: lesson.description,
        });
      }
    }

    // Seed Bookings
    for (const booking of mockBookings) {
      await ctx.db.insert("bookings", {
        studentId: booking.studentId,
        studentName: booking.studentName,
        studentAvatar: booking.studentAvatar,
        tutorId: booking.tutorId,
        tutorName: booking.tutorName,
        subject: booking.subject,
        date: booking.date,
        time: booking.time,
        status: booking.status,
        meetingUrl: booking.meetingUrl,
        mode: booking.mode,
      });
    }

    // Seed Resources
    for (const resource of mockResources) {
      await ctx.db.insert("resources", {
        title: resource.title,
        courseTitle: resource.courseTitle,
        subject: resource.subject,
        type: resource.type,
        size: resource.size,
        downloadUrl: resource.downloadUrl,
        uploadDate: resource.uploadDate,
      });
    }

    return "Database seeded successfully with 12 courses, tutors, bookings, and resources!";
  },
});

export const seed = seedDatabase;
export default seedDatabase;
