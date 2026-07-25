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
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-7"
    >
      {/* Password */}
      <FormField>
        <FormLabel
          required
          className="mb-2 text-sm font-semibold tracking-tight text-slate-900"
        >
          New Password
        </FormLabel>
  
        <div className="group relative">
          <Lock
            className="
            pointer-events-none
            absolute
            left-4
            top-1/2
            h-5
            w-5
            -translate-y-1/2
            text-slate-400
            transition-colors
            duration-300
            group-focus-within:text-slate-700
          "
          />
  
          <Input
            type={showPassword ? "text" : "password"}
            placeholder="Create a secure password"
            className="
              h-14
              rounded-2xl
              border-slate-200
              bg-white/80
              pl-12
              pr-12
              text-[15px]
              shadow-sm
              backdrop-blur-sm
              transition-all
              duration-300
              placeholder:text-slate-400
              hover:border-slate-300
              focus:border-black
              focus:ring-4
              focus:ring-black/5
            "
            {...register("password")}
            error={errors.password?.message}
          />
  
          <button
            type="button"
            disabled={isLoading}
            onClick={() => setShowPassword((v) => !v)}
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              rounded-full
              p-1
              text-slate-400
              transition-all
              duration-200
              hover:scale-110
              hover:text-slate-700
              active:scale-95
            "
          >
            {showPassword ? (
              <EyeOff className="h-5 w-5" />
            ) : (
              <Eye className="h-5 w-5" />
            )}
          </button>
        </div>
  
        <p className="mt-3 text-sm leading-relaxed text-slate-500">
          Minimum 8 characters including uppercase, number and symbol.
        </p>
  
        <FormError message={errors.password?.message} />
      </FormField>
  
      {/* Confirm Password */}
      <FormField>
        <FormLabel
          required
          className="mb-2 text-sm font-semibold tracking-tight text-slate-900"
        >
          Confirm Password
        </FormLabel>
  
        <div className="group relative">
          <Lock
            className="
              pointer-events-none
              absolute
              left-4
              top-1/2
              h-5
              w-5
              -translate-y-1/2
              text-slate-400
              transition-colors
              duration-300
              group-focus-within:text-slate-700
            "
          />
  
          <Input
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Re-enter your password"
            className="
              h-14
              rounded-2xl
              border-slate-200
              bg-white/80
              pl-12
              pr-12
              text-[15px]
              shadow-sm
              backdrop-blur-sm
              transition-all
              duration-300
              placeholder:text-slate-400
              hover:border-slate-300
              focus:border-black
              focus:ring-4
              focus:ring-black/5
            "
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
          />
  
          <button
            type="button"
            disabled={isLoading}
            onClick={() =>
              setShowConfirmPassword((v) => !v)
            }
            className="
              absolute
              right-4
              top-1/2
              -translate-y-1/2
              rounded-full
              p-1
              text-slate-400
              transition-all
              duration-200
              hover:scale-110
              hover:text-slate-700
              active:scale-95
            "
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
  
      <Button
        type="submit"
        fullWidth
        disabled={isLoading}
        className="
          h-14
          rounded-2xl
          bg-black
          text-[15px]
          font-semibold
          tracking-tight
          text-white
          shadow-lg
          shadow-black/10
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:shadow-xl
          active:scale-[0.98]
          disabled:cursor-not-allowed
          disabled:opacity-70
        "
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