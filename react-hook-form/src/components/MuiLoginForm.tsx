import { TextField, Stack, Button, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type LoginForm = {
  email?: string;
  password?: string;
};

const MuiLoginForm = () => {
  const form = useForm<LoginForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { register, handleSubmit, formState, control } = form;
  const { errors } = formState;

  const onSubmit = (data: LoginForm) => {
    console.log(data);
  };

  return (
    <>
      <Typography variant="h4" gutterBottom>
        Login form
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Stack spacing={2} width={400}>
          <TextField
            type="email"
            label="Email"
            {...register("email", {
              required: "Required",
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            type="password"
            label="Password"
            {...register("password", {
              required: "Required",
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <Button variant="contained" type="submit">
            Login
          </Button>
        </Stack>
      </form>
      <DevTool control={control} />
    </>
  );
};
export default MuiLoginForm;
