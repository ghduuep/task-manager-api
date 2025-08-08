import { IsDateString, IsEnum, IsNotEmpty, IsOptional } from "class-validator";
import { Priority, Status } from "generated/prisma";

export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsOptional()
  description?: string;

  @IsOptional()
  @IsEnum(Status)
  status?: Status;

  @IsOptional()
  @IsEnum(Priority)
  priority?: Priority;

  @IsOptional()
  @IsDateString()
  dueDate?: Date;
  
  @IsOptional()
  userId?: number;
}
