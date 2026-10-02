import { useRef, useState } from "react";
import { LinearGradient } from "react-text-gradients";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { contactDetails } from "../constants/data";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const TO_NAME = import.meta.env.VITE_EMAILJS_TO_NAME;
const TO_EMAIL = import.meta.env.VITE_EMAILJS_TO_EMAIL;

/**
 * The Contact section of the website allows users to
 * submit a message to the website owner. The component renders a form with
 * name, email and message fields. When the form is submitted, the component
 * sends an email using EmailJS and displays a success or error message based
 * on the outcome of the email sending process.
 */
const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  /**
   * Handles the change of the form fields, updates the
   * component state with the new values.
   * @param {React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>} e - The change event.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  /**
   * Handles the form submission, sends an email using EmailJS
   * and displays a success or error message based on the
   * outcome of the email sending process.
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: TO_NAME,
          from_email: form.email,
          to_email: TO_EMAIL,
          message: form.message,
        },
        PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong!");
        }
      );
  };

  return (
    <section className="w-full flex justify-center mb-20 px-4" id="contact">
      <motion.div
        className="flex flex-col w-full max-w-7xl items-center justify-start"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="w-full text-left">
          <motion.h2
            className="mb-10 xl:text-5xl md:text-4xl sm:text-3xl text-2xl font-black !leading-normal"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <LinearGradient gradient={["to left", "#ff9720 ,#fc0865"]}>
              Get In Touch
            </LinearGradient>
            </motion.h2>
            <p className="text-white mb-8 text-sm md:text-base">
              {contactDetails.location}
              {" · "}
              <a
                className="underline decoration-[#ff9720]"
                href={`mailto:${contactDetails.email}`}
              >
                {contactDetails.email}
              </a>
              {" · "}
              <a
                className="underline decoration-[#ff9720]"
                href="tel:+923233666368"
              >
                {contactDetails.phone}
              </a>
            </p>
          </div>

        <div className="flex w-full max-w-lg bg-[#32303a] sm:p-8 p-6 rounded-xl text-white">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 w-full"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="py-3 px-4 bg-[#46454d] rounded-lg"
                placeholder="ex. John Doe"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Email address</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="py-3 px-4 bg-[#46454d] rounded-lg"
                placeholder="ex. johndoe@gmail.com"
              />
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-2">Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="py-3 px-4 bg-[#46454d] rounded-lg resize-none"
                placeholder="Share your thoughts..."
              />
            </label>

            <motion.button
              type="submit"
              className="bg-[#ff9720] text-black w-full sm:w-fit py-3 px-6 rounded-lg font-bold outline-none self-center sm:self-start"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {loading ? "Sending..." : "Send"}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
