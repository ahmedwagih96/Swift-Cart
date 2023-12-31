import { LoginValues } from "../types/typing";
import { signIn } from "../redux/features/userSlice";
import { useAppDispatch } from "../redux/hooks";
import { useLoginMutation } from "../redux/services/authApi";
function useLogin() {
  const dispatch = useAppDispatch();
  const [loginUser, { isLoading, error, isSuccess, isError, data, reset }] =
    useLoginMutation();
  if (isSuccess) {
    dispatch(signIn({ user: data.user, token: data.access_token }));
  }
  const handleFormSubmit = async (values: LoginValues) => {
    loginUser(values);
  };
  let errorMessage: string = "";
  if (error) {
    const typedError = error as { status: number; data: { message: string } };
    errorMessage = typedError.data.message;
  }
  return {
    handleFormSubmit,
    isLoading,
    errorMessage,
    isError,
    reset,
  };
}

export default useLogin;
