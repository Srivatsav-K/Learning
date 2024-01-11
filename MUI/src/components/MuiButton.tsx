import { useState } from "react";
import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
} from "@mui/icons-material";

const MuiButton = () => {
  const [formats, setFormats] = useState<string[]>([]);
  console.log("🚀 ~ file: MuiButton.tsx:15 ~ MuiButton ~ formats:", formats);

  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string[]
  ) => {
    setFormats(updatedFormats);
  };

  return (
    <Stack spacing={4}>
      {/* Variants */}
      <Stack direction="row" spacing={2}>
        {/* Card footer, information pop-up etc*/}
        <Button variant="text" onClick={() => alert("Clicked")}>
          Text
        </Button>

        {/* Primary actions -> Login, Forms etc */}
        <Button variant="contained">contained</Button>

        {/* Secondary actions -> Cancel, Go back */}
        <Button variant="outlined">outlined</Button>
      </Stack>

      {/* Link button */}
      <Stack direction="row">
        {/* Semantically conveerted into an a tag */}
        <Button href="https://mui.com/" target="_blank">
          Link button
        </Button>
      </Stack>

      {/* Colors */}
      <Stack direction="row" spacing={2}>
        <Button color="primary" variant="contained">
          primary
        </Button>

        <Button color="secondary" variant="contained">
          secondary
        </Button>

        <Button color="error" variant="contained">
          error
        </Button>

        <Button color="warning" variant="contained">
          warning
        </Button>

        <Button color="info" variant="contained">
          info
        </Button>

        <Button color="success" variant="contained">
          success
        </Button>
      </Stack>

      {/* Size (display="block" in Stack as without it sizing is affected in a flexbox) */}
      <Stack direction="row" display="block" spacing={2}>
        <Button variant="contained" size="small">
          small
        </Button>
        <Button variant="contained" size="medium">
          medium
        </Button>
        <Button variant="contained" size="large">
          large
        </Button>
      </Stack>

      {/* Icon buttons */}
      <Stack direction="row" spacing={2} display="block">
        <Button startIcon={<SendIcon />} variant="contained">
          send
        </Button>

        <Button endIcon={<SendIcon />} variant="contained">
          send
        </Button>

        <IconButton aria-label="send" color="secondary" size="small">
          <SendIcon />
        </IconButton>
      </Stack>

      {/* Cosmetic props */}
      <Stack direction="row" spacing={2}>
        <Button variant="contained" disableElevation>
          disable Elevation
        </Button>
        <Button variant="contained" disableRipple>
          disable ripple
        </Button>
      </Stack>

      {/* Button Group */}
      <Stack direction="row">
        <Typography variant="subtitle2">Button Group : </Typography>
        <ButtonGroup
          orientation="vertical"
          variant="outlined"
          size="small"
          color="secondary"
          aria-label="alignment button group"
        >
          <Button>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      {/* ToggleButtonGroup */}
      <Stack direction="row">
        <Typography variant="subtitle2">ToggleButtonGroup : </Typography>

        <ToggleButtonGroup
          value={formats}
          onChange={handleFormatChange}
          aria-label="text formatting"
          size="medium"
          color="success"
          orientation="horizontal"
          exclusive={false} // can select only one if true
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBold />
          </ToggleButton>

          <ToggleButton value="italic" aria-label="italic">
            <FormatItalic />
          </ToggleButton>

          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlined />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
export default MuiButton;
