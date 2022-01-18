import React from "react";
import TextField from "@mui/material/TextField";

const TextInput = ({ label = "", ...otherProperties }) => {
  return (
    <TextField
      label={label}
      variant="standard"
      size="small"
      fullWidth
      {...otherProperties}
    />
  );
};

export default TextInput;
