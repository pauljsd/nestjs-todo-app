import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { Task } from './task.entity';

@Entity()
@Unique(['name', 'taskId']) //this wont make data in the specified column get repeated in the db
export class TaskLabel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  @Index()
  taskId: string;

  //many label can be associated with a task
  @ManyToOne(() => Task, (task) => task.labels, {
    onDelete: 'CASCADE', // for CASCADE - if task(parent) is removed the corresponding labels()child/children) will be removed
    orphanedRowAction: 'delete', //if a task is updated with the labels, this will delete the previous labels
  })
  task: Task;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
