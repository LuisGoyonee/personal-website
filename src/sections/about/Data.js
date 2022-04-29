import image from "../../images/skills.png";
export const aboutContentsOne = {
  id: "about",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: "Who am I?",
  headLine: "I am Luis Michael L. Goyone",
  description:
    "I'm a Front-End Developer with a passion for creating beautiful and functional websites. I'm currently working as a Front-End Developer at a startup called PouchNATION.",
  buttonLabel: "More",
  imgStart: false,
  img: require("../../images/me3.png"),
  alt: "Car",
  dark: true,
  primary: true,
  darkText: true,
  column: false,
};

export const aboutContentsTwo = {
  id: "aboutPartTwo",
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  dark: true,
  primary: true,
  darkText: true,
  column: true,
  img: require("../../images/skills.png"),
  content: [
    {
      topLine: "Personal Info",
      description:
        "I was born on 1999 in Baguio City, where I graduated with a Bachelor's degree in Information Technology from Saint Louis University. During my last semester in SLU, I conducted my internship for 5 months in PouchNATION where I was introduced to reactjs.",
    },
    {
      topLine: "The goal",
      description:
        "I decided that I wanted to be a web developer during my second semester in college. This was when we were starting to learn about different frameworks and libraries and I enjoyed it. I was then the lead front-end developer in our thesis. While conducting my internship in PouchNATION, I learned how to work with reactjs and its components. My goal now is to gain more knowledge in the field of web development and to be able to work with different frameworks, and libraries and eventually to be a full-stack developer.",
    },
    {
      topLine: "Skill set",
      description: "As a Front-End Developer, I have the following skills:",
    },
  ],
};
