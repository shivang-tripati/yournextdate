 export const steps = [
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


  // discover section data 


  export interface UserProfile {
    profilePictureUrl: string;
  }
  
  export interface User {
    id: string;
    name: string;
    city: string;
    country: string;
    profiles: UserProfile[];
    interests: string[];
  }
  
  export const fakeNearbyUsers: User[] = [
    {
      id: '1',
      name: 'Alice Johnson',
      city: 'New York',
      country: 'USA',
      profiles: [
        { profilePictureUrl: 'https://images.unsplash.com/photo-1531493945696-9d499dd12e4f?ixlib=rb-4.0.3&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80' },
        { profilePictureUrl: 'https://images.unsplash.com/photo-1531493945696-9d499dd12e4f' }
      ],
      interests: ['Music', 'Travel', 'Photography']
    },
    {
      id: '2',
      name: 'Bob Smith',
      city: 'New York',
      country: 'USA',
      profiles: [
        { profilePictureUrl: 'https://images.unsplash.com/photo-1523990392345-154b4e4e013e?ixlib=rb-4.0.3&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80' },
        { profilePictureUrl: 'https://images.unsplash.com/photo-1523990392345-154b4e4e013e' }
      ],
      interests: ['Sports', 'Movies', 'Cooking']
    },
    {
      id: '3',
      name: 'Charlie Brown',
      city: 'Los Angeles',
      country: 'USA',
      profiles: [
        { profilePictureUrl: 'https://images.unsplash.com/photo-1570426007758-c7b094504e78?ixlib=rb-4.0.3&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80' },
        { profilePictureUrl: 'https://images.unsplash.com/photo-1570426007758-c7b094504e78' }
      ],
      interests: ['Reading', 'Gaming', 'Travel']
    },
    {
      id: '4',
      name: 'David Smith',
      city: 'San Francisco',
      country: 'USA',
      profiles: [
        { profilePictureUrl: 'https://images.unsplash.com/photo-1542281286-2c62cdd4a142?ixlib=rb-4.0.3&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80' },
        { profilePictureUrl: 'https://images.unsplash.com/photo-1542281286-2c62cdd4a142' }
      ],
      interests: ['Photography', 'Hiking', 'Painting']
    },
    {
      id: '5',
      name: 'Emily Johnson',
      city: 'Chicago',
      country: 'USA',
      profiles: [
        { profilePictureUrl: 'https://images.unsplash.com/photo-1599045937213-1b409bfef5c4?ixlib=rb-4.0.3&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80' },
        { profilePictureUrl: 'https://images.unsplash.com/photo-1599045937213-1b409bfef5c4' }
      ],
      interests: ['Sports', 'Cooking', 'Gardening']
    },
    // Add more fake users as needed
  ];
  export const fakeCityUsers: User[] = [
    {
      id: '4',
      name: 'Diana Prince',
      city: 'Los Angeles',
      country: 'USA',
      profiles: [
        { profilePictureUrl: 'https://images.unsplash.com/photo-1527434249931-1f2e8d8bfe0f?ixlib=rb-4.0.3&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80' },
        { profilePictureUrl: 'https://images.unsplash.com/photo-1527434249931-1f2e8d8bfe0f' }
      ],
      interests: ['Art', 'Hiking', 'Music']
    },
    {
      id: '5',
      name: 'Edward Nygma',
      city: 'Los Angeles',
      country: 'USA',
      profiles: [
        { profilePictureUrl: 'https://images.unsplash.com/photo-1526234384166-8aefc6b0a93a?ixlib=rb-4.0.3&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80' },
        { profilePictureUrl: 'https://images.unsplash.com/photo-1526234384166-8aefc6b0a93a' }
      ],
      interests: ['Tech', 'Movies', 'Music']
    },
    {
      id: '6',
      name: 'Elizabeth Lance',
      city: 'San Francisco',
      country: 'USA',
      profiles: [
        { profilePictureUrl: 'https://images.unsplash.com/photo-1556740749-0eb2c4b357b0?ixlib=rb-4.0.3&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80' },
        { profilePictureUrl: 'https://images.unsplash.com/photo-1556740749-0eb2c4b357b0' }
      ],
      interests: ['Photography', 'Travel', 'Hiking']
    },
    {
      id: '7',
      name: 'Frank Castle',
      city: 'New York',
      country: 'USA',
      profiles: [
        { profilePictureUrl: 'https://images.unsplash.com/photo-1506748686214e9df14f28?ixlib=rb-4.0.3&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80' },
        { profilePictureUrl: 'https://images.unsplash.com/photo-1506748686214e9df14f28' }
      ],
      interests: ['Comics', 'Gaming', 'Reading']
    },
    // Add more fake users as needed
  ];
  
  export const fakeCommonInterestUsers: User[] = [
    {
      id: '6',
      name: 'Fiona Green',
      city: 'San Francisco',
      country: 'USA',
      profiles: [
        { profilePictureUrl: 'https://images.unsplash.com/photo-1506748686214-9f7b04e10bfb?ixlib=rb-4.0.3&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80' },
        { profilePictureUrl: 'https://images.unsplash.com/photo-1506748686214-9f7b04e10bfb' }
      ],
      interests: ['Photography', 'Travel', 'Music']
    },
    {
      id: '7',
      name: 'George Black',
      city: 'San Francisco',
      country: 'USA',
      profiles: [
        { profilePictureUrl: 'https://images.unsplash.com/photo-1542848587-319d8f1d6d39?ixlib=rb-4.0.3&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80' },
        { profilePictureUrl: 'https://images.unsplash.com/photo-1542848587-319d8f1d6d39' }
      ],
      interests: ['Travel', 'Sports', 'Art']
    },
    {
      id: '8',
      name: 'Hannah Brown',
      city: 'New York',
      country: 'USA',
      profiles: [
        { profilePictureUrl: 'https://images.unsplash.com/photo-1533642546744-3c07b9c9b62a?ixlib=rb-4.0.3&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80' },
        { profilePictureUrl: 'https://images.unsplash.com/photo-1533642546744-3c07b9c9b62a' }
      ],
    
      interests: ['Photography', 'Reading', 'Fitness']
    },
    {
      id: '9',
      name: 'Ian Wilson',
      city: 'Seattle',
      country: 'USA',
      profiles: [
        { profilePictureUrl: 'https://images.unsplash.com/photo-1517816734250-b0a1a2a7ef30' }
      ],
      interests: ['Sports', 'Gaming', 'Cooking']
    },
    {
      id: '10',
      name: 'Julia Black',
      city: 'Los Angeles',
      country: 'USA',
      profiles: [
        { profilePictureUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14f28d7a' }
      ],
      interests: ['Music', 'Art', 'Travel']
    },
    {
      id: '11',
      name: 'Kate Smith',
      city: 'San Francisco',
      country: 'USA',
      profiles: [
        { profilePictureUrl: 'https://images.unsplash.com/photo-1533642585278-e4b004d00c4b' }
      ],
      interests: ['Fashion', 'Travel', 'Music']
    },
    {
      id: '12',
      name: 'Michael Johnson',
      city: 'Chicago',
      country: 'USA',
      profiles: [
        { profilePictureUrl: 'https://images.unsplash.com/photo-1542252893-4d151dc1487f' }
      ],
      interests: ['Sports', 'Movies', 'Cooking']
    },
    // Add more fake users as needed
  ];
  
  export const fakeRecommendedUsers: User[] = [
    {
      id: '8',
      name: 'Hannah Baker',
      city: 'Chicago',
      country: 'USA',
      profiles: [
        { profilePictureUrl: 'https://images.unsplash.com/photo-1517846218019-e8d7d3b4b6f0' }
      ],
      interests: ['Fitness', 'Cooking', 'Music']
    },
    {
      id: '9',
      name: 'Ian Malcolm',
      city: 'Chicago',
      country: 'USA',
      profiles: [
        { profilePictureUrl: 'https://images.unsplash.com/photo-1506748686214-9f7b04e10bfb' }
      ],
      interests: ['Movies', 'Music', 'Technology']
    },
    {
      id: '10',
      name: 'Jimmy Page',
      city: 'Los Angeles',
      country: 'USA',
      profiles: [
        { profilePictureUrl: 'https://images.unsplash.com/photo-1506748686214-e9df14f28d7a' }
      ],
      interests: ['Music', 'Travel', 'Photography']
    },
    {
      id: '11',
      name: 'Karen Page',
      city: 'New York',
      country: 'USA',
      profiles: [
        { profilePictureUrl: 'https://images.unsplash.com/photo-1522602258595-8a0fc1f6d489' }
      ],
      interests: ['Sports', 'Movies', 'Cooking']
    },
    {
      id: '12',
      name: 'Lara Kane',
      city: 'San Francisco',
      country: 'USA',
      profiles: [
        { profilePictureUrl: 'https://images.unsplash.com/photo-1546841580-b33d03d8e751' }
      ],
      interests: ['Reading', 'Gaming', 'Travel']
    },
    {
      id: '13',
      name: 'Mary Seward',
      city: 'Los Angeles',
      country: 'USA',
      profiles: [
        { profilePictureUrl: 'https://images.unsplash.com/photo-1506748686214-3c07b9c9b62a' }
      ],
      interests: ['Art', 'Hiking', 'Music']
    },
    {
      id: '14',
      name: 'Nick Hunter',
      city: 'Chicago',
      country: 'USA',
      profiles: [
        { profilePictureUrl: 'https://images.unsplash.com/photo-1563648068-7c1d4402be1a' }
      ],
      interests: ['Tech', 'Movies', 'Music']
    },
    {
      id: '15',
      name: 'Olivia Dunham',
      city: 'San Francisco',
      country: 'USA',
      profiles: [
        { profilePictureUrl: 'https://images.unsplash.com/photo-1542838728-8b964023792d' }
      ],
      interests: ['Photography', 'Travel', 'Music']
    },
    {
      id: '16',
      name: 'Pete Wiseman',
      city: 'New York',
      country: 'USA',
      profiles: [
        { profilePictureUrl: 'https://images.unsplash.com/photo-1506748686214-9f7b04e10bfb' }
      ],
      interests: ['Sports', 'Movies', 'Cooking']
    },
    // Add more fake users as needed
  ];
  
