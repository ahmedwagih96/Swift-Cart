import { useState } from "react";
import { FormikHelpers } from "formik";
import { LoginValues } from "../types/typing";
import { setUser } from "../redux/features/userSlice";
import { useAppDispatch } from "../redux/hooks";
function useLogin() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const dispatch = useAppDispatch();

  const handleFormSubmit = async (
    values: LoginValues,
    actions: FormikHelpers<LoginValues>
  ) => {
    try {
      setLoading(true);
      setErrorMessage("");
      setError(false);
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/auth/signin`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const data = await res.json();
      setLoading(false);
      if (!data.success) {
        setError(true);
        setErrorMessage(data.message);
        return;
      }
      if (data.success) {
        setError(false);
        dispatch(setUser(data.user));
        actions.setTouched({});
      }
    } catch (error) {
      setLoading(false);
      if (error instanceof Error) {
        setErrorMessage(error.message);
        setError(true);
      }
    }
  };
  return { handleFormSubmit, setError, loading, error, errorMessage };
}

export default useLogin;
