import { Box, MenuItem, TextField } from "@mui/material";
import { useState } from "react";

const MuiSelect = () => {
  const [country, setCountry] = useState("");
  const [multipleCountries, setMultipleCountries] = useState<string[]>(["IN"]);

  console.log(
    "🚀 ~ file: MuiSelect.tsx:7 ~ MuiSelect ~ multipleCountries:",
    multipleCountries
  );
  console.log("🚀 ~ file: MuiSelect.tsx:6 ~ MuiSelect ~ country:", country);

  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };

  const handleMultiCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log(
      "🚀 ~ file: MuiSelect.tsx:20 ~ handleMultiCountryChange ~ value:",
      value
    );
    setMultipleCountries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box width="250px">
      {/* TextField as Select */}
      <TextField
        select
        label="Select country"
        value={country}
        onChange={handleCountryChange}
        fullWidth // fullWidth = true, takes the space of the parent else takes the space of the content(fit-content)
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>

      {/* MultiSelect */}
      <TextField
        select
        label="Select multiple countries"
        value={multipleCountries}
        onChange={handleMultiCountryChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        size="small"
        color="secondary"
        helperText="Please select your country"
        error={false}
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
};
export default MuiSelect;
