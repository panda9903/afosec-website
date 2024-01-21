"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

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

//firebase testing shimt here
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXHIMLntbAItabOGjY0PMZQ2SVz79P5bg",
  authDomain: "afosec.firebaseapp.com",
  projectId: "afosec",
  storageBucket: "afosec.appspot.com",
  messagingSenderId: "772925962732",
  appId: "1:772925962732:web:3efa7a2ef95742f62068c9",
  measurementId: "G-CT4FDMSMQZ"
};

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


//Then, initialize Firestore after your Firebase app initialization:
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

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
/* function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
*/
async function onSubmit(values: z.infer<typeof formSchema>) {
  try {
    const docRef = await addDoc(collection(db, "forms"), values);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
  return (
    <div className="p-8 bg-[#262626] rounded-lg mb-8">
    <Form {...form} >
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 text-white flex flex-col items-center w-full"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="ml-3 ">Name</FormLabel>
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
              <FormLabel className="ml-3 ">College</FormLabel>
              <FormControl>
                <Input
                  placeholder=" "
                  className="text-black w-96 rounded-3xl mt-1 "
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
              <FormLabel className="ml-3 ">Phone</FormLabel>
              <FormControl>
                <Input
                  placeholder=" "
                  className="text-black w-96 rounded-3xl mt-1 "
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
              <FormLabel className="ml-3 ">College Email</FormLabel>
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
