import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PostsModule } from './posts/posts.module';

@Module({
  providers: [AppService, PrismaService],
  imports: [PostsModule],
})
export class AppModule {}
