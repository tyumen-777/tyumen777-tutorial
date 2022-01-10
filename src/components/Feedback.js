import React from "react";
import { Button, TextField, Typography } from "@mui/material";

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "300px",
    textAlign: "center",
    margin: "0 auto",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "300px",
  },
};

const Feedback = () => {
  const [fields, setFields] = React.useState({
    fullName: "",
    email: "",
    createdAt: "",
    text: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFields({fullName: "", email: "", createdAt: "", text: ""})
    console.log(fields)
  };
  const handleChange = (e) => {
    setFields((prevState => {
      return {...prevState, [e.target.name]: e.target.value}
    }));
  }


  return (
    <div style={styles.wrapper}>
      <Typography variant="h5">Обратная связь:</Typography>
      <form style={styles.form} onSubmit={handleSubmit}>
        <TextField
          label="Имя"
          variant="outlined"
          type="text"
          margin="normal"
          value={fields.fullName}
          onChange={handleChange}
          name="fullName"
        />
        <TextField
          label="Почта"
          type="email"
          margin="normal"
          value={fields.email}
          onChange={handleChange}
          name="email"
        />
        <TextField
          label="Текст..."
          type="text"
          margin="normal"
          multiline
          rows="4"
          value={fields.text}
          onChange={handleChange}
          name="text"
        />
        <Button variant="contained" type="submit">
          Отправить
        </Button>
      </form>
    </div>
  );
};

export default Feedback;
