import type { AppProps } from "next/app";

import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";

import "../styles/globals.css";

axios.defaults.baseURL = "https://mothercode.herokuapp.com/";

function SchoolSheet({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
export default SchoolSheet;
