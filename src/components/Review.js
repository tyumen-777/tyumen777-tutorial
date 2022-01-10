import React from 'react';
import {Card, Typography} from "@mui/material";

const styles = {
    card: {
        display: "flex",
        flexDirection: "column",
        maxWidth: "300px",
        margin: "0 auto"
    }
}

const Review = () => {
    return (
        <Card style={styles.card}>
           <Typography variant="h5">Отзывы:</Typography>
        </Card>
    );
};

export default Review;