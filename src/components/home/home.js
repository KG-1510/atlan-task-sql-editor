import { Footer, Navbar } from "../../shared";
import { Editor, OutputWindow, Tooltip } from ".";
import { useState } from "react";

export default function HomeComponent() {
  const [queryTableName, setQueryTableName] = useState("customers");
  const [showTooltip, setShowTooltip] = useState(true);
  return (
    <>
      <Navbar />
      {showTooltip && <Tooltip setShowTooltip={setShowTooltip} />}
      <Editor getQueryTable={setQueryTableName} />
      <OutputWindow queriedTable={queryTableName} />
      <Footer />
    </>
  );
}
