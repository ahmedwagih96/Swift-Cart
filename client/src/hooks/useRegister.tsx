import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FormikHelpers } from "formik";
import { RegisterValues } from "../types/typing";
// Redux
import { useAppDispatch } from "../redux/hooks";
import { setUser } from "../redux/features/userSlice";
function useRegister() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleFormSubmit = async (
    values: RegisterValues,
    actions: FormikHelpers<RegisterValues>
  ) => {
    try {
      setErrorMessage("");
      setError(false);
      setLoading(true);
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/auth/signup`, {
        method: "POST",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      setLoading(false);
      if (!data.success) {
        setErrorMessage(data.message);
        setError(true);
        return;
      }
      actions.setTouched({});
      dispatch(setUser(data.user));
      navigate("/");
    } catch (error) {
      setLoading(false);
      if (error instanceof Error) {
        setErrorMessage(error.message);
        setError(true);
      }
    }
  };
  return { handleFormSubmit, loading, error, setError, errorMessage };
}

export default useRegister;
