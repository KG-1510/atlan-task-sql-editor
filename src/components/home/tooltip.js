export default function Tooltip({ setShowTooltip }) {
  return (
    <>
      <div className="p-4 bg-green-200 w-11/12 mx-auto my-4 rounded-md">
        <p>
          Hey There! Welcome to Online SQL Editor! The{" "}
          <a
            target="_blank"
            className="text-blue-500"
            rel="noopener noreferrer"
            href="https://github.com/graphql-compose/graphql-compose-examples/tree/master/examples/northwind/data/csv"
          >
            tables
          </a>{" "}
          pre-loaded are{" "}
          <code>categories, customers, employees, shippers, suppliers</code>
          <br />
          Try out a command, like <code>SELECT * FROM customers;</code>
          <br />
          Have fun and enjoy! 🥳
        </p>
        <div className="flex justify-end w-full">
          <button
            onClick={() => setShowTooltip(false)}
            className="p-2 bg-green-500 rounded-lg hover:bg-opacity-90"
          >
            Got It!
          </button>
        </div>
      </div>
    </>
  );
}
