// src/components/sections/Contact/Contact.jsx
import { useState } from "react";
import { Send } from "lucide-react";
import Reveal from "@/components/ui/Reveal/Reveal";
import SectionHeader from "@/components/ui/SectionHeader/SectionHeader";
import Button from "@/components/ui/Button/Button";
import { useToast } from "@/components/ui/Toast/Toast";
import { contactData } from "@/data/content";
import "./Contact.css";

const INITIAL = { name: "", email: "", phone: "", message: "" };

export default function Contact() {
  const { eyebrow, title, highlight, subtitle, web3formsKey, info, form } =
    contactData;
  const { toast } = useToast();
  const [values, setValues] = useState(INITIAL);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!values.name || !values.email || !values.message) {
      toast({
        variant: "error",
        title: "Campos obrigatórios",
        description: "Preencha nome, email e mensagem.",
      });
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3formsKey,
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message,
          subject: `Nova mensagem do portfólio — ${values.name}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          variant: "success",
          title: "Mensagem enviada!",
          description: "Obrigado pelo contato. Retorno em breve.",
        });
        setValues(INITIAL);
      } else {
        throw new Error(data.message || "Falha no envio");
      }
    } catch (error) {
      toast({
        variant: "error",
        title: "Erro ao enviar",
        description:
          "Tente novamente em instantes ou use o e-mail diretamente.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="contact" id="contato">
      <div className="contact__container">
        <Reveal>
          <SectionHeader
            eyebrow={eyebrow}
            title={title}
            highlight={highlight}
            subtitle={subtitle}
          />
        </Reveal>

        <div className="contact__grid">
          {/* Info */}
          <div className="contact__info">
            {info.map((item, index) => {
              const Icon = item.icon;
              const isExternal = item.link?.startsWith("http");
              const inner = (
                <>
                  <span className="contact__info-icon">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <span className="contact__info-text">
                    <span className="contact__info-label">{item.label}</span>
                    <span className="contact__info-value">{item.value}</span>
                  </span>
                </>
              );

              return (
                <Reveal key={item.id} delay={0.08 * index}>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="contact__info-item contact__info-item--link"
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="contact__info-item">{inner}</div>
                  )}
                </Reveal>
              );
            })}
          </div>

          {/* Formulário */}
          <Reveal direction="left">
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              {form.fields.map((field) => (
                <div className="field" key={field.id}>
                  <label className="field__label" htmlFor={field.id}>
                    {field.label}
                    {field.required && <span className="field__req">*</span>}
                  </label>
                  <input
                    className="field__input"
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    value={values[field.id]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required={field.required}
                  />
                </div>
              ))}

              <div className="field">
                <label className="field__label" htmlFor="message">
                  {form.message.label}
                  {form.message.required && (
                    <span className="field__req">*</span>
                  )}
                </label>
                <textarea
                  className="field__input field__textarea"
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={handleChange}
                  placeholder={form.message.placeholder}
                  required
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                fullWidth
                loading={submitting}
                icon={Send}
                className="contact__submit"
              >
                {submitting ? form.submitting : form.submit}
              </Button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
