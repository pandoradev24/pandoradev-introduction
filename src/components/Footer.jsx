import React from "react";
import { Link } from "react-router-dom";

const socialMediaList = [
  {
    id: "youtube",
    icon: "/assets/youtube.svg",
    url: "https://www.youtube.com/",
  },
  {
    id: "facebook",
    icon: "/assets/facebook.svg",
    url: "https://www.facebook.com/",
  },
  {
    id: "instagram",
    icon: "/assets/instagram.svg",
    url: "https://www.instagram.com/",
  },
  {
    id: "linkedin",
    icon: "/assets/linkedin.svg",
    url: "https://www.linkedin.com/",
  },
];

const Footer = () => {
  return (
    <div
      className="w-full pt-14 "
      style={{
        background: "linear-gradient(21deg, #0ed8ac 0%, #71a5c8 100%)",
      }}
    >
      <div className="mx-auto px-[7.5rem] w-full max-w-[90rem]">
        <div className="w-full flex flex-row">
          <div className="basis-[15%] max-w-[15%]">
            <h2 className="mb-2 text-[1.25rem] text-white font-bold leading-[1.7]">
              Về chúng tôi
            </h2>
            <div className="flex flex-col">
              <Link
                to="/about-us"
                className="text-white text-base font-medium leading-[2]"
              >
                Giới thiệu
              </Link>
              <Link
                to="/contract"
                className="text-white text-base font-medium leading-[2]"
              >
                Hợp đồng
              </Link>
              <Link
                to="/contact"
                className="text-white text-base font-medium leading-[2]"
              >
                Liên hệ
              </Link>
            </div>
          </div>
          <div className="ml-12 basis-[15%] max-w-[15%]">
            <h2 className="mb-2 text-[1.25rem] text-white font-bold leading-[1.7]">
              Sản phẩm
            </h2>
            <div className="flex flex-col">
              <Link
                to="/project"
                className="text-white text-base font-medium leading-[2]"
              >
                Đồ án
              </Link>
              <Link
                to="/document"
                className="text-white text-base font-medium leading-[2]"
              >
                Tài liệu
              </Link>
            </div>
          </div>
          <div className="ml-auto">
            <h2 className="mb-2 text-right text-[1.25rem] text-white font-bold leading-[1.7]">
              Theo dõi chúng tôi
            </h2>
            <div className="grid auto-cols-[1fr] gap-x-[0.625rem] gap-y-4 grid-rows-[auto] grid-cols-[1fr_1fr_1fr] grid-flow-col">
              {socialMediaList.map((socialMedia, index) => (
                <a
                  key={socialMedia.id}
                  href={socialMedia.url}
                  target="_blank"
                  className="max-w-full size-[1.875rem] flex flex-row items-center justify-center text-white"
                >
                  <div className="flex">
                    <img src={socialMedia.icon} alt="" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 w-full">
          <h2 className="mb-2 text-left text-[1.25rem] text-white font-bold leading-[1.7]">
            Thông tin liên hệ
          </h2>
          <div className="w-full flex flex-row justify-between">
            <div className="basis-[40%] max-w-[40%] text-white font-medium leading-[1.7]">
              Trường Đại học Công nghệ Thông tin - ĐHQG TP.HCM
              <br />
              Khu phố 6, P. Linh Trung, TP. Thủ Đức
              <br />
            </div>
            <div className="basis-[40%] max-w-[40%] flex flex-row justify-end gap-2 text-white text-base font-medium leading-[1.7]">
              <strong>Email:</strong>
              <a
                href="mailto:pandoradev24@gmail.com"
                className="hover:underline"
              >
                pandoradev24@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 w-full h-[1px] bg-white" />
        <div className="py-2 w-full text-center text-white text-[1.25rem] font-semibold">
          © 2024 by PANDORADEV. GVHD: ThS. Tạ Việt Phương
        </div>
      </div>
    </div>
  );
};

export default Footer;
