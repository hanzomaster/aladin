import { NextPage } from "next";
import Pagination, { postsPerPage } from "../../components/admin/Pagination";
import { useState } from "react";
import UsersList from "../../components/admin/UsersList";
import { trpc } from "../../utils/trpc";
import NavbarAdmin from "../../components/admin/NavbarAdmin";

const Users: NextPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const utils = trpc.useContext();
  const { data } = trpc.user.getAll.useQuery();
  const mutation = trpc.user.toggleStatus.useMutation({
    onSuccess() {
      utils.user.getAll.invalidate();
    },
  });

  const handleActive = (id: string, status: boolean) => {
    mutation.mutate({ id, status });
  };

  // Get current posts to paginate
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data?.slice(firstPostIndex, lastPostIndex);
  return (
    <div className="h-full w-full text-sm md:text-base">
      <NavbarAdmin />
      <main className="relative h-screen px-5 py-10 md:px-10 lg:px-20">
        <h1 className="text-3xl font-medium text-gray-900 ">Users</h1>
        <UsersList usersData={currentPosts} handleActive={handleActive} />

        <Pagination
          totalPosts={data?.length}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </main>
    </div>
  );
};
export default Users;
