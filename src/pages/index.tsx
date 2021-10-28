import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FormEventHandler, useRef, useState } from "react";
import FileUpload from "../components/FileUpload";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const schoolSheetFile = useRef<HTMLInputElement>(null);

  const [schoolSheetFiles, setSchoolSheetFiles] = useState<FileList | null>();

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.info(schoolSheetFiles);
  };

  return (
    <main className="container">
      <div className={styles.form_container}>
        <div className="row">
          <h1 className="mb-4">Diamond Taxi Shool sheet upload</h1>
        </div>

        <form onSubmit={handleFormSubmit}>
          <div className="row">
            <div className="col-9">
              <label htmlFor="formFile" className="form-label">
                Upload the school sheet in XLSX format
              </label>
              <FileUpload
                id="formFile"
                multiple={false}
                fileOnChange={(files) => setSchoolSheetFiles(files)}
              />
            </div>

            <div className="col-3 align-self-end mx-auto d-grid gap-2">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Home;
