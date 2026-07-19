import { Card, CardContent } from "../../../components/ui/Card";
import { ForgotPasswordForm } from "../components";

const ForgotPasswordPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <Card className="w-full max-w-md">
        <CardContent className="space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold">
              Forgot Password
            </h1>

            <p className="mt-2 text-slate-500">
              Enter your email to receive a reset link.
            </p>
          </div>

          <ForgotPasswordForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPasswordPage;