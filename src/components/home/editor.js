import AceEditor from "react-ace";

import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-twilight";
import { BsFillPlayCircleFill } from "react-icons/bs";

export default function Editor() {
  function onChange(newValue) {
    console.log("Editor Value: ", newValue);
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center mx-auto my-8 w-11/12 rounded-lg">
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
          value="Select * from customers;"
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
          <button className="flex flex-row item-center justify-center bg-green-600 hover:bg-opacity-90 text-xl font-bold p-4 rounded-lg text-white">
            <BsFillPlayCircleFill className="mx-2 mt-1" />
            Run Query
          </button>
        </div>
      </div>
    </>
  );
}
