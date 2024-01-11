import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";

type FormValues = {
  age: number;
  dob: Date | string;
};

const NumericAndDateValues = () => {
  const date18YearsAgo = new Date();
  date18YearsAgo.setFullYear(date18YearsAgo.getFullYear() - 18);

  const form = useForm<FormValues>({
    defaultValues: {
      age: new Date().getFullYear() - date18YearsAgo.getFullYear(),
      dob:
        date18YearsAgo.getFullYear().toString().padStart(4, "0") +
        "-" +
        (date18YearsAgo.getMonth() + 1).toString().padStart(2, "0") +
        "-" +
        date18YearsAgo.getDate().toString().padStart(2, "0"),
    },
  });

  const { register, handleSubmit, formState, control } = form;

  const { errors } = formState;

  const onSubmit = (formValues: FormValues) => {
    console.log(formValues);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-control">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            {...register("age", {
              required: "Age is required",
              valueAsNumber: true, // To get value as number else will be a string
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
              valueAsDate: true, // To get value as Date obj
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
export default NumericAndDateValues;
