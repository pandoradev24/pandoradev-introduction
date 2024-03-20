import React from "react";
import { Reveal } from "../components/Reveal";

const Contract = () => {
  return (
    <div className="py-24 w-full">
      <div className="mx-auto w-full max-w-[90rem]">
        <h1 className="py-12 text-center text-[#333] text-[2.25rem] font-black uppercase">
          Hợp đồng thành lập nhóm
        </h1>
        <iframe
          src="https://drive.google.com/file/d/1klxIC4cAkjHEvTPJMrcjuJ0FKSqp8InC/preview"
          width="640"
          height="580"
          allow="autoplay"
          loading="eager"
          className="mx-auto mb-4 border-solid border-[#333] border-[0.25rem]"
        ></iframe>
        <div className="mx-auto basis-[66.66%] max-w-[66.66%]">
          <Reveal>
            <div className="py-4 flex flex-col gap-4">
              <h2 className="text-[#367E89] text-[2rem] font-black">
                1. Nguyên tắc làm việc
              </h2>
              <ul className="list-disc list-outside text-[#333] text-[1.25rem] text-justify font-semibold leading-[1.7] flex flex-col gap-y-2">
                <li>
                  Giao tiếp với các thành viên trong nhóm một cách có hiệu quả:
                  luôn lắng nghe và truyền đạt ý kiến một cách rõ ràng, sử dụng
                  từ ngữ tích cực và mang tính xây dựng đến tránh gây hiểu lầm.
                </li>
                <li>Chủ động cập nhật thông tin và tiến độ công việc.</li>
                <li>
                  Hỗ trợ việc chia sẻ thông tin, kinh nghiệm và kiến thức giữa
                  các thành viên nhóm.
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div className="py-4 flex flex-col gap-4">
              <h2 className="text-[#367E89] text-[2rem] font-black">
                2. Kế hoạch họp bàn công việc
              </h2>
              <ul className="list-disc list-outside text-[#333] text-[1.25rem] text-justify font-semibold leading-[1.7] flex flex-col gap-y-2">
                <li>
                  Các thành viên phải tự đảm bảo đến lớp thực hành đầy đủ, tiến
                  hành phân chia công việc ngay sau mỗi buổi học.
                </li>
                <li>
                  Trong quá trình hoàn thiện bài làm, nếu gặp nhiều khó khăn,
                  các thành viên trong nhóm có thể đề xuất thêm một buổi họp
                  online vào tối thứ bảy ở Google Meet.
                </li>
                <li>Chủ động cập nhật thông báo từ nhóm qua Messenger.</li>
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div className="py-4 flex flex-col gap-4">
              <h2 className="text-[#367E89] text-[2rem] font-black">
                3. Quy tắc thưởng và phạt
              </h2>
              <p className="text-[#333] text-[1.5rem] font-bold">
                <strong>{"a) Quy tắc thưởng"}</strong>
              </p>
              <ul className="list-disc list-outside text-[#333] text-[1.25rem] text-justify font-semibold leading-[1.7] flex flex-col gap-y-2">
                <li>
                  Hoàn thành tốt công việc được phân công xuyên suốt quá trình
                  làm bài.
                </li>
                <li>Có những đóng góp lớn, mang tính xây dựng cho nhóm.</li>
                <li>
                  <strong>Hình thức thưởng: </strong>Một cái bánh trung thu đến
                  từ Bảo Hoàng.
                </li>
              </ul>
              <p className="mt-1 text-[#333] text-[1.5rem] font-bold">
                <strong>{"b) Quy tắc phạt"}</strong>
              </p>
              <ul className="list-disc list-outside text-[#333] text-[1.25rem] text-justify font-semibold leading-[1.7] flex flex-col gap-y-2">
                <li>
                  Vi phạm một trong những nguyên tắc làm việc nhóm đã đề ra.
                </li>
                <li>
                  <strong>Hình thức phạt: </strong>Cảnh cáo, trừ điểm, báo cáo
                  với giáo viên, loại ra khỏi nhóm.
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div className="py-4 flex flex-col gap-4">
              <h2 className="text-[#367E89] text-[2rem] font-black">
                4. Đánh giá thành viên
              </h2>
              <ul className="list-disc list-outside text-[#333] text-[1.25rem] text-justify font-semibold leading-[1.7] flex flex-col gap-y-2">
                <li>
                  Nhóm trưởng sẽ tạo form đánh giá cá nhân ở Google biểu mẫu.
                  Các thành viên sẽ nhận được nó vào tối Chủ nhật tuần trước
                  deadline. Mỗi thành viên sẽ tự đánh giá mức độ hoàn thành công
                  việc của chính bản thân, đồng thời đánh giá mức độ hoàn thành
                  công việc của những thành viên khác.
                </li>
                <li>
                  <div className="flex flex-col">
                    <p>Các mức đánh giá (theo số lượng ngôi sao):</p>
                    <ul className="ml-6 mt-2 text-[#333] text-[1.25rem] text-justify font-semibold leading-[1.7] flex flex-col gap-y-2">
                      <li>
                        <div className="flex flex-row items-center">
                          5
                          <span>
                            <img
                              src="/assets/star.svg"
                              alt=""
                              loading="eager"
                              className="size-[1.3rem]"
                            />
                          </span>
                          : Chủ động hoàn thành công việc ở mức xuất sắc, có
                          những đóng góp nổi trội cho đồ án.
                        </div>
                      </li>
                      <li>
                        <div className="flex flex-row items-center">
                          4
                          <span>
                            <img
                              src="/assets/star.svg"
                              alt=""
                              loading="eager"
                              className="size-[1.3rem]"
                            />
                          </span>
                          : Hoàn thành tốt công việc. đóng góp tốt cho bài làm.
                        </div>
                      </li>
                      <li>
                        <div className="flex flex-row items-center">
                          3
                          <span>
                            <img
                              src="/assets/star.svg"
                              alt=""
                              loading="eager"
                              className="size-[1.3rem]"
                            />
                          </span>
                          : Hoàn thành vừa đủ công việc, có nhiều thiếu sót
                          trong nội dung, bài làm.
                        </div>
                      </li>
                      <li>
                        <div className="flex flex-row items-center">
                          2
                          <span>
                            <img
                              src="/assets/star.svg"
                              alt=""
                              loading="eager"
                              className="size-[1.3rem]"
                            />
                          </span>
                          : Hoàn thành chưa đủ công việc.
                        </div>
                      </li>
                      <li>
                        <div className="flex flex-row items-center">
                          1
                          <span>
                            <img
                              src="/assets/star.svg"
                              alt=""
                              loading="eager"
                              className="size-[1.3rem]"
                            />
                          </span>
                          : Chưa hoàn thành công việc của mình.
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Contract;
