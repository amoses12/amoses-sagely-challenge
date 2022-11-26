import { db } from '../db/database'
import { Lesson } from '../models/lesson';

export async function getLessons(): Promise<Lesson[]> {
    const lessons = await db.getRepository(Lesson).find()
    return lessons
} 

export async function getLessonById(lessonId: string): Promise<Lesson>{
    const lesson = await db.getRepository(Lesson).findOneBy({
        id: lessonId
    })
    return lesson
}
