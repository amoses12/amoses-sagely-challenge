import { db } from './database';
import { Lesson } from '../models/lesson';

export async function getAllLessons(): Promise<Lesson[]> {
  const lessons = await db.getRepository(Lesson).find();
  return lessons;
}

export async function getLessonById(lessonId): Promise<Lesson> {
  const lesson = await db.getRepository(Lesson).findOneBy({ id: lessonId });
  return lesson;
}
