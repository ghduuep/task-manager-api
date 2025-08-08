import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [UsersModule, TasksModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
