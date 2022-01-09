import React from "react";
import { Button, TextField } from "@mui/material";

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "300px",
    textAlign: "center"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "300px",
    margin: "0 auto",
  }
};

const Feedback = () => {
  return (
    <div style={styles.wrapper}>
      <h2>Обратная связь:</h2>
      <form style={styles.form}>
        <TextField label="Имя" variant="outlined" type="text" margin="normal" />
        <TextField label="Почта" type="email" margin="normal" />
        <TextField
            label="Текст..."
            type="text"
            margin="normal"
            multiline
            rows="4"
        />
        <Button variant="contained" type="submit">
          Отправить
        </Button>
      </form>
    </div>
  );
};

export default Feedback;
