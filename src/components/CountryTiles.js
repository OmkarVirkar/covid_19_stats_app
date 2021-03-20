import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";

import { red } from "@material-ui/core/colors";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        paddingTop: "56.25%",
        margin: "auto",
        width: "56%", // 16:9
    },
    expand: {
        transform: "rotate(0deg)",
        marginLeft: "auto",
        transition: theme.transitions.create("transform", {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: "rotate(180deg)",
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export const CountryTiles = (props) => {
    return (
        <Fragment>
            {props.countryItems.map((item) => (
                <Grid item xs={12} sm={3}>
                    <SingleCard itemData={item} />
                </Grid>
            ))}
        </Fragment>
    );
};

const SingleCard = (props) => {
    const classes = useStyles();
    let { Country, ISO2, active, confirmed, deaths, recovered } = props.itemData;
    /* let totals = await fetch(`https://api.covid19api.com/total/country/${Slug}`);
    let data = await totals.json();
    console.log(totals); */
    return (
        <Card className={classes.root} style={{ height: "100%" }}>
            <CardMedia className={classes.media} image={`https://www.countryflags.io/${ISO2}/flat/64.png`} title={Country} />
            <CardHeader title={Country} />

            <CardContent>
                <Grid container xs={12} spacing={2}>
                    <Grid item xs={12} sm={6}>
                        Active:{active}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        Confirmed:{confirmed}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        Deaths:{deaths}
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        Recovered:{recovered}
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};
