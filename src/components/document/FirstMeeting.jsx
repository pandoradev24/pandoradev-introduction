import React from "react";

const FirstMeeting = () => {
  return (
    <div className="relative w-full">
      <div className="px-[8%%] w-full flex flex-row justify-around">
        <div className="basis-[40%] max-w-[40%]">
          <h2 className="py-8 text-center text-[2rem] font-bold">
            Biên bản họp nhóm lần 1
          </h2>
          <iframe
            src="https://drive.google.com/file/d/1UFmaXm_D0KD5s_2ttZlf-kZT3mf4JuU-/preview"
            allow="autoplay"
            className="w-full h-[40rem] border-solid border-[#333] border-[0.25rem]"
          ></iframe>
        </div>
        <div className="basis-[40%] max-w-[40%]">
          <h2 className="py-8 text-center text-[2rem] font-bold">
            Phân công lần 1
          </h2>
          <iframe
            src="https://drive.google.com/file/d/13wGMy80qlEDa3QTDxhyuLKI_xoqpxMtY/preview"
            allow="autoplay"
            className="w-full h-[40rem] border-solid border-[#333] border-[0.25rem]"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default FirstMeeting;
