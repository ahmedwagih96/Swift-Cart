import { useNavigate } from "react-router-dom";
import { RegisterValues } from "../types/typing";
// Redux
import { useAppDispatch } from "../redux/hooks";
import { signIn } from "../redux/features/userSlice";
import { useRegisterMutation } from "../redux/services/authApi";
function useRegister() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [
    registerUser,
    {
      isLoading,
      error,
      isSuccess,
      isError,
      data,
      reset,
    },
  ] = useRegisterMutation();

  if (isSuccess) {
    navigate("/");
    dispatch(signIn({ user: data.user, token: data.access_token }));
  }

  let errorMessage: string = "";

  if (error) {
    const typedError = error as { status: number; data: { message: string } };
    errorMessage = typedError.data.message;
  }

  const handleFormSubmit = async (
    values: RegisterValues,
  ) => {
    registerUser(values);
  };

  return { handleFormSubmit, isLoading, errorMessage, isError, reset };
}

export default useRegister;
