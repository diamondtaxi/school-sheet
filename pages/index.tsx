import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <main className="container">
      <div className={styles.form_container}>
        <div className="row">
          <h1 className="mb-4">Diamond Taxi Shool sheet upload</h1>
        </div>

        <form>
          <div className="row">
            <div className="col-9">
              <label htmlFor="formFile" className="form-label">
                Upload the school sheet in XLSX format
              </label>
              <input className="form-control" type="file" id="formFile" />
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
