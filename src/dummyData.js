export const Users = [
  {
    id:1,
    profilePicture: "assets/person/1.jpeg",
    username: "Safak Kocaoglu",
  },
  {
    id:2,
    profilePicture: "assets/person/2.jpeg",
    username: "Janell Shrum",
  },
  {
    id:3,
    profilePicture: "assets/person/3.jpeg",
    username: "Alex Durden",
  },
  {
    id:4,
    profilePicture: "assets/person/4.jpeg",
    username: "Dora Hawks",
  },
  {
    id:5,
    profilePicture: "assets/person/5.jpeg",
    username: "Thomas Holden",
  },
  {
    id:6,
    profilePicture: "assets/person/6.jpeg",
    username: "Shirley Beauchamp",
  },
  {
    id:7,
    profilePicture: "assets/person/7.jpeg",
    username: "Travis Bennett",
  },
  {
    id:8,
    profilePicture: "assets/person/8.jpeg",
    username: "Kristen Thomas",
  },
  {
    id:9,
    profilePicture: "assets/person/9.jpeg",
    username: "Gary Duty",
  },
  {
    id:10,
    profilePicture: "assets/person/10.jpeg",
    username: "Safak Kocaoglu",
  },
];

export const Posts = [
  {
    id: 1,
    desc: "Username: " + Users.find(user => user.id === 1).username+ 
    "<br>Age: 25<br>Gender: Male"+
    "<br>Location: New York<br>Occupation: Software Engineer<br>"+
    "Hobbies: Reading, Writing, Coding<br>Interests: Technology, Science, Literature<br>"+
    "Bio: I'm a software engineer who loves to read, write, and code. I'm passionate about technology, science, and literature. I'm always looking for new opportunities to learn and grow.",
    date: "5 mins ago",
    userId: 1,
    like: 32,
    comment: 9,
  },
  {
    id: 2,
    desc: "Username: " + Users.find(user => user.id === 2).username+ 
    "<br>Age: 25<br>Gender: Male"+
    "<br>Location: New York<br>Occupation: Software Engineer<br>"+
    "Hobbies: Reading, Writing, Coding<br>Interests: Technology, Science, Literature<br>"+
    "Bio: I'm a software engineer who loves to read, write, and code. I'm passionate about technology, science, and literature. I'm always looking for new opportunities to learn and grow.",
    date: "15 mins ago",
    userId: 2,
    like: 2,
    comment: 1,
  },
  {
    id: 3,
    desc: "Username: " + Users.find(user => user.id === 3).username+ 
    "<br>Age: 25<br>Gender: Male"+
    "<br>Location: New York<br>Occupation: Software Engineer<br>"+
    "Hobbies: Reading, Writing, Coding<br>Interests: Technology, Science, Literature<br>"+
    "Bio: I'm a software engineer who loves to read, write, and code. I'm passionate about technology, science, and literature. I'm always looking for new opportunities to learn and grow.",    date: "1 hour ago",
    userId: 3,
    like: 61,
    comment: 2,
  },
  {
    id: 4,
    desc: "Username: " + Users.find(user => user.id === 4).username+ 
    "<br>Age: 25<br>Gender: Male"+
    "<br>Location: New York<br>Occupation: Software Engineer<br>"+
    "Hobbies: Reading, Writing, Coding<br>Interests: Technology, Science, Literature<br>"+
    "Bio: I'm a software engineer who loves to read, write, and code. I'm passionate about technology, science, and literature. I'm always looking for new opportunities to learn and grow.",
    photo: "assets/post/4.jpeg",
    date: "4 hours ago",
    userId: 4,
    like: 7,
    comment: 3,
  },
  {
    id: 5,
    desc: "Username: " + Users.find(user => user.id === 5).username+ 
    "<br>Age: 25<br>Gender: Male"+
    "<br>Location: New York<br>Occupation: Software Engineer<br>"+
    "Hobbies: Reading, Writing, Coding<br>Interests: Technology, Science, Literature<br>"+
    "Bio: I'm a software engineer who loves to read, write, and code. I'm passionate about technology, science, and literature. I'm always looking for new opportunities to learn and grow.",
    photo: "assets/post/5.jpeg",
    date: "5 hours ago",
    userId: 5,
    like: 23,
    comment: 5,
  },
  {
    id: 6,
    desc: "Username: " + Users.find(user => user.id === 6).username+ 
    "<br>Age: 25<br>Gender: Male"+
    "<br>Location: New York<br>Occupation: Software Engineer<br>"+
    "Hobbies: Reading, Writing, Coding<br>Interests: Technology, Science, Literature<br>"+
    "Bio: I'm a software engineer who loves to read, write, and code. I'm passionate about technology, science, and literature. I'm always looking for new opportunities to learn and grow.",
    photo: "assets/post/6.jpeg",
    date: "1 day ago",
    userId: 6,
    like: 44,
    comment: 6,
  },
  {
    id: 7,
    desc: "Username: " + Users.find(user => user.id === 7).username+ 
    "<br>Age: 25<br>Gender: Male"+
    "<br>Location: New York<br>Occupation: Software Engineer<br>"+
    "Hobbies: Reading, Writing, Coding<br>Interests: Technology, Science, Literature<br>"+
    "Bio: I'm a software engineer who loves to read, write, and code. I'm passionate about technology, science, and literature. I'm always looking for new opportunities to learn and grow.",
    desc: "Never regret anything that made you smile.",
    photo: "assets/post/7.jpeg",
    date: "2 days ago",
    userId: 7,
    like: 52,
    comment: 3,
  },
  {
    id: 8,
    desc: "Username: " + Users.find(user => user.id === 8).username+ 
    "<br>Age: 25<br>Gender: Male"+
    "<br>Location: New York<br>Occupation: Software Engineer<br>"+
    "Hobbies: Reading, Writing, Coding<br>Interests: Technology, Science, Literature<br>"+
    "Bio: I'm a software engineer who loves to read, write, and code. I'm passionate about technology, science, and literature. I'm always looking for new opportunities to learn and grow.",
    photo: "assets/post/8.jpeg",
    date: "3 days ago",
    userId: 8,
    like: 15,
    comment: 1,
  },
  {
    id: 9,
    desc: "Username: " + Users.find(user => user.id === 9).username+ 
    "<br>Age: 25<br>Gender: Male"+
    "<br>Location: New York<br>Occupation: Software Engineer<br>"+
    "Hobbies: Reading, Writing, Coding<br>Interests: Technology, Science, Literature<br>"+
    "Bio: I'm a software engineer who loves to read, write, and code. I'm passionate about technology, science, and literature. I'm always looking for new opportunities to learn and grow.",
    desc: "Change the world by being yourself.",
    photo: "assets/post/9.jpeg",
    date: "5 days ago",
    userId: 9,
    like: 11,
    comment: 2,
  },
  {
    id: 10,
    desc: "Username: " + Users.find(user => user.id === 9).username+ 
    "<br>Age: 25<br>Gender: Male"+
    "<br>Location: New York<br>Occupation: Software Engineer<br>"+
    "Hobbies: Reading, Writing, Coding<br>Interests: Technology, Science, Literature<br>"+
    "Bio: I'm a software engineer who loves to read, write, and code. I'm passionate about technology, science, and literature. I'm always looking for new opportunities to learn and grow.",
    photo: "assets/post/10.jpeg",
    date: "1 week ago",
    userId: 10,
    like: 104,
    comment: 12,
  },
];
