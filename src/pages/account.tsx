import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { getSession, useSession } from "next-auth/react";
import { useState } from "react";
import Navbar from "../components/navbar";
import SidebarAccount from "../components/SidebarAccount";
import { useToast } from "../components/Toast";
import { trpc } from "../utils/trpc";

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // check session with next-auth
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/home",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
};

const Account: NextPage = (session) => {
  // dynamic handle focus on input
  const { data: sessionData } = useSession();
  const [name, setName] = useState(sessionData?.user?.name);
  const { add: toast } = useToast();
  const [phone, setPhone] = useState("0");
  const mutation = trpc.user.update.useMutation({
    onSuccess: () => {
      setEnableName(false);
      setEnablePhone(false);
      toast({
        type: "success",
        duration: 2000,
        message: "Sửa đổi thông tin thành công!",
        position: "bottomRight",
      });
    },
  });
  const [enableName, setEnableName] = useState(false);
  const [enablePhone, setEnablePhone] = useState(false);

  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };
  const handlePhoneChange = (event: any) => {
    setPhone(event.target.value);
  };

  const saveButtonClicked = () => {
    mutation.mutate({ dto: { name: name as string, phone: phone } });
  };

  const handleEnableName = () => {
    setEnableName(true);
  };
  const handleEnablePhone = () => {
    setEnablePhone(true);
  };
  return (
    <div className="h-full w-full text-sm md:text-base">
      {/* Navbar */}
      <section>
        <Navbar />
      </section>

      {/* Content */}
      <div className=" p- mx-1 gap-5 py-10">
        <div className="mt-10 flex h-full border-4 px-4 pb-20 lg:px-10">
          <SidebarAccount />
          {/* main */}
          <div className="w-full sm:w-[80%] xl:w-[60%]">
            <header className="h-20 w-full border-b-2 pl-5 ">
              <h1 className="text-xl font-normal sm:text-2xl md:text-3xl ">Hồ sơ của tôi</h1>
              <p className="text-sm font-normal sm:text-base md:text-lg">
                Quản lí thông tin hồ sơ để bảo vệ tài khoản của bạn
              </p>
            </header>

            <main className="px-4 sm:pl-10  md:pl-10 lg:pl-32 lg:pr-[15rem]">
              <div className="my-5">
                <label className="my-5 font-semibold text-gray-500" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full rounded border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:bg-slate-300 lg:text-sm"
                  type="email"
                  value={sessionData?.user?.email}
                  disabled
                />
              </div>
              <div className="my-5">
                <label className="my-5 font-semibold text-gray-500" htmlFor="name">
                  Họ tên
                  <button className="ml-2 text-[#0070f3]" onClick={handleEnableName}>
                    Thay đổi
                  </button>
                </label>
                <input
                  className="w-full rounded border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:bg-slate-300 lg:text-sm"
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  disabled={!enableName}
                />
              </div>
              <div className="my-5">
                <label
                  className="my-5 font-semibold text-gray-500 disabled:bg-slate-300"
                  htmlFor="phone">
                  Số điện thoại
                  {/* button to set focus to the input */}
                  <button className="ml-2 text-[#0070f3]" onClick={handleEnablePhone}>
                    Thay đổi
                  </button>
                </label>
                <input
                  className="w-full rounded border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 disabled:bg-slate-300 lg:text-sm"
                  type="text"
                  onChange={handlePhoneChange}
                  value={phone}
                  disabled={!enablePhone}
                />
              </div>
              <div className="my-5 ">
                <label className="my-5 mr-5 font-semibold text-gray-500 md:mr-10" htmlFor="gender">
                  Giới tính
                </label>

                <div className="flex flex-col md:flex-row">
                  <div>
                    <input className="mr-2" type="radio" id="male" name="gender" value="male" />
                    <label className="mr-5 md:mr-10" htmlFor="male">
                      Nam
                    </label>
                  </div>

                  <div>
                    <input className="mr-2" type="radio" id="female" name="gender" value="female" />
                    <label className="mr-5 md:mr-10" htmlFor="css">
                      Nữ
                    </label>
                  </div>

                  <div>
                    <input className="mr-2" type="radio" id="other" name="gender" value="other" />
                    <label className="mr-5 md:mr-10" htmlFor="other">
                      Khác
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="my-5 font-semibold text-gray-500" htmlFor="birthday">
                  Ngày sinh
                </label>
                <input
                  className="w-full rounded border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 lg:text-sm"
                  type="date"
                  value={"2002-04-20"}
                />
              </div>

              <button
                className=" mt-5 h-12 w-full rounded-lg border-2 bg-[#da291c] text-lg font-medium uppercase  text-white hover:bg-[#cd5a52] active:border-2 active:border-stone-900 active:shadow-lg md:mt-10 md:text-xl"
                onClick={() => saveButtonClicked()}
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
