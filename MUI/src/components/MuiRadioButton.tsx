import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";

const MuiRadioButton = () => {
  const [expreience, setExpreience] = useState<null | string>(null);

  const handleExperienceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpreience(e.target.value);
  };

  return (
    <Box>
      <FormControl error>
        <FormLabel id="job-experience-group">Years of experience</FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-group"
          row
          value={expreience}
          onChange={handleExperienceChange}
        >
          <FormControlLabel
            control={<Radio size="small" color="secondary" />}
            label="0-2"
            value="0-2"
          />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
        </RadioGroup>
        <FormHelperText error>Required</FormHelperText>
      </FormControl>
    </Box>
  );
};
export default MuiRadioButton;
