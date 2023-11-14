import AutodidactImg from "./public/autodidact.png";
import InternshipHubImg from "./public/internshiphub.png";
import AudioScripter from "./public/audio.png"
import Mind from "./public/mind.png"
import LawSuite from "./public/lawsuite.png"
import bot from "./public/discordbot.png"
import contractScan from "./public/contractScan.png"

export const portfolio = {
  about: {
    firstName: "Collins",
    lastName: "Lubwama",
    img: Mind,
    bio: `Hi, 
I've been learning and experimenting with tech for about 7 years ago. Below are a few of my experiments that am quite proud of: 
.`,
    skills: ["Javascript", "TypeScript", "NextJS", "NodeJS", "React", "Solana"],
  },
  projects: [
    {
      name: "LawSuite",
      img: LawSuite,
      tools: ["NextJS", "TypeScript", "OpenAI API", "Whisper", "Replicate"],
      url: "https://law-suite.vercel.app/",
      description: `AI-powered search and chat for Uganda's Law Corpus.`,
    },
    {
      name: "AudioScripter",
      img: AudioScripter,
      tools: ["NextJS", "TypeScript", "OpenAI API", "Whisper", "Replicate"],
      url: "https://audio-scripter.vercel.app/",
      description: `An app that uses an ML model, Whisper, on Replicate to turn an mp3 audio into text. This application gives you the ability to upload an audio and get a transcription back..`,
    },
    {
      name: "Esports Discord Bot",
      img: bot,
      tools: [ "javaScript", "Discord API",  "Replit"],
      url: "https://replit.com/@BizziCole87/EsportsDiscordBot",
      description: `A discord bot that uses the game state files, identified by game IDs to respond to discord commands. see the /team-stats and /snoop command in the screenshot below`,
    },
    {
      name: "ContractScan",
      img: contractScan,
      tools: ["NextJS", "TypeScript", "OpenAI API", "DropBox API"],
      url: "https://contract-suite.vercel.app/",
      description: `This project uses AI to analyze contracts and then sign them electronically after `,
    },
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
