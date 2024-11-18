import { Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { toolbarPlugin } from "@react-pdf-viewer/toolbar";
import { useEffect } from "react";

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

  useEffect(() => {
    console.log(file);
  }, [])
  

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
      <div style={{ height: "750px" }}>
        <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
        <Viewer fileUrl={file} plugins={[toolbarPluginInstance]} />
      </div>
    </Worker>
  );
};

export default PDFviewer;
