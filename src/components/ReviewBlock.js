import React from "react";
import { Card, Divider, Typography } from "@mui/material";
import Review from "./Review";

const styles = {
  card: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "300px",
    margin: "0 auto",
  },
};

const ReviewBlock = ({ comments, onDelete }) => {
  return (
    <Card style={styles.card}>
      <Typography variant="h5">Отзывы:</Typography>
      <Divider light />
      {!comments.length ? (
        <Typography variant="h6"> Отзывов еще нет</Typography>
      ) : (
        comments.map((text, index) => (
          <Review text={text} key={index} onDelete={onDelete} index={index} />
        ))
      )}
    </Card>
  );
};

export default ReviewBlock;
