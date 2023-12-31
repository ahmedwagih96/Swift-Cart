import { logoutUser } from "../redux/features/userSlice";
import { useAppDispatch } from "../redux/hooks";
import { useLogoutMutation } from "../redux/services/authApi";
function useLogout() {
  const [signOut, { isSuccess, isError, reset }] = useLogoutMutation();
  const dispatch = useAppDispatch();
  if (isSuccess) {
    dispatch(logoutUser());
  }
  const signOutUser = async () => {
    signOut();
  };

  return { signOutUser, reset, isError };
}

export default useLogout;
