import type { NextPage } from "next";
import { useState } from "react";
import SidebarAccount from "../components/SidebarAccount";

const Account: NextPage = () => {
  // dynamic handle focus on input

  const [enableName, setEnableName] = useState(false);
  const [enablePhone, setEnablePhone] = useState(false);

  const handleEnableName = () => {
    setEnableName(true);
  };
  const handleEnablePhone = () => {
    setEnablePhone(true);
  };
  return (
    <div className="h-[100vh] w-full text-sm md:text-base ">
      {/* Navbar */}

      {/* Content */}
      <div>
        <div className="mt-32 flex h-[40em] border-4 px-4 lg:px-10">
          <SidebarAccount />
          {/* main */}
          <div className="w-[60%]">
            <header className="h-20 w-full border-b-2 pl-5 ">
              <h1 className="text-2xl font-normal md:text-3xl ">Hồ sơ của tôi</h1>
              <p className="text-base font-normal md:text-lg">
                Quản lí thông tin hồ sơ để bảo vệ tài khoản của bạn
              </p>
            </header>

            <main className=" pl-10 pr-[5rem]  md:pl-10 lg:pl-32 lg:pr-[15rem]">
              <div className="my-5">
                <label className="my-5" htmlFor="email">
                  Email
                </label>
                <input
                  className="h-10 w-full rounded-md border-2"
                  type="email"
                  value={"20020420@vnu.edu.vn"}
                  disabled
                />
              </div>
              <div className="my-5">
                <label className="my-5" htmlFor="name">
                  Họ tên
                  <button className="ml-2 text-[#0070f3]" onClick={handleEnableName}>
                    Thay đổi
                  </button>
                </label>
                <input
                  className="h-10 w-full rounded-md border-2"
                  type="text"
                  value={"Huyen"}
                  disabled={!enableName}
                />
              </div>
              <div className="my-5">
                <label className="my-5" htmlFor="phone">
                  Số điện thoại
                  {/* button to set focus to the input */}
                  <button className="ml-2 text-[#0070f3]" onClick={handleEnablePhone}>
                    Thay đổi
                  </button>
                </label>
                <input
                  className="h-10 w-full rounded-md border-2"
                  type="text"
                  value={"012345678"}
                  disabled={!enablePhone}
                />
              </div>
              <div className="my-5">
                <label className="my-5 mr-5 md:mr-10" htmlFor="gender">
                  Giới tính
                </label>

                <input className="mr-2" type="radio" id="male" name="gender" value="male" />
                <label className="mr-5 md:mr-10" htmlFor="male">
                  Nam
                </label>
                <input className="mr-2" type="radio" id="female" name="gender" value="female" />
                <label className="mr-5 md:mr-10" htmlFor="css">
                  Nữ
                </label>
                <input className="mr-2" type="radio" id="other" name="gender" value="other" />
                <label className="mr-5 md:mr-10" htmlFor="other">
                  Khác
                </label>
              </div>

              <div>
                <label className="my-5" htmlFor="birthday">
                  Ngày sinh
                </label>
                <input
                  className="h-10 w-full rounded-md border-2"
                  type="date"
                  value={"2002-04-20"}
                  disabled
                />
              </div>

              <button
                className="my-5 h-12 w-full rounded-md border-2 bg-[#da291c] text-lg  font-medium uppercase text-white md:my-10 md:text-xl"
                disabled={!(enableName || enablePhone)}
                hidden={!(enableName || enablePhone)}>
                Lưu
              </button>
            </main>
          </div>
        </div>
      </div>

      {/* Footer */}
    </div>
  );
};

export default Account;
