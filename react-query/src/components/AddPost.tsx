import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DevTool } from "@hookform/devtools";
import z from "zod";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createPost, fetchTags } from "../api/api";
import { useNavigate } from "react-router-dom";

const postSchema = z.object({
  title: z.string().min(1, "Required").max(255, "Max length is 255"),
  tags: z.array(z.string().min(1)).optional(),
});

type FormData = z.infer<typeof postSchema>;

const AddPost = () => {
  //router
  const navigate = useNavigate();

  // react-query
  const {
    data: tags,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["tags"],
    queryFn: fetchTags,
  });

  // react-hook-form
  const form = useForm<FormData>({
    resolver: zodResolver(postSchema),
  });
  const { register, handleSubmit, formState, control, reset } = form;
  const { errors } = formState;

  const {
    mutate,
    isPending,
    error: createPostError,
    //reset: queryReset,
  } = useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      reset();
      navigate("/");
    },
  });

  // handleSubmit
  const createNewPost = (data: FormData) => {
    console.log(data);
    mutate({ ...data, id: Date.now() });
  };

  return (
    <div className="my-32 flex flex-col justify-center items-center">
      <div className="border rounded-md p-10 space-y-4 shadow-md">
        <h2 className="text-center text-lg">ADD POST</h2>

        <form onSubmit={handleSubmit(createNewPost)}>
          <div className="flex flex-col gap-4 min-w-72">
            <div>
              <input
                type="text"
                placeholder="Enter title"
                {...register("title")}
                className="border rounded-md p-2 w-[100%]"
              />
              {errors.title && (
                <div className="text-red-400 text-sm max-w-72 text-wrap m-1">
                  {errors.title.message}
                </div>
              )}
            </div>

            <div>
              {isLoading && <div>Loading...</div>}
              {error && (
                <div className="text-red-400 text-sm max-w-72 text-wrap my-1">
                  {error.message}
                </div>
              )}

              <div>
                {tags?.map((tag, i) => {
                  return (
                    <div key={i} className="flex items-center gap-2">
                      <input
                        id={tag}
                        value={tag}
                        type="checkbox"
                        {...register("tags")}
                      />
                      <label htmlFor={tag}>{tag}</label>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isPending}
                className="px-3 py-2 bg-slate-400 rounded-lg hover:bg-slate-500 hover:text-white w-[100%] "
              >
                Submit
              </button>

              {isPending && <div>Submitting...</div>}

              {createPostError && (
                <div className="text-red-400 text-sm max-w-72 text-wrap m-1">
                  Error : {createPostError.message}
                </div>
              )}
            </div>
          </div>
        </form>
      </div>

      <DevTool control={control} />
    </div>
  );
};
export default AddPost;
