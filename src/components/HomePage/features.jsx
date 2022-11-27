import React, { useState, useEffect } from "react";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export const Features = (props) => {
  const [flag, setFlag] = useState(0);
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Sign In / Register</h2>
        </div>
        <div>
          <div className="col-xs-12 col-sm-12 col-lg-12">
            {flag ? (
              <i className="fa fa-sign-in"></i>
            ) : (
              <i className="fa fa-user-plus"></i>
            )}

            {/* <Loginform/> */}
            {flag ? <SignIn /> : <SignUp />}
            <Container component="main" maxWidth="xs">
              {flag ? (
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link
                      variant="body2"
                      onClick={() => {
                        setFlag((prevState) => (!prevState));
                      }}
                    >
                      Don't have an account? Sign Up
                    </Link>
                  </Grid>
                </Grid>
              ) : (
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link
                      variant="body2"
                      onClick={() => {
                        setFlag((prevState) => (!prevState));
                      }}
                    >
                      Have an account? Sign In
                    </Link>
                  </Grid>
                </Grid>
              )}
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};
