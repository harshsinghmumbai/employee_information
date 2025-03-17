"use client";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Textarea } from "./ui/textarea";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useState } from "react";

const Form_Schema = z.object({
  Name: z
    .string()
    .regex(/^[A-Za-z\s]+$/, {
      message: "Name should only contain alphabetic characters",
    })
    .min(2, { message: "Name must be at least 2 characters" })
    .max(50, { message: "Name must be at most 50 characters" }),
  Email: z.string().email({ message: "Invalid email address" }),
  Phone: z.string().regex(/^\d{10}$/, {
    message: "Phone number must be exactly 10 digits",
  }),
  textarea: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(500, { message: "Message must be at most 500 characters" }),
});

const Form_Validation = () => {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(Form_Schema),
    defaultValues: {
      Name: "",
      Email: "",
      textarea: "",
      Phone: "",
    },
  });

  const onSubmit = async (value) => {
    setLoading(true);
    const { Name, Email, textarea, Phone } = value;
    console.log(value);

    const register = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Name, Email, textarea, Phone }),
    });

    if (register.ok) {
      form.reset();
      setLoading(false);
      return toast(`${Name}`, {
        description: "Your Form has been submitted successfully",
        className:
          "group-[.toaster]:border-2 group-[.toaster]:border-green-400 group-[.toaster]:bg-green-200",
        action: {
          label: "Close",
          onClick: () => console.log("Close"),
        },
      });
    }
  };

  return (
    <div className="sm:w-[600px] h-fit p-1 mb-16">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <SignupForm
            name="Name"
            inputType="input"
            placeholder="Enter Full Name"
            formControl={form.control}
          />
          <SignupForm
            name="Email"
            inputType="email"
            placeholder="Enter Email ID"
            formControl={form.control}
          />
          <SignupForm
            name="Phone"
            inputType="number"
            placeholder="Enter Your Phone Number"
            formControl={form.control}
          />
          <FormField
            control={form.control}
            name="textarea"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Enter Your Home Address"
                    {...field}
                    className="resize-none"
                  />
                </FormControl>
                <FormMessage className="px-3 md:text-base font-semibold dark:text-red-600" />
              </FormItem>
            )}
          />
          {loading ? (
            <Button disabled className="w-fit text-sm lg:text-base md:text-lg">
              Please wait
              <Loader2 className="ml-2 h-4 w-4 animate-spin" />
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-fit text-sm lg:text-base md:text-lg"
            >
              Submit
            </Button>
          )}
        </form>
      </Form>
    </div>
  );
};

export default Form_Validation;

// Reusable Form Field Component
const SignupForm = ({ name, inputType, placeholder, formControl }) => {
  return (
    <FormField
      control={formControl}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input
              type={inputType || "input"}
              placeholder={placeholder}
              {...field}
            />
          </FormControl>
          <FormMessage className="px-3 sm:text-sm md:text-base font-semibold dark:text-red-600" />
        </FormItem>
      )}
    />
  );
};
