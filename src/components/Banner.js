import React from 'react'
import { Container, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(()=>({
      banner: {
          backgroundImage: "url(https://cdn.pixabay.com/photo/2018/02/01/17/15/dark-3123582_960_720.jpg)",
      },

      bannerContent: {
          height: 200,
          display: "flex",
          flexDirection: "column",
          paddingTop: 25,
          justifyContent: "space-around",
      },

      tagline: {
           display: "flex",
           justifyContent: "center",
           height: "40%",
           flexDirection: "column",
           textAlign: "center",
           

      },

}));

const Banner = () => {
    const classes= useStyles();

    return (
        <div className={classes.banner}>
            <Container className={classes.bannerContent}></Container>
            <div className={classes.tagline}>
            <Typography
            variant="h2"
            style={{
                fontWeight: "bold",
                marginBottom: 10,
                fontFamily: "montserrat",
            }}
            >
              Cryptadox
            </Typography>
            <Typography
                   variant="subtitle2"
                   style={{
                       color: "darkgrey",
                       fontFamily: "montserrat",
                       textTransform: "capitalize",
                   }}
            >
                Keep yourself updated on your favorite crypto currency
            </Typography>
            </div>
        </div>
    )
}

export default Banner
