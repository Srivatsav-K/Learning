import { useState } from "react";
import { IconButton, InputAdornment, Stack, TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const MuiTextField = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Stack spacing={2}>
      {/* Variants */}
      <Stack direction="row" spacing={2}>
        <TextField label="Variant outlined" variant="outlined" />
        <TextField label="Variant filled" variant="filled" />
        <TextField label="Variant standard" variant="standard" />
      </Stack>

      {/* Color & Size */}
      <Stack direction="row" spacing={2}>
        <TextField
          label="Small secondary color"
          size="small"
          color="secondary"
          variant="outlined"
        />
      </Stack>

      {/* Decorations */}
      <Stack direction="row" spacing={2}>
        {/* Requried */}
        <TextField label="Form input" required />

        {/* Helper text & disabled */}
        <TextField
          label="Password"
          type="password"
          required
          helperText="Do not share password"
          disabled={false}
        />

        {/* Read only */}
        <TextField
          label="Read only"
          value="Read only"
          InputProps={{ readOnly: true }}
        />
      </Stack>

      {/* Input Adornment */}
      <Stack direction="row" spacing={2}>
        {/* TextField component is a wrapper around the Input component. To modify the Input component we use InputProps */}
        <TextField
          label="Amount"
          type="number"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />

        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
            inputProps: { min: 0, max: 1000 },
            type: "number",
          }}
        />

        <TextField
          label="Password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          error={!password}
          helperText={!password ? "Required" : "Enter password"}
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={toggleShowPassword}>
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
};
export default MuiTextField;
