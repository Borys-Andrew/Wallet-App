"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  // FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  userName: z.string().min(4, {
    message: "Name must be at least 4 characters long",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(4, {
    message: "Password must be at least 4 characters long",
  }),
});

export default function SinginPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (formData: z.infer<typeof formSchema>) => {
    console.log("🚀 ~ onSubmit ~ SinginPage formData:", formData);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center px-2">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col border rounded-md p-6 w-80"
        >
          <h1 className="text-4xl text-center mb-4">Singin</h1>
          <FormField
            control={form.control}
            name="userName"
            render={({ field }) => (
              <FormItem className="mb-2">
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="name..."
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
              <FormItem className="mb-2">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="email..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mb-5">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="password..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
          <p className="text-xs text-center mt-4">
            If you have an account{" "}
            <Link
              className="underline underline-offset-1"
              href="/login"
            >
              Login
            </Link>
          </p>
        </form>
      </Form>
    </div>
  );
}
