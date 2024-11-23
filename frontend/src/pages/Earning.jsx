import React from "react";
import Earning_card from "../components/Earning_card";

const Earning = () => {
  return (
    <>
      <div className="earning_page">
        <div className="earning_cards flex justify-content-between align-content-center gap-4 flex-wrap">
          <Earning_card title={"Revenue"} revenue={"3425"} percentage={"10"} icon={"pi pi-credit-card"} />
          <Earning_card title={"Expense"} revenue={"345"} percentage={"15"} icon={"pi pi-money-bill"} />
          <Earning_card title={"Profit"} revenue={"2768"} percentage={"26"} icon={"pi pi-dollar"} />
        </div>

        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
  <h2 className="text-xl font-semibold mb-4">Earnings List</h2>
  <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm">
    <thead>
      <tr className="bg-gray-200 text-gray-700">
        <th className="py-2 px-4 border-b">Id</th>
        <th className="py-2 px-4 border-b">Date</th>
        <th className="py-2 px-4 border-b">Account Name</th>
        <th className="py-2 px-4 border-b">Account Number</th>
        <th className="py-2 px-4 border-b">Account Type</th>
        <th className="py-2 px-4 border-b">Status</th>
        <th className="py-2 px-4 border-b">Order Id</th>
        <th className="py-2 px-4 border-b">Amount</th>
      </tr>
    </thead>
    <tbody>
      <tr className="hover:bg-gray-100 transition duration-200">
        <td className="py-2 px-4 border-b">
          <span className="font-medium">1</span>
        </td>
        <td className="py-2 px-4 border-b">
          <span>12/07/2024</span>
        </td>
        <td className="py-2 px-4 border-b">
          <span>Mehroz</span>
        </td>
        <td className="py-2 px-4 border-b">
          <span>1234567890</span>
        </td>
        <td className="py-2 px-4 border-b">
          <span>Easypaisa</span>
        </td>
        <td className="py-2 px-4 border-b">
          {/* pending complete canceled */}
          <span className={`status pending text-yellow-600 font-semibold`}>pending</span>
        </td>
        <td className="py-2 px-4 border-b">
          <span>12345</span>
        </td>
        <td className="py-2 px-4 border-b">
          <span className="font-medium">Rs. 23456</span>
        </td>
      </tr>
      <tr className="hover:bg-gray-100 transition duration-200">
        <td className="py-2 px-4 border-b">
          <span className="font-medium">1</span>
        </td>
        <td className="py-2 px-4 border-b">
          <span>12/07/2024</span>
        </td>
        <td className="py-2 px-4 border-b">
          <span>Mehroz</span>
        </td>
        <td className="py-2 px-4 border-b">
          <span>1234567890</span>
        </td>
        <td className="py-2 px-4 border-b">
          <span>Easypaisa</span>
        </td>
        <td className="py-2 px-4 border-b">
          {/* pending complete canceled */}
          <span className={`status pending text-yellow-600 font-semibold`}>pending</span>
        </td>
        <td className="py-2 px-4 border-b">
          <span>12345</span>
        </td>
        <td className="py-2 px-4 border-b">
          <span className="font-medium">Rs. 23456</span>
        </td>
      </tr>
      <tr className="hover:bg-gray-100 transition duration-200">
        <td className="py-2 px-4 border-b">
          <span className="font-medium">1</span>
        </td>
        <td className="py-2 px-4 border-b">
          <span>12/07/2024</span>
        </td>
        <td className="py-2 px-4 border-b">
          <span>Mehroz</span>
        </td>
        <td className="py-2 px-4 border-b">
          <span>1234567890</span>
        </td>
        <td className="py-2 px-4 border-b">
          <span>Easypaisa</span>
        </td>
        <td className="py-2 px-4 border-b">
          {/* pending complete canceled */}
          <span className={`status pending text-yellow-600 font-semibold`}>pending</span>
        </td>
        <td className="py-2 px-4 border-b">
          <span>12345</span>
        </td>
        <td className="py-2 px-4 border-b">
          <span className="font-medium">Rs. 23456</span>
        </td>
      </tr>
      <tr className="hover:bg-gray-100 transition duration-200">
        <td className="py-2 px-4 border-b">
          <span className="font-medium">1</span>
        </td>
        <td className="py-2 px-4 border-b">
          <span>12/07/2024</span>
        </td>
        <td className="py-2 px-4 border-b">
          <span>Mehroz</span>
        </td>
        <td className="py-2 px-4 border-b">
          <span>1234567890</span>
        </td>
        <td className="py-2 px-4 border-b">
          <span>Easypaisa</span>
        </td>
        <td className="py-2 px-4 border-b">
          {/* pending complete canceled */}
          <span className={`status pending text-yellow-600 font-semibold`}>pending</span>
        </td>
        <td className="py-2 px-4 border-b">
          <span>12345</span>
        </td>
        <td className="py-2 px-4 border-b">
          <span className="font-medium">Rs. 23456</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
      </div>
    </>
  );
};

export default Earning;
