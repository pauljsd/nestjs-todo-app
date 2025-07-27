import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { TaskStatus } from './task.model';
import { CreateTaskLabelDto } from './create-task-label.dto';
import { Type } from 'class-transformer';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsEnum(TaskStatus)
  status: TaskStatus;

  //Temporary measure
  // @IsOptional()
  // @IsNotEmpty()
  // @IsUUID()
  userId: string;

  @IsOptional()
  @ValidateNested({ each: true }) //this willl validate all the conditions or objects in CtreateTaskLabelDto
  @Type(() => CreateTaskLabelDto) //this tell the type of element inside CreateTaskLabelDto Array
  labels?: CreateTaskLabelDto[];
}
