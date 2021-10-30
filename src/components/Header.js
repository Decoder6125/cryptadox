import { AppBar, Container, Toolbar, Typography, createTheme, ThemeProvider, Select, MenuItem } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
const useStyles = makeStyles(() => ({
    title : {
          flex: 1,
          color: "gold",
          fontFamily: "Rubik",
          fontWeight: "bold",
          cursor: "pointer",
    }

 }));
const Header = () => {
    const classes = useStyles();
    const history = useHistory();
    const darkTheme = createTheme({
        palette: {
          primary: {
              main: "#fff",
          },
          type: "dark",
        },
      });
    return (
        <>
        <ThemeProvider theme={darkTheme}>
        <AppBar color="transparent" position="static">
            <Container>
                <Toolbar>
                    <Typography className={classes.title} onClick={()=> history.push("/")}>
                       <p>CRYPTADOX</p>
                    </Typography>
                    <Select variant="outlined" style={{
                       
                        width: "200",
                        height: "30",
                        marginRight: "15",
                    }}>
                        <MenuItem value="USD">USD</MenuItem>
                        <MenuItem value="INR">INR</MenuItem>
                    </Select>
                </Toolbar>
            </Container>
        </AppBar>
        </ThemeProvider>
        </>
    )
}

export default Header
