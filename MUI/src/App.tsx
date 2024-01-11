import { Stack } from "@mui/material";

import MuiTextField from "@components/MuiTextField";
import MuiButton from "./components/MuiButton";
import MuiTypography from "./components/MuiTypography";
import MuiSelect from "@components/MuiSelect";
import MuiRadioButton from "@components/MuiRadioButton";

function App() {
  return (
    <Stack spacing={2}>
      <MuiTypography />

      <MuiButton />

      <MuiTextField />

      <MuiSelect />

      <MuiRadioButton />
    </Stack>
  );
}

export default App;
