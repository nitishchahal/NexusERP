import { Link } from "react-router-dom";
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

  const onSubmit = (data: ForgotPasswordFormData) => {
    console.log(data);

    // TODO:
    // Call forgot password API
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormField>
        <FormLabel required>Email</FormLabel>

        <Input
          placeholder="Enter your email"
          {...register("email")}
          error={errors.email?.message}
        />

        <FormError message={errors.email?.message} />
      </FormField>

      <Button type="submit" fullWidth>
        Send Reset Link
      </Button>

      <div className="text-center">
        <Link
          to="/login"
          className="text-sm text-indigo-600 hover:underline"
        >
          Back to Login
        </Link>
      </div>
    </Form>
  );
};

export default ForgotPasswordForm;