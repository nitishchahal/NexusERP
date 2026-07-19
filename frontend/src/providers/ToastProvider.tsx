import { Toaster } from "react-hot-toast";

const ToastProvider = () => {
  return (
    <Toaster
      position="top-right"
      gutter={12}
      reverseOrder={false}
      toastOptions={{
        duration: 4000,
      }}
    />
  );
};

export default ToastProvider;