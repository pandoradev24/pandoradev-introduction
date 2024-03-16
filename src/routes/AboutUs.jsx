import clsx from "clsx";
import React from "react";

const members = [
  {
    studentId: "22520495",
    name: "Trần Thị Kim Huệ",
    role: "Trưởng nhóm",
    strengths: "",
    weaknesses: "",
    avatar: "",
  },
  {
    studentId: "22520478",
    name: "Trần Nguyễn Bảo Hoàng",
    role: "Thành viên",
    strengths: "",
    weaknesses: "",
    avatar: "",
  },
  {
    studentId: "22520082",
    name: "Trần Phạm Trúc Anh",
    role: "Thành viên",
    strengths: "",
    weaknesses: "",
    avatar: "",
  },
  {
    studentId: "22520549",
    name: "Lê Quốc Huy",
    role: "Thành viên",
    strengths: "",
    weaknesses: "",
    avatar: "/assets/huy.png",
  },
  {
    studentId: "22521255",
    name: "Nguyễn Thái Sơn",
    role: "Thành viên",
    strengths: "",
    weaknesses: "",
    avatar: "",
  },
];

const AboutUs = () => {
  return (
    <div className="py-24 w-full">
      <div className="mx-auto w-full max-w-[90rem]">
        <h1 className="py-12 text-center text-[#333] text-[2.25rem] font-extrabold uppercase">
          Giới thiệu thành viên nhóm
        </h1>
        <div className="flex flex-col gap-4">
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
    <div
      className={clsx(
        "w-full flex items-center justify-center gap-16",
        index % 2 === 0 ? "flex-row" : "flex-row-reverse"
      )}
    >
      <div className="p-12 basis-[30%] max-w-[30%] min-h-[15rem]">
        <img src={data.avatar} alt="avatar" className="w-full" />
      </div>
      <div className="w-max text-[#333]">
        <h3 className="text-center text-[2.25rem] font-bold leading-[1.4]">
          {data.name}
        </h3>
        <div className="mt-2 flex flex-col gap-1 text-[1.25rem] font-medium">
          <p>MSSV: {data.studentId}</p>
          <p className="tracking-[-0.025rem]">Vai trò: {data.role}</p>
          <p>Điểm mạnh: {data.strengths}</p>
          <p>Điểm yếu: {data.weaknesses}</p>
        </div>
      </div>
    </div>
  );
};
