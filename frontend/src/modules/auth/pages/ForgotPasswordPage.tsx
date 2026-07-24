import { ShieldCheck } from "lucide-react";
import { Card, CardContent } from "../../../components/ui/Card";
import { ForgotPasswordForm } from "../components";

const ForgotPasswordPage = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 px-4">

      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <Card className="relative w-full max-w-md overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 shadow-2xl backdrop-blur-xl">
        <CardContent className="space-y-8 p-8">

          {/* Header */}
          <div className="text-center">

            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 text-white shadow-lg">
              <ShieldCheck className="h-8 w-8" />
            </div>

            <h1 className="text-3xl font-bold tracking-tight text-slate-900">
              Forgot Password
            </h1>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Don't worry. Enter the email address associated with your account
              and we'll send you a secure password reset link.
            </p>
          </div>

          {/* Form */}
          <ForgotPasswordForm />

          {/* Footer */}
          <div className="border-t border-slate-200 pt-5 text-center">
            <p className="text-xs leading-5 text-slate-400">
              Protected by enterprise-grade security. Reset links expire
              automatically for your safety.
            </p>
          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPasswordPage;