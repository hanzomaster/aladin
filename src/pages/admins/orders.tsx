// layout for page

import AdminLayout from "../../layout/AdminLayout";

const Orders = () => {
    
    
    return (
        <AdminLayout>
            <div className="block w-full overflow-x-auto">
         
         <table className="items-center w-full bg-gray border-collapse">
           <thead>
             <tr>
               <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                 Tên khách hàng
               </th>
               <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                 Tên sản phẩm
               </th>
               <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                 Ngày đặt
               </th>
               <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                 Ngày giao
               </th>
               <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                 Trạng thái
               </th>
               <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                 Thành tiền
               </th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                 Hoàng
               </th>
               <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                 Áo
               </td>
               <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                 20/11/2022
               </td>
               <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                 22/11/2022
               </td>
               <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                 Đã giao
               </td>
               <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                 <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                 250 nghìn đồng
               </td>
             </tr>
           </tbody>
         </table>
       </div>
        </AdminLayout>
    )
  };
  
export default Orders;
