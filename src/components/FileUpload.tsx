import { ChangeEventHandler, FC } from "react";

interface FileUploadProps {
  id: string;
  multiple?: boolean;
  fileOnChange(files: FileList | null): any;
}

const FileUpload: FC<FileUploadProps> = ({ id, multiple, fileOnChange }) => {
  const handleFileOnChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    fileOnChange(event.target.files);
  };

  return (
    <input
      className="form-control"
      type="file"
      id={id}
      multiple={multiple}
      onChange={handleFileOnChange}
    />
  );
};

export default FileUpload;
