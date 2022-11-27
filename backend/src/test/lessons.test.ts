import { describe, it } from 'mocha';
import { expect } from 'chai';
import { getLessonsStub, getLessonStub } from './lessons.stubs';
import { getLessons, getLessonById } from '../services/lesson-service';
import { lesson, lessons } from './lessons.seeds';

describe('Lessons Service Unit Tests', function () {
  describe('getLessons() gets a list of lessons', function () {
    it('should successfully get a list of lessons', async function () {
      getLessonsStub();
      const lessonsList = await getLessons();

      expect(lessonsList.length).to.equal(3);
      expect(lessonsList[0]).to.equal(lessons[0]);
    });
  });
  describe('getLesson() gets the correct lesson', function () {
    it('should successfully get a list of lessons', async function () {
      getLessonStub();
      const lessonResponse = await getLessonById(lesson.id);

      expect(lessonResponse).to.equal(lesson);
    });
  });
});
