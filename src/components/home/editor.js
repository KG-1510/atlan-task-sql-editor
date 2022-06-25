/* eslint-disable no-unused-vars */
import AceEditor from "react-ace";
import { useState } from "react";

import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-twilight";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { errorHandler, successHandler } from "../../utils/toastify";

export default function Editor({ getQueryTable }) {
  const [editorValue, setEditorValue] = useState("");
  function onChange(newValue) {
    console.log("Editor Value: ", newValue);
    setEditorValue(newValue);
  }
  function showOutput() {
    console.log("Editor Value: ", editorValue);
    let searchElement = "";

    const DATABASE_TABLES = [
      "customers",
      "categories",
      "employees",
      "shippers",
      "suppliers",
    ];
    const contains = DATABASE_TABLES.some((element) => {
      if (editorValue.includes(element)) {
        searchElement = element;
        successHandler("🥳 Query Executed Successfully!");
        return element;
      } else {
        return "";
      }
    });
    if (searchElement === "") {
      errorHandler("🤔 No table found!");
    }
    getQueryTable(searchElement);
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center mx-auto my-8 w-11/12 rounded-lg">
        <div className="w-full">
          <h1 className="font-bold text-3xl my-2">Editor</h1>
        </div>
        <AceEditor
          id="editor"
          aria-label="editor"
          mode="mysql"
          className="rounded-lg"
          theme="twilight"
          name="editor"
          fontSize={16}
          minLines={15}
          maxLines={10}
          width="100%"
          showPrintMargin={false}
          showGutter
          placeholder="Write your SQL Query Here!"
          editorProps={{ $blockScrolling: true }}
          setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
          }}
          // value={value}
          onChange={onChange}
          showLineNumbers
        />
        <div className="w-full flex justify-end my-4">
          <button
            onClick={() => showOutput()}
            className="flex flex-row item-center justify-center bg-green-600 hover:bg-opacity-90 text-xl font-bold p-4 rounded-lg text-white"
          >
            <BsFillPlayCircleFill className="mx-2 mt-1" />
            Run Query
          </button>
        </div>
      </div>
    </>
  );
}
