/* eslint-disable no-unused-vars */
import { CsvToHtmlTable } from "react-csv-to-table";
import { customers_csv } from "../../dummy/customers";
import { categories_csv } from "../../dummy/categories";
import { employees_csv } from "../../dummy/employees";
import { shippers_csv } from "../../dummy/shippers";
import { suppliers_csv } from "../../dummy/suppliers";

export default function OutputWindow(props) {
  let data;
  switch (props.queriedTable) {
    case "customers":
      data = customers_csv;
      break;
    case "categories":
      data = categories_csv;
      break;
    case "employees":
      data = employees_csv;
      break;
    case "shippers":
      data = shippers_csv;
      break;
    case "suppliers":
      data = suppliers_csv;
      break;
    default:
      data = "😕 No data found!";
  }
  return (
    <>
      <div className="w-11/12 mx-auto overflow-scroll">
        <h1 className="font-bold text-xl my-5">Output</h1>
        <CsvToHtmlTable
          tableClassName="w-full rounded-md"
          data={data}
          hasHeader={true}
          csvDelimiter=","
        />
      </div>
    </>
  );
}
