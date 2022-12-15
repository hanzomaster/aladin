import { NextPage } from "next";
import Pagination from "../components/Pagination";
import { useEffect, useState } from "react";
import axios from "axios";
import UsersList from "../components/UsersList";
import { trpc } from "../utils/trpc";
export const postsPerPage = 10;

const Users: NextPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const utils = trpc.useContext();
  const { data } = trpc.user.getAll.useQuery();
  const mutation = trpc.user.toggleActive.useMutation({
    onSuccess() {
      utils.user.getAll.invalidate();
    },
  });

  const handleActive = (id: string, status: boolean) => {
    mutation.mutate({ id, status });
  };
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data?.slice(firstPostIndex, lastPostIndex);
  return (
    <div className="relative h-screen px-5 py-10 md:px-10 lg:px-20">
      <h1 className="text-3xl font-medium text-gray-900 ">Users</h1>
      <UsersList usersData={currentPosts} handleActive={handleActive} />
      <Pagination
        totalPosts={data?.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};
export default Users;
