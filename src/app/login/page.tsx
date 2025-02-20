"use client";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import axiosInstance from "@/utils/axiosInstance";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters."
  }).max(50),
  password: z.string().min(4, {
    message: "Password must be at least 4 characters"
  })
});


export default function Login() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: ""
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    const data = {
      'username': values.username,
      'password': values.password
    }
    axiosInstance.post('api/user/login/', data).then((result) => {
      console.log(result);
    }).catch((err) => {
      console.error(err);
    })
  }

  return (
    <div>
      <div className="z-10 flex min-h-64 items-center justify-center">
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
        control={form.control}
        name="password"
        render={({field}) => (
          <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Enter Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
        )} />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
      </div>
    </div>
  );
}
