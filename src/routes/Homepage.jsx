import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div className="relative w-full bg-white">
      <section className="relative w-full h-[90vh] bg-[url('/assets/pandoradev.png')] bg-no-repeat bg-cover bg-bottom">
        <div className="absolute bottom-8 left-[50%] animate-bounce">
          <svg
            width="17"
            height="7"
            viewBox="0 0 17 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 1L8.5 6L1 1"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </section>
      <section className="py-32">
        <div className="mx-auto px-4 w-full max-w-[90rem] flex flex-row items-start">
          <div className="basis-[45%] max-w-[45%]">
            <img
              src="/assets/pandoradev-logo.png"
              alt="pandoradev logo"
              loading="lazy"
              className="w-full"
            />
          </div>
          <div className="grow px-12">
            <p className="text-justify text-[#333] text-[1.25rem] font-medium leading-[1.8] tracking-[-0.0125rem]">
              Xin chào tất cả các bạn! <br />
              Nhóm chúng mình là PandoraDev, bao gồm 5 thành viên đến từ lớp
              IS208.O21, khoa Hệ thống thông tin của trường Đại học Công nghệ
              Thông tin - Đại học Quốc gia Thành phố Hồ Chí Minh. Với tinh thần
              đoàn kết, ham học hỏi và sáng tạo, PandoraDev luôn sẵn sàng đối
              mặt với mọi thử thách và không ngừng trau dồi kiến thức, kỹ năng
              để ngày càng hoàn thiện bản thân. <br />
            </p>
            <div className="mt-4 mx-auto w-max">
              <button
                onClick={() => navigate("/about-us")}
                className="px-4 py-[0.625rem] rounded-[6.25rem] text-[#367E89] text-base font-bold leading-[2] transition-all duration-300 ease-in-out hover:translate-y-[-2px] hover:shadow-lg"
                style={{
                  background:
                    "linear-gradient(21deg, #7AECF5 0%, #BEFCFC 100%)",
                }}
              >
                Tìm hiểu về chúng tôi
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
