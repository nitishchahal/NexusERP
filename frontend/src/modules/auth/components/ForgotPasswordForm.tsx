import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, ArrowLeft, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Form,
  FormField,
  FormLabel,
  FormError,
  Input,
  Button,
} from "../../../components";

import { forgotPasswordSchema } from "../schemas";
import type { ForgotPasswordFormData } from "../types";

const ForgotPasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setIsLoading(true);

    try {
      console.log(data);

      // TODO:
      // await forgotPassword(data);

      await new Promise((resolve) => setTimeout(resolve, 1500));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <FormField>
        <FormLabel required>Email Address</FormLabel>

        <div className="relative">
          <Mail className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

          <Input
            type="email"
            placeholder="john@company.com"
            className="h-12 pl-11"
            {...register("email")}
            error={errors.email?.message}
          />
        </div>

        <FormError message={errors.email?.message} />
      </FormField>

      <Button
        type="submit"
        fullWidth
        disabled={isLoading}
        className="h-12 rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending Reset Link...
          </>
        ) : (
          "Send Reset Link"
        )}
      </Button>

      <div className="flex items-center justify-center pt-2">
        <Link
          to="/login"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-indigo-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Login
        </Link>
      </div>
    </Form>
  );
};

export default ForgotPasswordForm;