import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;

type FormValues = {
  username: string;
  email: string;
  channel: string;
};

const Validation1 = () => {
  renderCount++; // Component does not re-render onChange of any field input

  const form = useForm<FormValues>({
    mode: "onSubmit", // when to trigger validations
    // zod integration (https://www.npmjs.com/package/@hookform/resolvers/v/1.3.8#zod)
  });

  // Register a field with react-hook-form
  // trigger() -> manually trigger validation
  const { register, control, handleSubmit, formState, trigger } = form;

  //!Error
  const { errors } = formState;

  // Validations go as 2nd arg to register function
  const { name, ref, onChange, onBlur } = register("username", {
    required: "Username is required",
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="form-div">
      <h2>Youtube form ( rendered {renderCount / 2} ) </h2>

      {/* noValidate prevents browser validation */}
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name={name}
            ref={ref}
            onChange={onChange}
            onBlur={onBlur}
          />
          <span className="error">{errors.username?.message}</span>
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          {/* Shorter method spread the values returned by register method */}
          <input
            type="email"
            id="email"
            {...register("email", {
              // One more variant of required validation written as an object instead of string
              required: {
                value: true,
                message: "Email is required",
              },

              pattern: {
                value:
                  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                message: "Invalid email format",
              },

              validate: (fieldValue) => {
                if (fieldValue !== "admin@example.com") {
                  return undefined;
                } else {
                  return "Enter a different email address";
                }

                //? Can also be written like this
                return (
                  fieldValue !== "admin@example.com" ||
                  "Enter a different email address"
                );
              },
            })}
          />
          <span className="error">{errors.email?.message}</span>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            {...register("channel", {
              required: "Channel name is required",

              // Validate can also be a object with multiple validators
              validate: {
                alreadyTaken: (fieldValue) => {
                  if (fieldValue === "john") {
                    return "Channel already taken";
                  } else {
                    return;
                  }
                },

                notBlackListed: (fieldValue) => {
                  return (
                    !["x", "y", "z"].includes(fieldValue) ||
                    "This channel is blacklisted"
                  );
                },

                // Async validation
                channelAvailable: async () => {
                  const res = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                  );
                  const data = await res.json();
                  return data.length ? undefined : "Error";
                },
              },
            })}
          />
          <span className="error">{errors.channel?.message}</span>
        </div>

        <button
          onClick={() => {
            trigger();
            //trigger("username"); // trigger only a particualar field
          }}
        >
          Trigger validation
        </button>

        <input type="submit" />
      </form>

      <DevTool control={control} />
    </div>
  );
};

export default Validation1;
