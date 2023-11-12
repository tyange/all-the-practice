import { useState } from "react";

import Layout from "../components/layouts/Layout";

import classes from "./ReactPdfPracticePage.module.css";
import PdfPreview from "../components/PdfPreview";

export default function ReactPdfPracticePage() {
  const [isNewWindowOpen, setIsNewWindowOpen] = useState(false);

  const toggleNewWindow = () => {
    setIsNewWindowOpen((prevState) => !prevState);
  };

  return (
    <Layout>
      <div className={classes.wrapper}>
        <div>
          <button onClick={toggleNewWindow}>download</button>
        </div>
        {isNewWindowOpen && <PdfPreview />}
      </div>
    </Layout>
  );
}
