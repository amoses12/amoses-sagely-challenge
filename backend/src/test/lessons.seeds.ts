import { Lesson } from '../models/lesson';
import { randomUUID } from 'crypto';

export const lessons: Lesson[] = [
  {
    id: randomUUID(),
    url: 'https://test.com',
    manualTags: 'Javascript; node',
    abstractNote: 'Learn Javascript',
    date: '2022-11-1',
    dateAdded: '2022-11-1',
    dateModified: '2022-11-1',
    accessDate: '2022-11-1',
    key: 'ABCD1234',
    itemType: 'Blog Post',
    publicationYear: 2022,
    author: 'Testy McTesterson',
    title: 'Javascript for beginners',
  },
  {
    id: randomUUID(),
    url: 'https://test1.com',
    manualTags: 'Go; Programming;',
    abstractNote: 'Learn the Go programming language',
    date: '2022-11-1',
    dateAdded: '2022-11-1',
    dateModified: '2022-11-1',
    accessDate: '2022-11-1',
    key: 'ABCD1235',
    itemType: 'Blog Post',
    publicationYear: 2022,
    author: 'Testy McTesterson Jr.',
    title: 'Go For Beginners',
  },
  {
    id: randomUUID(),
    url: 'https://test12.com',
    manualTags: 'React; Web Development;',
    abstractNote: 'Learn the React Framework',
    date: '2022-11-1',
    dateAdded: '2022-11-1',
    dateModified: '2022-11-1',
    accessDate: '2022-11-1',
    key: 'ABCD1236',
    itemType: 'Blog Post',
    publicationYear: 2022,
    author: 'Testy McTesterson Sr.',
    title: 'React For Beginners',
  },
];

export const lesson: Lesson = {
  id: randomUUID(),
  url: 'https://test.com',
  manualTags: 'Javascript; node',
  abstractNote: 'Learn Javascript',
  date: '2022-11-1',
  dateAdded: '2022-11-1',
  dateModified: '2022-11-1',
  accessDate: '2022-11-1',
  key: 'ABCD1234',
  itemType: 'Blog Post',
  publicationYear: 2022,
  author: 'Testy McTesterson',
  title: 'Javascript for beginners',
};
