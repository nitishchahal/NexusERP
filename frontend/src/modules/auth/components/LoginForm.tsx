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
    mode: "onBlur",
  });

  const onSubmit = (data: LoginFormData) => {
    mutate(data, {
      onSuccess: () => navigate("/dashboard"),
    });
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
      noValidate
    >
      {/* Email */}
      <FormField>
        <FormLabel
          required
          className="mb-2 text-xs font-semibold tracking-wide text-indigo-100/70"
        >
          Email
        </FormLabel>

        <Input
          type="email"
          placeholder="you@company.com"
          autoComplete="email"
          inputMode="email"
          disabled={isPending}
          leftIcon={<Mail size={16} />}
          className="
            h-12
            rounded-xl
            border-white/10
            bg-white/[0.04]
            text-white
            placeholder:text-indigo-200/30
            transition-all
            duration-200
            focus:border-indigo-400/50
            focus:bg-white/[0.06]
            focus:ring-4
            focus:ring-indigo-500/20
          "
          {...register("email")}
        />

        <FormError message={errors.email?.message} />
      </FormField>

      {/* Password */}
      <FormField>
        <div className="mb-2 flex items-center justify-between">
          <FormLabel
            required
            className="text-xs font-semibold tracking-wide text-indigo-100/70"
          >
            Password
          </FormLabel>

          <Link
            to="/forgot-password"
            className="
              text-xs
              font-medium
              text-indigo-300
              transition-colors
              duration-200
              hover:text-white
            "
          >
            Forgot password?
          </Link>
        </div>

        <Input
          type="password"
          placeholder="Enter your password"
          autoComplete="current-password"
          disabled={isPending}
          leftIcon={<Lock size={16} />}
          className="
            h-12
            rounded-xl
            border-white/10
            bg-white/[0.04]
            text-white
            placeholder:text-indigo-200/30
            transition-all
            duration-200
            focus:border-indigo-400/50
            focus:bg-white/[0.06]
            focus:ring-4
            focus:ring-indigo-500/20
          "
          {...register("password")}
        />

        <FormError message={errors.password?.message} />
      </FormField>

      <Button
        type="submit"
        fullWidth
        loading={isPending}
        disabled={isPending}
        className="
          h-12
          rounded-xl
          bg-gradient-to-r
          from-indigo-500
          via-violet-500
          to-purple-600
          text-sm
          font-semibold
          tracking-wide
          shadow-lg
          shadow-indigo-950/40
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:shadow-xl
          hover:shadow-indigo-900/50
          active:translate-y-0
          disabled:cursor-not-allowed
          disabled:opacity-70
        "
      >
        {isPending ? "Signing in..." : "Sign in"}
      </Button>
    </Form>
  );
};

export default LoginForm;