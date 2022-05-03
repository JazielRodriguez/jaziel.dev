import { useForm } from "react-hook-form";
import styles from "../styles/ContactForm.module.css";
import Container from "../components/Container";
export default function ContactForm() {
  const { handleSubmit, register } = useForm();
  const formHandler = async (data, e) => {
    e.preventDefault();
    const { name, email, message } = data;
    if (
      name.trim().length > 0 &&
      email.trim().includes("@") &&
      email.trim().length > 6 &&
      message.trim().length > 0
    ) {
      const response = await fetch("http://localhost:4000/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const json = await response.json();
      console.log(json);
      e.target.reset();
    }
  };
  const inputs = [
    { label: "Nombre", id: "name", register: "name", type: "text" },
    { label: "Email", id: "email", register: "email", type: "email" },
  ];
  return (
    <Container>
      <form onSubmit={handleSubmit(formHandler)} className={styles.form}>
        {inputs.map((i) => (
          <div key={i.id}>
            <label htmlFor={i.id}>{i.label}:</label>
            <input type={i.type} id={i.id} {...register(i.register)} />
          </div>
        ))}
        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea rows="4" id="message" {...register("message")}></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </Container>
  );
}
