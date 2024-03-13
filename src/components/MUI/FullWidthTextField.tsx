// @ts-check
import TextField from "@mui/material/TextField";

interface FullWidthTextField {
  labelName: string;
  required: string;
}

export default function FullWidthTextField(props: FullWidthTextField) {
  return (
    <>
      <label htmlFor="" className={`${props.required} fs-6 font-bold`}>
        {props.labelName}
      </label>
      <TextField fullWidth label="fullWidth" id="fullWidth" size="small" />
    </>
  );
}
