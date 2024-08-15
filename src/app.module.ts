import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';

@Module({
  providers: [AppService, PrismaService],
  imports: [PostsModule, AuthModule],
})
export class AppModule {}
