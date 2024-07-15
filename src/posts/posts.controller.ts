import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { PostsService } from './posts.service';

@Controller()
@UseGuards(AuthGuard)
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get('posts')
  getAllPosts() {
    return this.postsService.findAll();
  }
}
