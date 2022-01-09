import React from "react";
import { Button, TextField } from "@mui/material";

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
  const [name, setName] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <div style={styles.wrapper}>
      <h2>Обратная связь:</h2>
      <form style={styles.form} onSubmit={handleSubmit}>
        <TextField label="Имя" variant="outlined" type="text" margin="normal" value={name} onChange={handleChange}/>
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
