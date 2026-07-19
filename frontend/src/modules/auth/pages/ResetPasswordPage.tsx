import { Card, CardContent } from "../../../components";
import { ResetPasswordForm } from "../components";

const ResetPasswordPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <Card className="w-full max-w-md">
        <CardContent className="space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold">
              Reset Password
            </h1>

            <p className="mt-2 text-slate-500">
              Create a new password for your account.
            </p>
          </div>

          <ResetPasswordForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default ResetPasswordPage;