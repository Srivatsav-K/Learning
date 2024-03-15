import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Checkbox } from "../../components/ui/checkbox";

const formSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "Title must be at least 2 characters.",
    })
    .max(64, {
      message: "Title must be less than 64 characters",
    }),
  description: z
    .string()
    // .min(2, {
    //   message: "Description must be at least 2 characters.",
    // })
    .optional(),
  completed: z.boolean().default(false),
  dueDate: z.date().optional(),
});

type TaskFormValues = z.infer<typeof formSchema>;

export interface Task extends TaskFormValues {
  id: string;
}

type TaskFormProps = {
  initialValues?: Task;
  onComplete: (data: Task) => void;
};

export function TaskForm({ initialValues, onComplete }: TaskFormProps) {
  // 1. Define your form.
  const form = useForm<TaskFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: initialValues?.title || "",
      description: initialValues?.description || "",
      completed: initialValues?.completed || false,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: TaskFormValues) {
    onComplete(
      initialValues?.id
        ? { id: initialValues.id, ...values }
        : { id: crypto.randomUUID(), ...values }
    );
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter task title"
                  maxLength={64}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe your task"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="completed"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>

              <FormLabel className="leading-none">Completed</FormLabel>
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">
          Submit
        </Button>
      </form>
    </Form>
  );
}
