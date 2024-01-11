import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4">h4 Heading</Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>
      <br />

      {/* h6 variants */}
      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle2">subtitle2</Typography>
      <br />

      {/* Body text (p tag) */}
      {/* body1 is default variant*/}
      <Typography variant="body1" gutterBottom>
        Body variant 1. Lorem ipsum dolor sit, amet consectetur adipisicing
        elit. Possimus voluptate dolor facilis alias. Voluptate illo tenetur
        labore ratione. Veritatis, praesentium! Suscipit voluptatibus ut illo
        voluptates doloremque nostrum eveniet, quis eius.
      </Typography>

      <Typography variant="body2">
        Body variant 2. Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Non officiis minus aperiam beatae in repudiandae. Id eos dicta
        quam voluptatibus, doloremque nam quisquam possimus dignissimos aut.
        Quis quam officia dicta.
      </Typography>

      {/* Customising semantics */}
      <Typography variant="h6" component="h1" gutterBottom>
        h1 tag styled as h6
      </Typography>
    </div>
  );
};
export default MuiTypography;
