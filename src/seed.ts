import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
  try {
    const posts: Prisma.PostCreateManyInput[] = [
      {
        title: 'Introduction to JavaScript',
        content:
          'JavaScript is a versatile programming language used for web development.',
      },
      {
        title: 'Getting Started with Python',
        content:
          'Python is known for its readability and simplicity, making it a great first language for beginners.',
      },
      {
        title: 'Understanding CSS',
      },
      {
        title: 'Advanced TypeScript Techniques',
        content:
          'TypeScript extends JavaScript by adding types, which can help catch errors early and make code more maintainable.',
      },
      {
        title: 'Database Design Principles',
      },
    ];

    await prisma.post.createMany({
      data: posts,
      skipDuplicates: true,
    });

    console.log('Seed data inserted successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
