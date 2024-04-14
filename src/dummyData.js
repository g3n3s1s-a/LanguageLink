
export const Groups = [
  {
    id: 1,
    profilePicture: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/800px-Flag_of_Spain.svg.png",
    groupName: "Spanish Leaners",
  },
  {
    id: 2,
    profilePicture: "https://cdn.britannica.com/82/682-004-F0B47FCB/Flag-France.jpg",
    groupName: "Lets learn French",
  },
  {
    id: 3,
    profilePicture: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
    groupName: "Learning Hindi",
  },
  {
    id: 4,
    profilePicture: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg",
    groupName: "Eager for English",
  },
  {
    id: 5,
    profilePicture: "https://cdn.britannica.com/90/7490-050-5D33348F/Flag-China.jpg?w=400&h=235&c=crop",
    groupName: "学习中文",
  },
  {
    id: 6,
    profilePicture: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Flag_of_the_Arab_League.svg",
    groupName: "تعلم اللغة العربية",
  },
  {
    id: 7,
    profilePicture: "https://asiasociety.org/sites/default/files/styles/1200w/public/K/korean-flag.jpg",
    groupName: "한국어 학습자 여기 모여라!",
  }
];


export const Users = [
  {
    id: 1,
    profilePicture: "assets/person/1.jpeg",
    username: "Carla Smith",
  },
  {
    id: 2,
    profilePicture: "assets/person/2.jpeg",
    username: "John Carter",
  },
  {
    id: 3,
    profilePicture: "assets/person/3.jpeg",
    username: "Vivian Nguyen",
  },
  {
    id: 4,
    profilePicture: "assets/person/4.jpeg",
    username: "Niele Ivey",
  },
  {
    id: 5,
    profilePicture: "assets/person/5.jpeg",
    username: "Norah Hawks",
  },
  {
    id: 6,
    profilePicture: "assets/person/6.jpeg",
    username: "Joseph Ahmad",
  },
  {
    id: 7,
    profilePicture: "assets/person/7.jpeg",
    username: "Travis Bennett",
  },
  {
    id: 8,
    profilePicture: "assets/person/8.jpeg",
    username: "Kristen Thomas",
  },
  {
    id: 9,
    profilePicture: "assets/person/9.jpeg",
    username: "Gabriella Duty",
  },
  {
    id: 10,
    profilePicture: "assets/person/10.jpeg",
    username: "Dmitri Kocaoglu",
  },
];


export const Posts = [
  {
    id: 1,
    desc:
      "Username: " +
      Users.find((user) => user.id === 1).username +
      "<br>Age: 25<br>Gender: Female" +
      "<br>Location: New York<br>Occupation: Software Engineer<br>" +
      "Language can teach: English, Coding<br>Language Want to Learn: Danish<br>" +
      "About me: I'm a software engineer who loves to read, write, and code. I'm passionate about technology, and learning about different cultures. I'm always looking for new opportunities to learn and grow.",
    date: "5 mins ago",
    userId: 1,
    like: 32,
    comment: 9,
  },
  {
    id: 2,
    desc:
      "Username: " +
      Users.find((user) => user.id === 2).username +
      "<br>Age: 32<br>Gender: Male" +
      "<br>Location: California<br>Occupation: Investment Banker<br>" +
      "Language can teach: English<br>Language want to learn: Spanish<br>" +
      "About me: I want to learn Spanish to broaden my client base",
    date: "15 mins ago",
    userId: 2,
    like: 2,
    comment: 1,
  },
  {
    id: 3,
    desc:
      "Username: " +
      Users.find((user) => user.id === 3).username +
      "<br>Age: 22<br>Gender: Female" +
      "<br>Location: Washington<br>Occupation: Marketing Analyst<br>" +
      "Language can teach: Vietnamese<br>Language want to learn: Russian<br>" +
      "About me: I want to travel to Russia soon so I want to be able to learn some of the basics",
    date: "1 hour ago",
    userId: 3,
    like: 61,
    comment: 2,
  },
  {
    id: 4,
    desc:
      "Username: " +
      Users.find((user) => user.id === 4).username +
      "<br>Age: 28<br>Gender: Female" +
      "<br>Location: Ohio<br>Occupation: Teacher<br>" +
      "Language can teach: Dutch<br>Language want to learn: Italian<br>" +
      "About me: I have a few students who speak Italian and I want to be able to connect with them ",
    photo: "assets/post/4.jpeg",
    date: "4 hours ago",
    userId: 4,
    like: 7,
    comment: 3,
  },
  {
    id: 5,
    desc:
      "Username: " +
      Users.find((user) => user.id === 5).username +
      "<br>Age: 19<br>Gender: Female" +
      "<br>Location: New Jersey<br>Occupation: Librarian<br>" +
      "Language can teach: French<br>Language want to learn: Mandarin<br>" +
      "About me: I want to be able to read Chinese philosphy ",
    photo: "assets/post/5.jpeg",
    date: "5 hours ago",
    userId: 5,
    like: 23,
    comment: 5,
  },
  {
    id: 6,
    desc:
      "Username: " +
      Users.find((user) => user.id === 6).username +
      "<br>Age: 38<br>Gender: Male" +
      "<br>Location: Chicago<br>Occupation: Lawyer<br>" +
      "Language can teach: Hindi<br>Language want to learn: Spanish<br>" +
      "About me: I want to learn Spanish to broaden my client base",
    photo: "assets/post/6.jpeg",
    date: "1 day ago",
    userId: 6,
    like: 44,
    comment: 6,
  },
  {
    id: 7,
    desc:
      "Username: " +
      Users.find((user) => user.id === 7).username +
      "<br>Age: 25<br>Gender: Male" +
      "<br>Location: Maine<br>Occupation: Asset Manager<br>" +
      "Language can teach: Dutch<br>Language want to learn: Spanish<br>" +
      "About me: I want to eventually live in Spain",
    // desc: "Never regret anything that made you smile.",
    photo: "assets/post/7.jpeg",
    date: "2 days ago",
    userId: 7,
    like: 52,
    comment: 3,
  },
  {
    id: 8,
    desc:
      "Username: " +
      Users.find((user) => user.id === 8).username +
      "<br>Age: 21<br>Gender: Female" +
      "<br>Location: New York<br>Occupation: Model<br>" +
      "Language can teach: Dutch<br>Language want to learn: German<br>" +
      "About me: I have a modeling job in Germany soon, so I need to learn the basics",
    photo: "assets/post/8.jpeg",
    date: "3 days ago",
    userId: 8,
    like: 15,
    comment: 1,
  },
  {
    id: 9,
    desc:
      "Username: " +
      Users.find((user) => user.id === 9).username +
      "<br>Age: 26<br>Gender: Female" +
      "<br>Location: Oregon<br>Occupation: Social Media Influencer<br>" +
      "Language can teach: Swahili<br>Language want to learn: Danish<br>" +
      "About me: I want to challenge myself and I have too much free time",
    // desc: "Change the world by being yourself.",
    photo: "assets/post/9.jpeg",
    date: "5 days ago",
    userId: 9,
    like: 11,
    comment: 2,
  },
  {
    id: 10,
    desc:
      "Username: " +
      Users.find((user) => user.id === 10).username +
      "<br>Age: 32<br>Gender: Male" +
      "<br>Location: Alaska<br>Occupation: Retired<br>" +
      "Language can teach: Dutch<br>Language want to learn: Protuguese<br>" +
      "About me: I was a Dutch Professor and I want to continue teaching",
    photo: "assets/post/10.jpeg",
    date: "1 week ago",
    userId: 10,
    like: 104,
    comment: 12,
  },
];
