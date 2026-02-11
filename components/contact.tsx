"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Send, CheckCircle, AlertCircle, MapPin, Mail } from "lucide-react";

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e?.target ?? {};
    setFormData((prev) => ({ ...(prev ?? {}), [name ?? ""]: value ?? "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response?.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", companyName: "", message: "" });
      } else {
        const data = await response?.json?.();
        setErrorMessage(
          data?.error ?? "Something went wrong. Please try again.",
        );
        setStatus("error");
      }
    } catch (err) {
      console.error("Contact form error:", err);
      setErrorMessage("Failed to submit. Please try again later.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-gray-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#E53935] font-semibold text-sm uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
            Let's Start Your <span className="text-[#E53935]">Project</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to take your business to the next level? Contact us today for
            a free consultation and discover how we can help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#E53935] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Office Address</p>
                    <p className="text-gray-400 text-sm">
                      2nd Floor, No.8, Lane 13,
                    </p>
                    <p className="text-gray-400 text-sm">
                      Shangatang Street, Yuexiu District,
                    </p>
                    <p className="text-gray-400 text-sm">Guangzhou, China</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#E53935] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email Us</p>
                    <p className="text-gray-400 text-sm">
                      guangzhouxiang@guangzhouxiang.org
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-gray-900 mb-3">Business Hours</h4>
              <p className="text-gray-600 text-sm">
                Monday - Friday: 9:00 AM - 6:00 PM (CST)
              </p>
              <p className="text-gray-600 text-sm">
                Saturday: 10:00 AM - 4:00 PM (CST)
              </p>
              <p className="text-gray-500 text-sm mt-2">
                24/7 Emergency support available
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100"
            >
              {status === "success" ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="text-[#E53935] font-medium hover:underline"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData?.name ?? ""}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E53935] focus:ring-2 focus:ring-[#E53935]/20 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData?.email ?? ""}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E53935] focus:ring-2 focus:ring-[#E53935]/20 outline-none transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="companyName"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={formData?.companyName ?? ""}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E53935] focus:ring-2 focus:ring-[#E53935]/20 outline-none transition-all"
                      placeholder="Your Company Ltd."
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData?.message ?? ""}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#E53935] focus:ring-2 focus:ring-[#E53935]/20 outline-none transition-all resize-none"
                      placeholder="Tell us about your project or requirements..."
                    />
                  </div>

                  {status === "error" && (
                    <div className="mb-5 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <p className="text-red-700 text-sm">
                        {errorMessage || "Something went wrong"}
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-[#E53935] hover:bg-[#C62828] disabled:bg-gray-400 text-white font-semibold py-4 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    {status === "loading" ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    Your information is securely stored and will not be shared
                    with third parties.
                  </p>
                </>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
