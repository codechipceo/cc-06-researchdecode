import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { toolbarPlugin } from "@react-pdf-viewer/toolbar";
import fileurl from "./test.pdf";
import { toast } from "react-toastify";

const PDFviewer = ({ file }) => {
  const toolbarPluginInstance = toolbarPlugin();
  const { renderDefaultToolbar, Toolbar } = toolbarPluginInstance;
  const transform = (slot) => ({
    ...slot,
    Download: () => <></>,
    EnterFullScreen: () => <></>,
    SwitchTheme: () => <></>,
    Print: () => <></>,
  });

  toast.success("Working fine dude");
  toast.error("error notification");
  toast.info("INfo");
  return (
    <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js'>
      <div style={{ height: "750px" }}>
        <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>{" "}
        <Viewer fileUrl={fileurl} plugins={[toolbarPluginInstance]} />
      </div>
    </Worker>
  );
};

export default PDFviewer;