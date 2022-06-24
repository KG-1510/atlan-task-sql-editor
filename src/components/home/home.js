import { Footer, Navbar } from "../../shared";
import { Editor, OutputWindow } from ".";

export default function HomeComponent() {
  return (
    <>
      <Navbar />
      <Editor />
      <OutputWindow />
      <Footer />
    </>
  );
}
