import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';
const prisma = new PrismaClient();

const steps = [
  {
    question: "What gender are you interested in?",
    name: "gender",
    options: ["Women", "Men"],
  },
  {
    question: "Desired relationship type?",
    name: "relationshipType",
    options: [
      "New friends",
      "Short-term dating",
      "Long-term dating",
      "Hookups",
    ],
  },
  {
    question: "What ages are you open to dating?",
    name: "ageRange",
    type: "range",
    options : ['18-24', '25-34', '35-44', '24-34', '20-24',]
    
  },
  {
    question: "Do you think it's important to have an emotional connection before a physical one?",
    name: "emotionalConnection",
    options: ["Yes", "No"],
  },
  {
    question: "Which word describes you better?",
    name: "personality",
    options: ["Carefree", "Intense"],
  },
  {
    question: "Do you enjoy discussing politics?",
    name: "discussPolitics",
    options: ["Yes", "No"],
  },
  {
    question: "Is astrological sign at all important in a match?",
    name: "astrologicalSign",
    options: ["Yes", "No"],
  },
  {
    question: "Should women continue to work full-time after marriage?",
    name: "workAfterMarriage",
    options: [
      "Yes",
      "No",
      "Either way, it's their choice",
      "Only if it's necessary",
    ],
  },
  {
    question: "Could you date someone who is really messy?",
    name: "messy",
    options: ["Yes", "No"],
  },
  {
    question: "Who makes decisions about your relationships?",
    name: "decisionMaker",
    options: ["Family", "Friends", "Society", "Me"],
  },
  {
    question: "How do you typically react when you feel stressed?",
    name: "stressReaction",
    options: [
      "I seek solitude.",
      "I talk to friends or family.",
      "I engage in physical activity.",
      "I try to distract myself.",
    ],
  },
  {
    question: "What role does physical attraction play in your relationships?",
    name: "physicalAttraction",
    options: [
      "It's the most important factor.",
      "It's important, but personality matters more.",
      "It's a bonus, but not essential.",
      "I prioritize emotional connection over physical attraction.",
    ],
  },
  {
    question: "How do you prefer to resolve conflicts in a relationship?",
    name: "conflictResolution",
    options: [
      "Open and honest discussion.",
      "Taking time to cool off before talking.",
      "Avoiding the issue until it resolves itself.",
      "Seeking help from a third party.",
    ],
  },
  {
    question: "How often do you feel a strong desire for physical intimacy?",
    name: "desireForIntimacy",
    options: [
      "Very often; it's a significant part of my life.",
      "Occasionally; I enjoy it but it's not a priority.",
      "Rarely; I prefer emotional intimacy.",
      "Almost never; I'm not focused on physical attraction.",
    ],
  },
  {
    question: "What's your preferred way of expressing affection?",
    name: "affectionExpression",
    options: [
      "Words of affirmation.",
      "Physical touch.",
      "Acts of service.",
      "Quality time together.",
    ],
  },
  {
    question: "How important is it for you to share similar values with your partner?",
    name: "sharedValues",
    options: [
      "Very important, it's a deal-breaker.",
      "Important, but we can differ on some things.",
      "Not very important, as long as we respect each other.",
      "It doesn't matter to me.",
    ],
  },
  {
    question: "When you meet someone new, what's your first impression based on?",
    name: "firstImpression",
    options: [
      "Their physical appearance.",
      "Their confidence and demeanor.",
      "Their personality and how they make me feel.",
      "A combination of all factors.",
    ],
  },
  {
    question: "What type of relationship are you most comfortable with?",
    name: "relationshipComfort",
    options: [
      "Casual and fun, no strings attached.",
      "Something light but with potential for more.",
      "A serious relationship from the start.",
      "I'm open to anything, depending on the chemistry.",
    ],
  },
  {
    question: "How do you feel about change in a relationship?",
    name: "relationshipChange",
    options: [
      "I embrace it and see it as an opportunity.",
      "I find it challenging but manageable.",
      "I resist change and prefer stability.",
      "It depends on the nature of the change.",
    ],
  },
];

const seed = async () => {
  // Create sample users
  // const usersPromises = [];
  // for (let i = 0; i < 15; i++) {
  //   usersPromises.push(
  //     prisma.user.create({
  //       data: {
  //         email: faker.internet.email(),
  //         name: faker.person.firstName(),
  //         country: 'India',
  //         city: faker.helpers.arrayElement(['Delhi', 'Noida', 'Lucknow', 'Kanpur', 'Ghaziabad']),
  //         nearBy: faker.helpers.arrayElement(['Noida', 'Ghaziabad', 'Kanpur']),
  //         gender: faker.helpers.arrayElement(['Male', 'Female']),
  //         dateOfBirth: faker.date.birthdate({ min: 18, max: 35, mode: 'age' }),
  //         passwordHash: await bcrypt.hash('password123', 10),
  //         profile: {
  //           create: {
  //             ideaPerson: faker.helpers.arrayElement(['Male', 'Female']),
  //             bio: faker.lorem.paragraph(),
  //             profilePictureUrl: faker.helpers.arrayElement(['https://th.bing.com/th/id/OIP.0l7k5zqRUVQ5Yq9eTpW2LgHaLJ?rs=1&pid=ImgDetMain',
  //               'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29uYXxlbnwwfHwwfHx8MA%3D%3D',
  //               'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D',
  //                'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8',
  //               'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8',
  //               'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwzNjAzMzU3fHxlbnwwfHx8fHw%3D'


  //             ]),
  //             images: [
  //               'https://cdn.pixabay.com/photo/2022/07/02/11/56/couple-7297174_640.jpg',
  //               'https://images.pexels.com/photos/9584940/pexels-photo-9584940.jpeg?auto=compress&cs=tinysrgb&w=400',
  //               'https://images.pexels.com/photos/9584932/pexels-photo-9584932.jpeg?auto=compress&cs=tinysrgb&w=400',
  //               'https://cdn.pixabay.com/photo/2021/02/11/05/26/couple-6004258_640.jpg',
  //               'https://cdn.pixabay.com/photo/2017/08/06/18/05/people-2594745_640.jpg'
  //             ],
  //           },
  //         },
  //         preferences: {
  //           create: {
  //             ageRange: `${faker.number.int({ min: 18, max: 35 })}-${faker.number.int({ min: 18, max: 40  })}`,
  //             gender: faker.helpers.arrayElement(['Male', 'Female']),
  //             interests: faker.helpers.arrayElements(['Music', 'Movies', 'Sports', 'Reading', 'Traveling']),
  //           },
  //         },
  //       },
  //     })
  //   );
  // }

  // const users = await Promise.all(usersPromises);
  // console.log(`Created ${users.length} users`);

  // Create sample messages
  // const messagesPromises = [];
  // for (let i = 0; i < 20; i++) {
  //   const sender = faker.helpers.arrayElement(users);
  //   const receiver = faker.helpers.arrayElement(users.filter(u => u.id !== sender.id));

  //   messagesPromises.push(
  //     prisma.message.create({
  //       data: {
  //         senderId: sender.id,
  //         receiverId: receiver.id,
  //         messageText: faker.lorem.sentence(),
  //       },
  //     })
  //   );

  //   console.log(`Created message from ${sender.email} to ${receiver.email}`);
  // }

  // await Promise.all(messagesPromises);
  // console.log(`Created ${messagesPromises.length} messages`);

  // Create sample likes
  
  // const likesPromises = [];
  // for (let i = 0; i < 20; i++) {
  //   const sender = faker.helpers.arrayElement(users);
  //   const receiver = faker.helpers.arrayElement(users.filter(u => u.id !== sender.id));

  //   likesPromises.push(
  //     prisma.like.create({
  //       data: {
  //         senderId: sender.id,
  //         receiverId: receiver.id,
  //       },
  //     })
  //   );

  //   console.log(`Created like from ${sender.email} to ${receiver.email}`);
  // }

  // await Promise.all(likesPromises);
  // console.log(`Created ${likesPromises.length} likes`);


  const users = await prisma.user.findMany({});
  
 // Create questions and options
//  const questionPromises = steps.map(async step => {
//   const question = await prisma.question.create({
//     data: {
//       question: step.question,
//       name: step.name,
//     },
//   });

//   if (step.options) {
//     const optionPromises = step.options.map(option => {
//       return prisma.option.create({
//         data: {
//           optionText: option,
//           questionId: question.id,
//         },
//       });
//     });

//     await Promise.all(optionPromises);
//     console.log(`Created options for question: ${question.questionText}`);
//   }

//   console.log(`Created question: ${question.questionText}`);
// });

//   await Promise.all(questionPromises);
//   console.log(`Created ${questionPromises.length} questions`);

const responsePromises = users.flatMap(async user => {
  return Promise.all(
    steps.flatMap(async step => {
      const question = await prisma.question.findFirst({
        where: { name: step.name },
      });

      if (!question) return [];

      let option;
      if (step.type === 'range') {
        // Generate a random age range
        const randomAge = faker.number.int({ min: 18, max: 35 });
        option = await prisma.option.findFirst({
          where: {
            questionId: question.id,
            questionText: {
              contains: randomAge.toString(),
            },
          },
        });
      } else {
        // Single choice options
        option = await prisma.option.findFirst({
          where: {
            questionId: question.id,
            questionText: {
              in: step.options,
            },
          },
        });
      }

      if (!option) return [];

      return prisma.response.create({
        data: {
          userId: user.id,
          optionId: option.id,
        },
      });
    })
  );
});

await Promise.all(responsePromises);
console.log('Created responses for all users');

  await prisma.$disconnect();
};

seed().catch(e => {
  console.error(e);
  process.exit(1);
});
