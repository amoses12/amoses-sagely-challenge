/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from 'express';
import { Lesson } from '../models/lesson'
 import * as LessonService from '../services/lesson-service'
 /**
  * Router Definition
  */
 
 export const lessonRouter = express.Router();
 /**
  * Controller Definitions
  */
 
 // GET
lessonRouter.get('/lessons', async (req: Request, res: Response) => {
    try {
        const lessons: Lesson[] = await LessonService.getLessons()

        return res.status(200).send(lessons);
    } catch (e) {
        res.status(500).send(e.message)
    }
})

lessonRouter.get('/lessons/:lessonId', async (req: Request, res: Response) => {
    try {
        const lesson: Lesson = await LessonService.getLessonById(req.params.lessonId)
        if (!lesson) {
            res.status(400).send("Invalid lesson Id")
        } 
        return res.status(200).send(lesson)
    } catch (e) {
        res.status(500).send(e.message)
    }
})
 // POST

 // PUT

 // PATCH

 // DELETE
 