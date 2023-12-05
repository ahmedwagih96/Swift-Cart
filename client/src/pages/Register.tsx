import { Button } from "@mui/material";
import { Formik } from "formik";
import { shades } from "../theme";
import { ErrorToast, Seo } from "../components";
import { initialRegisterValues } from "../constants/initialValues";
import { registerSchema } from "../constants/schemas";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import useRegister from "../hooks/useRegister";
import CircularProgress from "@mui/material/CircularProgress";
import { Link } from "react-router-dom";
function Register() {
  const { handleFormSubmit, loading, error, errorMessage, setError } =
    useRegister();

  return (
    <main>
      <Seo
        canonicalUrl="/Register"
        title="Register"
        description="Create your Swift Cart account to unlock a world of fashion possibilities. Register today for a tailored shopping experience that suits your unique style."
      />
      <ErrorToast
        error={error}
        errorMessage={errorMessage}
        setError={setError}
      />
      <Typography variant="h3" textAlign="center" marginTop="50px">
        Register New Account
      </Typography>
      <div style={{ width: "80%", margin: "auto", paddingTop: "40px" }}>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialRegisterValues}
          validationSchema={registerSchema}
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
                label="Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.username}
                name="username"
                error={!!touched.username && !!errors.username}
                helperText={touched.username && errors.username}
                sx={{ marginBottom: "15px", maxWidth: "500px" }}
              />
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
              <TextField
                fullWidth
                type="password"
                label="Confirm Password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.confirmPassword}
                name="confirmPassword"
                error={!!touched.confirmPassword && !!errors.confirmPassword}
                helperText={touched.confirmPassword && errors.confirmPassword}
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
                {loading ? <CircularProgress size={22}/> : "Register"}
              </Button>
            </form>
          )}
        </Formik>
        <Typography color={shades.primary[300]} textAlign="center">
          Already have an account?{" "}
          <Link to="/login" style={{ color: shades.primary[800] }}>
            Login
          </Link>
        </Typography>
      </div>
    </main>
  );
}

export default Register;
