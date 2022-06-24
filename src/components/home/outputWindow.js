import { CsvToHtmlTable } from "react-csv-to-table";
import { customers_csv } from "../../dummy/customers";

export default function OutputWindow() {
  return (
    <>
      <div className="w-11/12 mx-auto overflow-scroll">
        <h1 className="font-bold text-xl my-5">Output</h1>
        <CsvToHtmlTable
          tableClassName="w-full rounded-md"
          data={customers_csv}
          hasHeader={true}
          csvDelimiter=","
        />
      </div>
    </>
  );
}
