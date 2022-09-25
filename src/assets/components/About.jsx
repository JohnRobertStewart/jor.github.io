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
          Hey there ! My name is John, and I used to code for fun and work as a live demonstrator, a salesman. 
          I'm getting too old for that, so I decided it's easier to code from the beach and make websites for 
          you instead. 
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