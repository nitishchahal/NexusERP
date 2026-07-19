import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

import {
  Form,
  FormField,
  FormLabel,
  FormError,
  Input,
  Button,
} from "../../../components";

import { resetPasswordSchema } from "../schemas";
import type { ResetPasswordFormData } from "../types";

const ResetPasswordForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormData>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: ResetPasswordFormData) => {
    console.log(data);

    // TODO:
    // Call reset password API

    navigate("/login");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormField>
        <FormLabel required>New Password</FormLabel>

        <Input
          type="password"
          {...register("password")}
          error={errors.password?.message}
        />

        <FormError message={errors.password?.message} />
      </FormField>

      <FormField>
        <FormLabel required>Confirm Password</FormLabel>

        <Input
          type="password"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />

        <FormError message={errors.confirmPassword?.message} />
      </FormField>

      <Button type="submit" fullWidth>
        Reset Password
      </Button>
    </Form>
  );
};

export default ResetPasswordForm;