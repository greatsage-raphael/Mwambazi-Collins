import profileImg from "./public/collins.png";
import AutodidactImg from "./public/autodidact.png";
import InternshipHubImg from "./public/internshiphub.png";

export const portfolio = {
  about: {
    firstName: "Collins",
    lastName: "Mwambazi",
    img: profileImg,
    bio: `Hi, I'm Mwambazi Collins 

I began my web development journey 4 years ago and for the last year have committed myself to learning web3 technologies.

I have considerable experience with Javascript and have developed dozens of apps.

I also have considerable experience with git, nextjs, nodeJS, and SQL and MongoDB which has become my stack of choice for most apps.`,
    skills: ["Javascript", "TypeScript", "NextJS", "NodeJS", "React", "Solana"],
  },
  projects: [
    {
      name: "Autodidact",
      img: AutodidactImg,
      tools: ["NextJS", "TypeScript", "Metaplex", "Solana"],
      url: "https://autodidact-six.vercel.app/",
      description: `An education app that rewards its learners with nfts on the solana blockchain. The app rewards the learners for completing quizzes after completing the course material.`,
    },
    {
      name: "Internship Hub", 
      img: InternshipHubImg,
      tools: ["Javascript", "cheerio", "NodeJS", "Express", "React", "PassportJS"],
      url: "https://internshiphub.vercel.app/",
      description: `Internship Hub is a job board where students can find internships from LinkedIn. It also provides links to articles that provide career advice. Users can search for internships in their selected fields and find resources that will aid their internship search. Users can also log in with their Google or Github accounts.
      `,
    },
  ],
};
