import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Lock } from "lucide-react";

import {
  Form,
  FormField,
  FormLabel,
  FormError,
  Input,
  Button,
} from "../../../components";

import { loginSchema } from "../schemas";
import type { LoginFormData } from "../types";
import { useLogin } from "../../../hooks/api/useLogin";

const LoginForm = () => {
  const navigate = useNavigate();

  const { mutate, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormData) => {
    mutate(data, {
      onSuccess: () => {
        navigate("/dashboard");
      },
    });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <FormField>
        <FormLabel required className="text-xs font-medium text-indigo-100/70">
          Email
        </FormLabel>

        <Input
          placeholder="you@company.com"
          leftIcon={<Mail size={16} />}
          className="border-white/10 bg-white/[0.04] text-white placeholder:text-indigo-200/30 focus:border-indigo-400/50 focus:bg-white/[0.06] focus:ring-2 focus:ring-indigo-500/20"
          {...register("email")}
      
        />

        <FormError message={errors.email?.message} />
      </FormField>

      <FormField>
        <FormLabel required className="text-xs font-medium text-indigo-100/70">
          Password
        </FormLabel>

        <Input
          type="password"
          placeholder="Enter your password"
          leftIcon={<Lock size={16} />}
          className="border-white/10 bg-white/[0.04] text-white placeholder:text-indigo-200/30 focus:border-indigo-400/50 focus:bg-white/[0.06] focus:ring-2 focus:ring-indigo-500/20"
          {...register("password")}
      
        />

        <FormError message={errors.password?.message} />
      </FormField>

      <div className="flex justify-end">
        <Link
          to="/forgot-password"
          className="text-xs font-medium text-indigo-300 transition-colors hover:text-indigo-200"
        >
          Forgot password?
        </Link>
      </div>

      <Button
        type="submit"
        fullWidth
        loading={isPending}
        className="rounded-xl bg-gradient-to-r from-indigo-500 to-violet-600 py-2.5 font-medium shadow-lg shadow-indigo-950/40 transition-transform hover:scale-[1.01] hover:from-indigo-400 hover:to-violet-500 active:scale-[0.99]"
      >
        Sign in
      </Button>
    </Form>
  );
};

export default LoginForm;