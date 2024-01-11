import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;

type FormValues = {
  username: string;
  email: string;
  channel: string;
};

const ManagingFormState = () => {
  renderCount++; // Component does not re-render onChange of any field input

  const form = useForm<FormValues>();

  // Register a field with react-hook-form
  const { register, control, handleSubmit } = form;

  // under the hood -> longer way of implementation
  const { name, ref, onChange, onBlur } = register("username");

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="form-div">
      <h2>Youtube form ( rendered {renderCount / 2} ) </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
        />

        <label htmlFor="email">Email</label>
        {/* Shorter method spread the values returned by register method */}
        <input type="email" id="email" {...register("email")} />

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" {...register("channel")} />

        <input type="submit" />
      </form>

      <DevTool control={control} />
    </div>
  );
};

export default ManagingFormState;
