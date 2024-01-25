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

//import { Chans } from "./Chans"; // replace './Chans' with the actual path to your Chans.tsx file
//firebase testing shimt here
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};
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
  yearOfStudy: z.string(),
  rollNumber: z.string(),
  department: z.string(),
  checked: z.boolean(),
});

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

//Then, initialize Firestore after your Firebase app initialization:
if (typeof window !== "undefined") {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);
}
//panda this is values thing which is passed to onSubmit function
export function ProfileForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      college: "",
      email: "",
      phone: "",
      yearOfStudy: "",
      rollNumber: "",
      department: "",
      checked: false,
    },
  });

  // 2. Define a submit handler.
  /* function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
*/

  const [checked, setChecked] = React.useState(false);
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const formValues = form.getValues();

      console.log(formValues);
      const docRef = await addDoc(collection(db, "forms"), formValues);
      console.log("Document written with ID: ", docRef.id);
      form.reset(); //form ni idi clear chestadi if no error
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
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
                <FormLabel className="ml-4 ">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder=" "
                    className="text-black w-96 rounded-3xl mt-1"
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
                <FormLabel className="ml-4 ">College</FormLabel>
                <FormControl>
                  <Input
                    placeholder=" "
                    className="text-black w-96 rounded-3xl mt-1"
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
                <FormLabel className="ml-4 ">Phone</FormLabel>
                <FormControl>
                  <Input
                    placeholder=" "
                    className="text-black w-96 rounded-3xl mt-1"
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
                <FormLabel className="ml-4 ">College Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="  "
                    className="text-black w-96 rounded-3xl mt-1"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="yearOfStudy"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="ml-4 ">Year of Study</FormLabel>
                <FormControl>
                  <Input
                    placeholder="  "
                    className="text-black w-96 rounded-3xl mt-1"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rollNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="ml-4 ">Roll Number</FormLabel>
                <FormControl>
                  <Input
                    placeholder="  "
                    className="text-black w-96 rounded-3xl mt-1"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="department"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="ml-4 ">Department</FormLabel>
                <FormControl>
                  <Input
                    placeholder="  "
                    className="text-black w-96 rounded-3xl mt-1"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* <Events /> */}
          {/* <Chans /> */}
          <div>
            <SwitchDemo checked={checked} setChecked={setChecked} />
          </div>
          <div className="flex items-center">
            <Button
              type="submit"
              className="max-w-48 mx-auto bg-black hover:bg-[#EA8814] text-white rounded-3xl text-center"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
