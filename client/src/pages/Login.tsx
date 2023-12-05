import { Button } from "@mui/material";
import { Formik } from "formik";
import { shades } from "../theme";
import { ErrorToast, Seo } from "../components";
import { initialLoginValues } from "../constants/initialValues";
import { loginSchema } from "../constants/schemas";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import useLogin from "../hooks/useLogin";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
function Login() {
  const { handleFormSubmit, loading, error, errorMessage, setError } =
    useLogin();
  return (
    <main>
      <Seo
        canonicalUrl="/login"
        title="Login"
        description="Sign in to Swift Cart and experience seamless access to your personalized wardrobe. Explore the latest fashion trends, manage your orders, and stay updated on exclusive offers."
      />
      <ErrorToast
        error={error}
        setError={setError}
        errorMessage={errorMessage}
      />
      <Typography variant="h3" textAlign="center" marginTop="50px">
        Login To Your Account
      </Typography>
      <div style={{ width: "80%", margin: "auto", paddingTop: "40px" }}>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialLoginValues}
          validationSchema={loginSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "50px",
              }}
            >
              <TextField
                fullWidth
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ marginBottom: "15px", maxWidth: "500px" }}
              />
              <TextField
                fullWidth
                type="password"
                label="Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                sx={{ marginBottom: "15px", maxWidth: "500px" }}
              />

              <Button
                type="submit"
                fullWidth
                color="primary"
                variant="contained"
                disabled={loading}
                sx={{
                  backgroundColor: shades.primary[200],
                  boxShadow: "none",
                  color: "white",
                  borderRadius: 0,
                  padding: "15px 40px",
                  width: "fit-content",
                }}
              >
                {loading ? <CircularProgress size={22} /> : "Login"}
              </Button>
            </form>
          )}
        </Formik>
        <Typography color={shades.primary[300]} textAlign="center">
          Don't have an account?{" "}
          <Link to="/register" style={{ color: shades.primary[800] }}>
            Register Now
          </Link>
        </Typography>
      </div>
    </main>
  );
}

export default Login;
