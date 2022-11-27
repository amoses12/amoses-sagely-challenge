import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('Lesson')
export class Lesson {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  url: string;

  @Column({ name: 'manual_tags', nullable: true })
  manualTags?: string;

  @Column({ name: 'abstract_note', nullable: true })
  abstractNote?: string;

  @Column({ nullable: true })
  date?: string;

  @CreateDateColumn({ name: 'date_added', nullable: true })
  dateAdded?: string;

  @UpdateDateColumn({ name: 'date_modified', nullable: true })
  dateModified?: string;

  @Column({ name: 'access_date', nullable: true })
  accessDate?: string;

  @Column({ nullable: true })
  key?: string;

  @Column({ name: 'item_type', nullable: true })
  itemType?: string;

  @Column({ name: 'publication_year', nullable: true })
  publicationYear?: number;

  @Column({ nullable: true })
  author?: string;

  @Column({ nullable: true })
  title?: string;
}
