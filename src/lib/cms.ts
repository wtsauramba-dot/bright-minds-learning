/**
 * Headless CMS Adapter & Integration Layer
 * 
 * Bright Minds Learning Front-End Architecture
 * This module provides clean abstraction functions for fetching courses, tutors,
 * and user profiles from headless CMS platforms (Strapi v4/v5, Sanity.io, or Contentful).
 * 
 * To switch from mock data to a live CMS:
 * 1. Set VITE_CMS_TYPE in your .env file ('strapi' | 'sanity' | 'contentful' | 'mock')
 * 2. Configure VITE_CMS_API_URL and VITE_CMS_API_TOKEN.
 * 3. Replace mock returns below with the provided production fetch methods.
 */

import { Course, Tutor } from '../types';
import { mockCourses } from '../data/courses';
import { mockTutors } from '../data/tutors';

const CMS_TYPE = import.meta.env.VITE_CMS_TYPE || 'mock';
const CMS_API_URL = import.meta.env.VITE_CMS_API_URL || 'http://localhost:1337/api';
const CMS_API_TOKEN = import.meta.env.VITE_CMS_API_TOKEN || '';

/**
 * Fetch all published courses from CMS or Mock
 */
export async function fetchCoursesFromCMS(): Promise<Course[]> {
  if (CMS_TYPE === 'mock') {
    return Promise.resolve(mockCourses);
  }

  // --- Example 1: STRAPI v4/v5 Integration ---
  if (CMS_TYPE === 'strapi') {
    const res = await fetch(`${CMS_API_URL}/courses?populate=*`, {
      headers: {
        'Authorization': `Bearer ${CMS_API_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });
    const json = await res.json();
    return json.data.map((item: any) => ({
      id: String(item.id),
      title: item.attributes.title,
      subject: item.attributes.subject,
      level: item.attributes.level,
      mode: item.attributes.mode,
      price: item.attributes.price,
      tutorId: String(item.attributes.tutor?.data?.id || ''),
      tutorName: item.attributes.tutor?.data?.attributes?.name || 'Bright Minds Instructor',
      tutorAvatar: item.attributes.tutor?.data?.attributes?.avatar?.data?.attributes?.url,
      rating: item.attributes.rating || 4.9,
      reviewsCount: item.attributes.reviewsCount || 10,
      thumbnail: item.attributes.thumbnail?.data?.attributes?.url || '/placeholder.jpg',
      description: item.attributes.description,
      duration: item.attributes.duration,
      lessonsCount: item.attributes.lessons?.data?.length || 0,
      lessons: item.attributes.lessons?.data?.map((l: any) => ({
        id: String(l.id),
        title: l.attributes.title,
        duration: l.attributes.duration,
        videoUrl: l.attributes.videoUrl,
        isPreview: l.attributes.isPreview,
        pdfUrl: l.attributes.pdfUrl,
        worksheetUrl: l.attributes.worksheetUrl,
      })) || [],
    }));
  }

  // --- Example 2: SANITY.IO GROQ Query ---
  if (CMS_TYPE === 'sanity') {
    const query = encodeURIComponent(`*[_type == "course"]{
      _id, title, subject, level, mode, price, rating, reviewsCount, description, duration,
      "thumbnail": thumbnail.asset->url,
      "tutorName": tutor->name,
      "tutorAvatar": tutor->photo.asset->url,
      "lessons": lessons[]->{_id, title, duration, videoUrl, isPreview, pdfUrl}
    }`);
    const res = await fetch(`https://${import.meta.env.VITE_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/production?query=${query}`);
    const json = await res.json();
    return json.result.map((item: any) => ({ ...item, id: item._id }));
  }

  return mockCourses;
}

/**
 * Fetch all verified tutors from CMS or Mock
 */
export async function fetchTutorsFromCMS(): Promise<Tutor[]> {
  if (CMS_TYPE === 'mock') {
    return Promise.resolve(mockTutors);
  }

  if (CMS_TYPE === 'strapi') {
    const res = await fetch(`${CMS_API_URL}/tutors?populate=*`, {
      headers: { 'Authorization': `Bearer ${CMS_API_TOKEN}` },
    });
    const json = await res.json();
    return json.data.map((item: any) => ({
      id: String(item.id),
      name: item.attributes.name,
      title: item.attributes.title,
      subject: item.attributes.subject,
      bio: item.attributes.bio,
      rating: item.attributes.rating,
      reviewCount: item.attributes.reviewCount,
      photo: item.attributes.photo?.data?.attributes?.url || '',
      hourlyRate: item.attributes.hourlyRate,
      totalStudents: item.attributes.totalStudents,
      coursesCount: item.attributes.coursesCount,
    }));
  }

  return mockTutors;
}
