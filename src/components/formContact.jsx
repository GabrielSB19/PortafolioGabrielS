import { createTheme, ThemeProvider } from "@mui/material/styles";
import { TextField, Button } from "@mui/material";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const FormContact = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#059669",
      },
      secondary: {
        main: "#059669",
      },
    },
  });

  const form = useRef();

  const sendEmail = (e) => {
    console.log("Hola que más");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_spvevcf",
        "template_cfhb5wd",
        form.current,
        "0iGmPKuzArM5RjjkA"
      )
      .then(
        () => {
          Swal.fire("Gran trabajo!", "El mensaje ha sido enviado!", "Hecho");
        },
        () => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Algo fallo!",
          });
        }
      );
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="md:w-[65%] p-3 w-[100%]">
        <form ref={form} onSubmit={sendEmail}>
          <h4 className="text-center text-xl font-medium mb-4">Contactame</h4>
          <div className="flex flex-row gap-3">
            <div className=" flex flex-col gap-6 w-[45%]">
              <TextField
                id="outlined-basic"
                label="Correo"
                variant="outlined"
                name="user_email"
              />
              <Button variant="contained" type="submit" sx={{ height: "55px" }}>
                Enviar correo
              </Button>
            </div>
            <div className="w-[100%] h-20 flex">
              <TextField
                name="message"
                id="outlined-multiline-static"
                label="Mensaje"
                multiline
                rows={4.5}
                defaultValue="Estoy interesado en contactarte"
                sx={{
                  width: "100%",
                }}
              />
            </div>
          </div>
        </form>
      </div>
    </ThemeProvider>
  );
};

export default FormContact;
