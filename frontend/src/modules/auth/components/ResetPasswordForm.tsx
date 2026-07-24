import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import {
  Lock,
  Eye,
  EyeOff,
  Loader2,
} from "lucide-react";

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

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

  const onSubmit = async (data: ResetPasswordFormData) => {
    setIsLoading(true);

    try {
      console.log(data);

      // TODO:
      // await resetPassword(data);

      await new Promise((resolve) => setTimeout(resolve, 1500));

      navigate("/login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

      {/* Password */}
      <FormField>
        <FormLabel required>New Password</FormLabel>

        <div className="relative">
          <Lock className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Enter a strong password"
            className="h-12 pl-11 pr-12"
            {...register("password")}
            error={errors.password?.message}
          />

          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>

        <p className="mt-2 text-xs text-slate-500">
          Use at least 8 characters with letters, numbers, and symbols.
        </p>

        <FormError message={errors.password?.message} />
      </FormField>

      {/* Confirm Password */}
      <FormField>
        <FormLabel required>Confirm Password</FormLabel>

        <div className="relative">
          <Lock className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

          <Input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Re-enter your password"
            className="h-12 pl-11 pr-12"
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
          />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword((prev) => !prev)
            }
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-slate-700"
          >
            {showConfirmPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>

        <FormError message={errors.confirmPassword?.message} />
      </FormField>

      {/* Submit */}
      <Button
        type="submit"
        fullWidth
        disabled={isLoading}
        className="h-12 rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Updating Password...
          </>
        ) : (
          "Reset Password"
        )}
      </Button>
    </Form>
  );
};

export default ResetPasswordForm;