import Header from '../components/Header'
import Form from "../components/ContactForm";
import Footer from '../components/Footer'
import Description from '../components/Description';
export default function Contact() {
  return (
    <>
    <Header />
    <Description contact/>
      <Form />
      <Footer />
    </>
  );
}
