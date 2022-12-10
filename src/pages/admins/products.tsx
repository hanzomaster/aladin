import * as React from "react";
import AdminLayout from "../../layout/AdminLayout";
const Products = () => {
  const datas = [{
    pcode: "#AC01",
    pname:"Áo croptop",
    type: "áo",
    quantity: 1,
    warehouse_code: "01"
  },
  {
    pcode: "#AC02",
    pname:"Áo Phông",
    type: "áo",
    quantity: 2,
    warehouse_code: "01"
  }

]
  return (
    <>
    <AdminLayout>
        <div className="block w-full overflow-x-auto">
         
          <table className="items-center w-full bg-gray border-collapse">
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Mã sản phẩm
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Tên sản phẩm
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Loại
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Số lượng
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Mã số kho
                </th>
              </tr>
            </thead>

            {datas.map(data => {
              return(
                <>
                <tbody>
                  <tr>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                      {data.pcode}
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {data.pname}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {data.type}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {data.quantity}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                      {data.warehouse_code}
                    </td>
                  </tr>
                </tbody>
                </>
              )
            })}
            ?
          </table>
        </div>
    </AdminLayout>
    </>
  );
};

export default Products;
