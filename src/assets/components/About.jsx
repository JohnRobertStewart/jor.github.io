import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
          About
          </p>
        </div>

        <p className="text-xl mt-5 h-fit">
        Hello! John here, I started coding with LOGO way back in middle schoo, my interest in tech has always been
         both hardware and software. I've been building my own computers and hobby projects for as long as I can remember, 
         as for coding, from MODing games to using Visual Basic in highschool, and Unity in my 20's I've always had a personal interest.
         Now that I've definitively decided to put that hobby into practice as a career, I'd love to discuss working to develop 
         software to make the world a better place with you. 
        
        </p>
        <br />

        <p className="text-xl">
          I live on the West Coast near Vancouver Canada, so we can meet for a coffee chat if you're local, or online. 
          All I need to get started is a basic framework of what you want your site to look like, and some reference pictures
          of your business and you and your staff (don't be shy!).
        </p>
      </div>
    </div>
  );
};

export default About;