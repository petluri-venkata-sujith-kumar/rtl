import { ThemeProvider,createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";

const theme=createTheme({
    palette:{
        mode:"dark",
    }
})
type propsType={
    children:React.ReactNode
}
const AppProviders = ({children}:propsType) => {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline/>
      {children}
    </ThemeProvider>
  )
}

export default AppProviders
