import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@material-ui/core";

const ContactForm = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [message, setMessage] = useState("");

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changeMessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <div className="contact-section">
        <Typography variant="h2">Contact Us </Typography>
        <Typography variant="h5">Name: {name} </Typography>
        <Typography variant="h5">Email: {email} </Typography>
        <Typography variant="h5">Message: {message} </Typography>
      </div>
      <form>
        <Grid spacing={2}>
          <Grid item xs={12} sm={6}>
            <label> Name: </label>
            <TextField id="name" name="name" onChange={changeName} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <label> Email: </label>
            <TextField
              type="email"
              id="email"
              name="email"
              onChange={changeEmail}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <label> Message: </label>
            <TextField
              type="text"
              id="message"
              name="message"
              onChange={changeMessage}
            />
          </Grid>
        </Grid>
        <Button
          className="contact-btn"
          color="primary"
          variant="contained"
          type="submit"
        >
          {" "}
          Submit{" "}
        </Button>
      </form>
    </>
  );
};

export default ContactForm;
