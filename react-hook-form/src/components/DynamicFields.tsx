import { DevTool } from "@hookform/devtools";

// useFieldArray hook used to handle dynamic fields
import { useForm, useFieldArray } from "react-hook-form";

type FormValues = {
  username: string;
  email: string;
  channel: string;
  social?: {
    twitter?: string;
    instagram?: string;
  };
  phoneNumbers: string[];
  phNumbers: {
    number: string;
  }[];
};

let renderCount = 0;

const DynamicFields = () => {
  renderCount++;

  // Initial values
  const form = useForm<FormValues>({
    defaultValues: {
      username: "Batman",
      email: "john@gmail.com",
      channel: "Code",
      social: {
        twitter: "@twitter",
        instagram: "@instagram",
      },
      phoneNumbers: ["3294829834", ""],
      phNumbers: [{ number: "" }],
    },
  });

  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  // Import useFieldArray
  const { fields, append, remove } = useFieldArray({
    name: "phNumbers",
    control,
  });

  const onSubmit = (formValues: FormValues) => {
    console.log(formValues);
  };

  return (
    <div className="form-div">
      <h2>Youtube form ( rendered {renderCount / 2} ) </h2>

      {/* noValidate prevents browser validation */}
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" {...register("username")} />
          <span className="error">{errors.username?.message}</span>
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", {
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
              },
            })}
          />
          <span className="error">{errors.channel?.message}</span>
        </div>

        <div className="form-control">
          <label htmlFor="twitter">Twitter</label>
          {/* Specify the name with a "." followed by name to indicate it is a nested object */}
          <input
            type="text"
            id="twitter"
            {...register("social.twitter", {
              required: "Twitter handle is required",
            })}
          />
          <span className="error">{errors.social?.twitter?.message}</span>
        </div>

        <div className="form-control">
          <label htmlFor="instagram">Instagram</label>
          <input type="text" id="instagram" {...register("social.instagram")} />
        </div>

        {/* Specify the name with a "." followed by index to indicate it is a nested array (Array.index is used instead of Array[index] to maintain consistency with typescript) */}
        <div className="form-control">
          <label htmlFor="primary-phone">Primary phone</label>
          <input
            type="text"
            id="primary-phone"
            {...register("phoneNumbers.0", {
              required: "Primary phone number is required",
            })}
          />
          <span className="error">{errors.phoneNumbers?.[0]?.message}</span>
        </div>

        <div className="form-control">
          <label htmlFor="secondary-phone">Secondary phone</label>
          <input
            type="text"
            id="secondary-phone"
            {...register("phoneNumbers.1")}
          />
        </div>

        <div>
          <label>List of phone numbers</label>
          <div>
            {fields.map((field, i) => {
              return (
                // Recommended to pass field.id as key
                <div className="form-control" key={field.id}>
                  <label htmlFor={`phone${i + 1}`}>Phone {i + 1}</label>
                  <input
                    id={`phone${i + 1}`}
                    {...register(`phNumbers.${i}.number` as const)}
                  />
                  {i > 0 && (
                    <button type="button" onClick={() => remove(i)}>
                      x
                    </button>
                  )}
                </div>
              );
            })}
            <button
              type="button"
              onClick={() =>
                append({
                  number: "",
                })
              }
            >
              Add field
            </button>
          </div>
        </div>

        <input type="submit" />
      </form>

      <DevTool control={control} />
    </div>
  );
};
export default DynamicFields;
