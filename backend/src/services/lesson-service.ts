import { db } from '../db/database';
import { Lesson } from '../models/lesson';
import * as dataLayer from '../db/lessons-db';

export async function getLessons(): Promise<Lesson[]> {
  const lessons = await dataLayer.getAllLessons();
  return lessons;
}

export async function getLessonById(lessonId: string): Promise<Lesson> {
  const lesson = await dataLayer.getLessonById(lessonId);
  return lesson;
}
