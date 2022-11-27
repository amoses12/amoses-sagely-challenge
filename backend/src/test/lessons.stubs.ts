import sinon from 'sinon';
import * as dataLayer from '../db/lessons-db';
import { lessons, lesson } from '../test/lessons.seeds';

export function getLessonsStub(): sinon.SinonStub {
  return sinon.stub(dataLayer, 'getAllLessons').resolves(lessons);
}
export function getLessonStub(): sinon.SinonStub {
  return sinon.stub(dataLayer, 'getLessonById').resolves(lesson);
}
