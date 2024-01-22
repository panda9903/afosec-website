"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Events from "./DepEvents";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SwitchDemo } from "./Accommodation";

const formSchema = z.object({
  username: z.string(),
  college: z.string(),
  email: z.string().email({
    message: "Enter valid email address",
  }),
  phone: z
    .string()
    .min(10, {
      message: "Enter a valid phone number",
    })
    .max(13, {
      message: "Enter a valid phone number",
    }),
});

export function ProfileForm() {
  // ...
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      college: "",
      email: "",
      phone: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const [checked, setChecked] = React.useState(false);

  return (
    <div className="p-8 bg-[#262626] rounded-lg mb-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 text-white"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder=" "
                    className="text-black w-96"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="college"
            render={({ field }) => (
              <FormItem>
                <FormLabel>College</FormLabel>
                <FormControl>
                  <Input
                    placeholder=" "
                    className="text-black w-96"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input
                    placeholder=" "
                    className="text-black w-96"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>College Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="  "
                    className="text-black w-96"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Events />
          <SwitchDemo />
          <div className="flex items-center">
            <Button
              type="submit"
              className="max-w-48 mx-auto bg-black hover:bg-[#EA8814] text-white rounded-md text-center"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
