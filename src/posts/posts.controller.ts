import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller()
export class PostsController {
  constructor(private postsService: PostsService) {}

  // TODO: add guard
  @Get('posts')
  getAllPosts() {
    return this.postsService.findAll();
  }
}
