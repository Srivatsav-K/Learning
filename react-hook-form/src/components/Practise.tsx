import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";

type FormValues = {
  username: string;
  phone: string[];
  social: {
    youtube: string;
    instagram: string;
  };
};

const Practise = () => {
  const form = useForm<FormValues>({
    defaultValues: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
      const data = await res.json();

      return {
        username: data.name,
        phone: [data.phone],
        social: {
          youtube: "",
          instagram: "",
        },
      };
    },
  });

  const { register, handleSubmit, formState, control } = form;

  const { errors } = formState;

  const onSubmit = (formValues: FormValues) => {
    console.log(formValues);
  };

  return (
    <div>
      <h1>Practise form</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            {...register("username", {
              required: "Username is requried",
              validate: (value) => {
                return value.length > 3 || "Too short";
              },
            })}
          />
          <span className="error">{errors.username?.message}</span>
        </div>

        <label>Phone</label>
        <div className="form-control">
          <label htmlFor="personal-phone">Personal phone</label>
          <input
            type="text"
            id="personal-phone"
            {...register("phone.0", {
              required: "Personal phone is required",
            })}
          />
          <span className="error">{errors.phone?.[0]?.message}</span>
        </div>

        <div className="form-control">
          <label htmlFor="office-phone">Office phone</label>
          <input type="text" id="office-phone" {...register("phone.1")} />
          <span className="error">{errors.phone?.[1]?.message}</span>
        </div>

        <div className="form-control">
          <label htmlFor="youtube">Youtube</label>
          <input
            type="text"
            id="youtube"
            {...register("social.youtube", {
              required: "Youtube channel name is required",
            })}
          />
          <span className="error">{errors.social?.youtube?.message}</span>
        </div>

        <div className="form-control">
          <label htmlFor="instagram">Instagram</label>
          <input type="text" id="instagram" {...register("social.instagram")} />
          <span className="error">{errors.social?.instagram?.message}</span>
        </div>

        <input type="submit" />
      </form>
      <DevTool control={control} />
    </div>
  );
};
export default Practise;
