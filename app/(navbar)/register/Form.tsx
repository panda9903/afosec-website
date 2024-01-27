"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Events from "./DepEvents";
import React, { use } from "react";
import JSConfetti from "js-confetti";
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
import { toast } from "sonner";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { useRouter } from "next/navigation";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: "afosec",
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

import { SwitchDemo } from "./Accommodation";

const formSchema = z.object({
  username: z.string().min(1, {
    message: "Enter your full name",
  }),
  college: z.string().min(1, {
    message: "Enter your college name",
  }),
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
  yearOfStudy: z.string().min(1),
  rollNumber: z.string().min(1),
  department: z.string().min(1),
  checked: z.boolean(),
});

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

if (typeof window !== "undefined") {
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore(app);
}
export function ProfileForm() {
  const router = useRouter();

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

  const [checked, setChecked] = React.useState(false);
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      //console.log(values);
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
      toast.success("Successfully Registered!", {
        duration: 6000,
        position: "bottom-center",
        description: "Let us meet on Feb 28!",
      });
      router.push("/");
      const docRef = await addDoc(collection(db, "forms"), {
        ...values,
        checked: checked,
      });
      console.log("Document written with ID: ", docRef.id);
      form.reset();
      setChecked(false); // Reset the checked state as well
    } catch (e) {
      console.error("Error adding document: ", e);
      toast.error("Error adding document!", {
        duration: 2500,
        position: "bottom-right",
        description: "Please try again",
      });
    }
  }
  return (
    <div className=" bg-[#262626] rounded-lg mb-8 md:p-8 p-4 w-full md:w-[28rem]">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 text-white w-full"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="ml-4 ">Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Doe"
                    className="text-black rounded-3xl mt-1 w-full md:w-96"
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
                    placeholder="Indian Institute of Technology, Bombay"
                    className="text-black rounded-3xl mt-1 w-full md:w-96"
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
                    placeholder="+911234567890"
                    className="text-black w-full md:w-96 rounded-3xl mt-1"
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
                    placeholder="roll@org.ac.in"
                    className="text-black w-full md:w-96 rounded-3xl mt-1"
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
                    placeholder="1"
                    className="text-black w-full md:w-96 rounded-3xl mt-1"
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
                    placeholder="218W1A05B5"
                    className="text-black w-full md:w-96 rounded-3xl mt-1"
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
                    placeholder="Computer Science and Engineering"
                    className="text-black w-full md:w-96 rounded-3xl mt-1"
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
