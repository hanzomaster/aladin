import type { NextPage } from "next";
import { useRef, useState } from "react";
import SidebarAccount from "../components/SidebarAccount";

const Account: NextPage = () => {
  // dynamic handle focus on input
  const inputRef = useRef<HTMLInputElement>(null);
  const [enable, setEnable] = useState(false);
  let showSaveBtn = false;

  const handleFocus = () => {
    setEnable(true);
    showSaveBtn = true;
    inputRef.current?.focus(); // focus on input
    // set enable to true
  };

  return (
    <div className="h-[100vh] w-full ">
      {/* Navbar */}

      {/* Content */}
      <div>
        <div className=" mt-32 flex h-[600px] border-4 px-10">
          <SidebarAccount />
          {/* main */}
          <div className="w-full">
            <header className="border-b-2 pl-2 leading-10">
              <h1 className="text-[1.75rem] font-semibold ">Hồ sơ của tôi</h1>
              <p className="text-[1.2rem] font-normal">
                Quản lí thông tin hồ sơ để bảo vệ tài khoản của bạn
              </p>
            </header>

            <main className="pl-32 pr-[400px] text-[1rem]">
              <div className="my-5">
                <label className="my-5" htmlFor="email">
                  Email
                </label>
                <input
                  className="h-[40px] w-full rounded-md border-2"
                  type="email"
                  value={"20020420@vnu.edu.vn"}
                  disabled
                />
              </div>
              <div className="my-5">
                <label className="my-5" htmlFor="name">
                  Họ tên
                  <button className="ml-2 text-[#0070f3]" onClick={handleFocus}>
                    Thay đổi
                  </button>
                </label>
                <input
                  className="h-[40px] w-full rounded-md border-2"
                  type="text"
                  value={"Huyen"}
                  ref={inputRef}
                  disabled={!enable}
                />
              </div>
              <div className="my-5">
                <label className="my-5" htmlFor="phone">
                  Số điện thoại
                  {/* button to set focus to the input */}
                  <button className="ml-2 text-[#0070f3]" onClick={handleFocus}>
                    Thay đổi
                  </button>
                </label>
                <input
                  className="h-[40px] w-full rounded-md border-2"
                  type="text"
                  value={"012345678"}
                  ref={inputRef}
                  disabled={!enable}
                />
              </div>
              <div className="my-5">
                <label className="my-5 mr-10" htmlFor="gender">
                  Giới tính
                </label>

                <input className="mr-2" type="radio" id="male" name="gender" value="male" />
                <label className="mr-10" htmlFor="male">
                  Nam
                </label>
                <input className="mr-2" type="radio" id="female" name="gender" value="female" />
                <label className="mr-10" htmlFor="css">
                  Nữ
                </label>
                <input className="mr-2" type="radio" id="other" name="gender" value="other" />
                <label className="mr-10" htmlFor="other">
                  Khác
                </label>
              </div>

              <div>
                <label className="my-5" htmlFor="birthday">
                  Ngày sinh
                </label>
                <input
                  className="h-[40px] w-full rounded-md border-2"
                  type="date"
                  value={"2002-04-20"}
                />
              </div>

              {showSaveBtn && (
                <button className="my-10 h-[50px] w-full rounded-md border-2 bg-[#da291c] text-xl font-medium uppercase text-white">
                  Lưu
                </button>
              )}
            </main>
          </div>
        </div>
      </div>

      {/* Footer */}
    </div>
  );
};

export default Account;
