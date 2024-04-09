import clsx from "clsx";
import React from "react";
import { Reveal } from "../common/Reveal";

const members = [
  {
    studentId: "22520495",
    name: "Trần Thị Kim Huệ",
    role: "Trưởng nhóm",
    strengths: "Có trách nhiệm, nhiệt huyết với công việc",
    weaknesses: "Đôi khi hơi thiếu kiên nhẫn",
    avatar: "/assets/hue.png",
  },
  {
    studentId: "22520549",
    name: "Lê Quốc Huy",
    role: "Phó nhóm",
    strengths: "Khả năng giải quyết vấn đề tốt, nhanh nhẹn.",
    weaknesses: "",
    avatar: "/assets/huy.png",
  },
  {
    studentId: "22520478",
    name: "Trần Nguyễn Bảo Hoàng",
    role: "Thư ký",
    strengths: "Rất kĩ lưỡng, cầu toàn trong từng phân đoạn nhỏ",
    weaknesses: "Ôm đồm nhiều việc",
    avatar: "/assets/hoang.png",
  },
  {
    studentId: "22520082",
    name: "Trần Phạm Trúc Anh",
    role: "Thành viên",
    strengths: "Có tài năng hội họa, trang trí",
    weaknesses: "Kỹ năng sắp xếp, thiết kế còn chưa tốt",
    avatar: "/assets/anh.png",
  },
  {
    studentId: "22521255",
    name: "Nguyễn Thái Sơn",
    role: "Thành viên",
    strengths: "Tinh thần cầu tiến, ham học hỏi",
    weaknesses: "Khá ít nói",
    avatar: "",
  },
];

const AboutUs = () => {
  return (
    <div className="py-24 w-full">
      <div className="mx-auto w-full max-w-[90rem]">
        <h1 className="py-12 text-center text-[#333] text-[1.75rem] ssm:text-[2.25rem] font-extrabold uppercase">
          Giới thiệu thành viên nhóm
        </h1>
        <div className="flex flex-col gap-y-16 md:gap-y-8">
          {members.map((member, index) => (
            <MemberCard key={index} index={index} data={member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

const MemberCard = ({ index, data }) => {
  return (
    <Reveal>
      <div
        className={clsx(
          "px-[8%] w-full flex items-center justify-center gap-x-8 xl:gap-x-16 gap-y-4",
          index % 2 === 0
            ? "flex-col md:flex-row"
            : "flex-col md:flex-row-reverse"
        )}
      >
        <div className="xl:p-12 basis-[90%] max-w-[90%] ssm:basis-[66.67%] ssm:max-w-[66.67%] md:basis-[30%] md:max-w-[30%] min-h-[15rem] flex items-center">
          <img
            src={data.avatar}
            alt="avatar"
            loading="lazy"
            className="w-full"
          />
        </div>
        <div className="lg:w-max text-[#333]">
          <h3 className="text-center text-[2.25rem] font-bold leading-[1.4]">
            {data.name}
          </h3>
          <div className="mt-2 flex flex-col gap-1 text-[1.25rem] font-medium">
            <p>
              <strong>MSSV:</strong> {data.studentId}
            </p>
            <p className="tracking-[-0.025rem]">
              <strong>Vai trò:</strong> {data.role}
            </p>
            <p>
              <strong>Điểm mạnh:</strong> {data.strengths}
            </p>
            <p>
              <strong>Điểm yếu:</strong> {data.weaknesses}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
};
