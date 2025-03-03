import React, { useState } from "react";
import { Mail, Phone, Send, Github, Linkedin, Twitter } from "lucide-react";

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    const newErrors = {
      name: formData.name ? "" : "Name is required",
      email: !formData.email
        ? "Email is required"
        : !validateEmail(formData.email)
        ? "Please enter a valid email"
        : "",
      message: formData.message ? "" : "Message is required",
    };

    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    // Submit form
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className={`py-20 ${darkMode ? "bg-gray-800" : "bg-gray-50"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss a potential collaboration?
            I'd love to hear from you. Fill out the form below or reach out
            directly.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div
                  className={`p-3 rounded-full ${
                    darkMode ? "bg-gray-700" : "bg-blue-100"
                  } mr-4`}
                >
                  <Mail size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a
                    href="mailto:sahilnaliyadhara110@gmail.com"
                    className="text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    sahilnaliyadhara110@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div
                  className={`p-3 rounded-full ${
                    darkMode ? "bg-gray-700" : "bg-blue-100"
                  } mr-4`}
                >
                  <Phone size={20} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <a
                    href="tel:+91 9998284746"
                    className="text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    +91 9998284746
                  </a>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6">Follow Me</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className={`p-3 rounded-full ${
                  darkMode
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-white hover:bg-gray-100 border border-gray-200"
                } transition-colors shadow-md hover:shadow-lg`}
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className={`p-3 rounded-full ${
                  darkMode
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-white hover:bg-gray-100 border border-gray-200"
                } transition-colors shadow-md hover:shadow-lg`}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className={`p-3 rounded-full ${
                  darkMode
                    ? "bg-gray-700 hover:bg-gray-600"
                    : "bg-white hover:bg-gray-100 border border-gray-200"
                } transition-colors shadow-md hover:shadow-lg`}
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              className={`p-6 rounded-lg shadow-lg ${
                darkMode ? "bg-gray-700" : "bg-white border border-gray-100"
              }`}
            >
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg ${
                    darkMode
                      ? "bg-gray-800 border-gray-600 focus:border-blue-500"
                      : "bg-gray-50 border-gray-300 focus:border-blue-500"
                  } border outline-none transition-colors`}
                  placeholder="Your name"
                />
                {errors.name && (
                  <p className="mt-1 text-red-500 text-sm">{errors.name}</p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg ${
                    darkMode
                      ? "bg-gray-800 border-gray-600 focus:border-blue-500"
                      : "bg-gray-50 border-gray-300 focus:border-blue-500"
                  } border outline-none transition-colors`}
                  placeholder="Your email"
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                )}
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg ${
                    darkMode
                      ? "bg-gray-800 border-gray-600 focus:border-blue-500"
                      : "bg-gray-50 border-gray-300 focus:border-blue-500"
                  } border outline-none transition-colors`}
                  placeholder="Your message"
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center shadow-md hover:shadow-lg ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>

              {submitSuccess && (
                <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-lg">
                  Your message has been sent successfully. I'll get back to you
                  soon!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
