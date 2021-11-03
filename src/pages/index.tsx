import Axios from "axios";
import type { NextPage } from "next";
import { FormEventHandler, useState } from "react";
import { saveAs } from "file-saver";
import FileUpload from "../components/FileUpload";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
	const [schoolSheetFiles, setSchoolSheetFiles] = useState<FileList | null>();

	const handleFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		console.info(schoolSheetFiles);
		if (schoolSheetFiles) {
			uploadAndMail(schoolSheetFiles?.[0]);
		} else {
			alert("Kindly choose a file to upload");
		}

		const { target } = event;
		(target as HTMLFormElement).reset();
	};

	const uploadAndMail = async (file: File) => {
		const postData = new FormData();
		postData.append("file", file);

		try {
			const pickupResponse = await Axios({
				url: "/email/school/pickup",
				method: "POST",
				data: postData,
				responseType: "blob",
			});

			const dropoffResponse = await Axios({
				url: "/email/school/dropoff",
				method: "POST",
				data: postData,
				responseType: "blob",
			});

			if (pickupResponse.status === 200) {
				saveAs(pickupResponse.data as any, `PICKUP_${Date.now()}.xlsx`);
			}

			if (dropoffResponse.status === 200) {
				saveAs(dropoffResponse.data as any, `DROP_OFF_${Date.now()}.xlsx`);
			}
		} catch (error) {
			console.error("Error:", error);
			alert(`There was an error in uploading the file: ${error}`);
		}
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
