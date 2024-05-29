import React from "react";

const FifthMeeting = () => {
  return (
    <div className="relative w-full">
      <div className="px-[8%%] w-full flex flex-col lg:flex-row items-center justify-around">
        <div className="px-[8%] lg:px-0 w-full lg:basis-[40%] lg:max-w-[40%]">
          <h2 className="py-8 text-center text-[2rem] font-bold">
            Biên bản họp nhóm lần 5
          </h2>
          <iframe
            src="https://drive.google.com/file/d/1IuOeJ70QDgNKZwaaCDNhVYxNxmAJTJVR/preview"
            allow="autoplay"
            loading="eager"
            className="w-full h-[55vh] md:h-[40rem] border-solid border-[#333] border-[0.25rem]"
          ></iframe>
        </div>
        <div className="px-[8%] lg:px-0 w-full lg:basis-[40%] lg:max-w-[40%]">
          <h2 className="py-8 text-center text-[2rem] font-bold">
            Phân công lần 5
          </h2>
          <iframe
            src="https://drive.google.com/file/d/1C4h1i4zHYl38OmC0rSvvZ2qucBUQNtQg/preview"
            allow="autoplay"
            loading="eager"
            className="w-full h-[55vh] md:h-[40rem] border-solid border-[#333] border-[0.25rem]"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default FifthMeeting;
