import { LockKeyhole } from "lucide-react";
import { Card, CardContent } from "../../../components";
import { ResetPasswordForm } from "../components";

const ResetPasswordPage = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F5F5F7] px-6">

      {/* Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#FFFFFF_0%,#F8F8FA_45%,#F5F5F7_100%)]" />

      <div className="absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-black/[0.025] blur-[180px]" />

      <div className="absolute bottom-[-180px] right-[-150px] h-[420px] w-[420px] rounded-full bg-black/[0.02] blur-[170px]" />

      {/* Card */}
      <Card
        className="
          relative
          w-full
          max-w-md
          rounded-[32px]
          border
          border-black/[0.05]
          bg-white/88
          shadow-[0_30px_80px_rgba(15,23,42,0.08)]
          backdrop-blur-3xl
          transition-all
          duration-500
        "
      >
        <CardContent className="px-10 py-12">

          {/* Header */}
          <div className="text-center">

            <span
              className="
                inline-flex
                rounded-full
                border
                border-slate-200
                bg-white
                px-3
                py-1
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-slate-500
                shadow-sm
              "
            >
              Security
            </span>

            <div
              className="
                mx-auto
                mt-8
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-[#111827]
                text-white
                shadow-[0_15px_40px_rgba(17,24,39,0.18)]
                transition-transform
                duration-300
                hover:scale-105
              "
            >
              <LockKeyhole className="h-8 w-8" strokeWidth={2.2} />
            </div>

            <h1
              className="
                mt-8
                text-[34px]
                font-semibold
                leading-none
                tracking-[-0.03em]
                text-slate-900
              "
            >
              Reset Password
            </h1>

            <p
              className="
                mx-auto
                mt-5
                max-w-[300px]
                text-[15px]
                leading-7
                text-slate-500
              "
            >
              Create a new password to protect your account.
              Choose something unique that you haven't used before.
            </p>
          </div>

          {/* Divider */}
          <div className="my-10 flex justify-center">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          </div>

          {/* Form */}
          <ResetPasswordForm />

          {/* Footer */}
          <div className="mt-10 border-t border-slate-100 pt-7 text-center">

            <div className="mx-auto mb-4 h-px w-20 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <p className="text-[13px] font-medium tracking-tight text-slate-400">
              Protected with industry-standard encryption.
            </p>

          </div>

        </CardContent>
      </Card>
    </div>
  );
};

export default ResetPasswordPage;