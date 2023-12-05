import { useState } from "react";
import { logoutUser } from "../redux/features/userSlice";
import { useAppDispatch } from "../redux/hooks";
function useLogout() {
  const dispatch = useAppDispatch();
  const [error, setError] = useState<boolean>(false);
  const signOutUser = async () => {
    try {
      setError(false);
      const res = await fetch("http://localhost:8000/api/auth/signout", {
        credentials: "include",
      });
      const data = await res.json();
      if (!data.success) {
        setError(true);
      }
      if (data.success) {
        dispatch(logoutUser());
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(true);
      }
    }
  };
  return { signOutUser, error, setError };
}

export default useLogout;
