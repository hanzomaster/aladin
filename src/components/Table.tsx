import React from "react";
import { render } from "react-dom";
import DragImage from "./admin/DragImage";

class Tabel extends React.Component {
  state = {
    rows: [{}],
  };
  handleChange = (idx) => (e) => {
    const { name, value } = e.target;
    const rows = [...this.state.rows];
    rows[idx] = {
      [name]: value,
    };
    this.setState({
      rows,
    });
  };
  handleAddRow = () => {
    const item = {
      code: "",
      s: "",
      m: "",
      l: "",
      xl: "",
    };
    this.setState({
      rows: [...this.state.rows, item],
    });
  };
  handleRemoveSpecificRow = (idx) => () => {
    const rows = [...this.state.rows];
    rows.splice(idx, 1);
    this.setState({ rows });
  };
  render() {
    return (
      <div>
        <table className="w-full">
          <thead className="border-b bg-white">
            <tr>
              <th scope="col" className="px-6 py-4 text-left text-base font-medium text-gray-900">
                #
              </th>
              <th scope="col" className="px-6 py-4 text-left text-base font-medium text-gray-900">
                Mã màu
              </th>
              <th scope="col" className="px-6 py-4 text-left text-base font-medium text-gray-900">
                Ảnh
              </th>
              <th scope="col" className="px-6 py-4 text-left text-base font-medium text-gray-900">
                S
              </th>
              <th scope="col" className="px-6 py-4 text-left text-base font-medium text-gray-900">
                M
              </th>
              <th scope="col" className="px-6 py-4 text-left text-base font-medium text-gray-900">
                L
              </th>
              <th scope="col" className="px-6 py-4 text-left text-base font-medium text-gray-900">
                XL
              </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.rows.map((item, idx) => (
              <tr
                className="border-b bg-white transition duration-300 ease-in-out hover:bg-gray-100"
                key={idx}>
                <td className="whitespace-nowrap px-6 py-4 text-base font-light text-gray-900">
                  {idx + 1}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-base font-light text-gray-900">
                  <input
                    className="h-8 w-16 rounded-sm bg-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-600 hover:bg-white "
                    type="text"
                    name="name"
                    value={this.state.rows[idx].code}
                    onChange={this.handleChange(idx)}
                  />
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-base font-light text-gray-900">
                  <DragImage
                    accept="image/png, image/jpg, image/jpeg, image/pdf"
                    multiple
                    name="pictures"
                  />
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-base font-light text-gray-900">
                  <input
                    className="h-8 w-16 rounded-sm bg-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-600 hover:bg-white "
                    type="number"
                    name="s"
                    value={this.state.rows[idx].s}
                    onChange={this.handleChange(idx)}
                  />
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-base font-light text-gray-900">
                  <input
                    className="h-8 w-16 rounded-sm bg-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-600 hover:bg-white "
                    type="number"
                    name="m"
                    value={this.state.rows[idx].m}
                    onChange={this.handleChange(idx)}
                  />
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-base font-light text-gray-900">
                  <input
                    className="h-8 w-16 rounded-sm bg-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-600 hover:bg-white "
                    type="number"
                    name="l"
                    value={this.state.rows[idx].l}
                    onChange={this.handleChange(idx)}
                  />
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-base font-light text-gray-900">
                  <input
                    className="h-8 w-16 rounded-sm bg-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-600 hover:bg-white  "
                    type="number"
                    name="xl"
                    value={this.state.rows[idx].xl}
                    onChange={this.handleChange(idx)}
                  />
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-base font-light text-gray-900">
                  <button
                    className="btn btn-outline-danger btn-sm rounded-sm bg-red-500"
                    onClick={this.handleRemoveSpecificRow(idx)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="white"
                      className="h-5 w-5">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
          onClick={this.handleAddRow}
          className="btn btn-primary mt-3 flex text-gray-900 hover:text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="ml-2 text-base font-medium ">Thêm màu</span>
        </button>
      </div>
    );
  }
}

export default Tabel;
