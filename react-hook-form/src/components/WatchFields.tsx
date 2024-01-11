import { DevTool } from "@hookform/devtools";
import { useEffect } from "react";

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
  age: number;
  dob: Date | string;
};

let renderCount = 0;

const WatchFields = () => {
  renderCount++;

  const date18YearsAgo = new Date();
  date18YearsAgo.setFullYear(date18YearsAgo.getFullYear() - 18);

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
      age: new Date().getFullYear() - date18YearsAgo.getFullYear(), //18
      dob:
        date18YearsAgo.getFullYear().toString().padStart(4, "0") +
        "-" +
        (date18YearsAgo.getMonth() + 1).toString().padStart(2, "0") +
        "-" +
        date18YearsAgo.getDate().toString().padStart(2, "0"),
    },
  });

  const { register, control, handleSubmit, formState, watch } = form;
  const { errors } = formState;

  // If there is any change in the field this value will get updated with the new field value.Can be used for showing a preview of form filed values. NOTE: Will re-render the component each time a form field is changed
  const watchAllFormFields = watch();
  const watchSingleFormField = watch("username");
  const watchMultipleFormFields = watch(["age", "username"]);

  useEffect(() => {
    // To perform side effects (like make api call on change of a form field value we can use this). NOTE: Will not re-render the component
    // (It is similar to subscribing to the form)
    const subscription = watch((values) => {
      console.log(values); // all form field values
    });

    return () => subscription.unsubscribe();
  }, [watch]);

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

        <div className="form-control">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            {...register("age", {
              required: "Age is required",
              valueAsNumber: true,
              validate: (value) => {
                return value < 18 ? "Min age is 18" : undefined;
              },
            })}
          />
          <span className="error">{errors?.age?.message}</span>
        </div>

        <div className="form-control">
          <label htmlFor="dob">Date of birth</label>
          <input
            type="date"
            id="dob"
            {...register("dob", {
              required: "Date of birth is required",
              valueAsDate: true,
              validate: (value) => {
                return value > date18YearsAgo ? "Not 18 years old" : undefined;
              },
            })}
          />
          <span className="error">{errors.dob?.message}</span>
        </div>

        <input type="submit" />
      </form>

      <DevTool control={control} />
    </div>
  );
};
export default WatchFields;
