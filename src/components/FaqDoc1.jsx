import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const faqData = [
  {
    question: "Which area does Dr. Aiswarya M.S practice?",
    answer: "Dr. Aiswarya M.S is a paediatrician practicing in Moonnupeedika and Irinjalakuda, Thrissur.",
  },
  {
    question: "Why do patients visit Dr. Aiswarya M.S?",
    answer:
      "Patients consult Dr. Aiswarya M.S for the treatment of Allergic rhinitis, Dermatitis, Autism, PCOD / PCOS, Renal calculi, Asthma, Eczema, Gastritis and duodenitis, ADHD - Attention deficit disorder with hyperactivity, Constantly crying infant, Nocturnal enuresis, Infertility, Hyperactive behavior, Speech problem.",
  },
  {
    question: "What is Dr. Aiswarya M.S's specialization?",
    answer:
      "Dr. Aiswarya M.S specializes in the treatment of Allergic rhinitis, Dermatitis, Autism, PCOD / PCOS, Renal calculi, Asthma, Eczema, Gastritis and duodenitis, ADHD - Attention deficit disorder with hyperactivity, Constantly crying infant, Nocturnal enuresis, Infertility, Hyperactive behavior, Speech problem.",
  },
  {
    question: "What is Dr. Aiswarya M.S's education qualification?",
    answer:
      "Dr. Aiswarya M.S is a paediatrician by training and has completed her BHMS MD (PAEDIATRICS) from MGR University in 2020, BHMS from MGR University in 2016, and holds a DIPLOMA in YOGA.",
  },
  {
    question: "What is the address of Dr. Aiswarya M.S's clinic?",
    answer:
      "Dr. Aiswarya M.S currently practices at BODY MIND HOMOEOPATHIC PAEDIATRIC CLINIC located at: MOONUPEEDIKA, NEAR TO HPCL PETROL PUMP, Aravusala East, Kaipamangalam P.O, Moonnupeedika and Dr. Aiswarya M S Homeopathic Clinic Located at opposite National school, Irinjalakuda, Kerala",
  },
  {
    question: "How many years of experience does Dr. Aiswarya M.S have?",
    answer: "Dr. Aiswarya M.S has over 6 years of clinical experience.",
  },
];

const FaqSection = () => {
  return (
    <section className="faq-section py-5">
      <Container>
        <h2 className="mb-4 fw-bold text-center">Frequently Asked Questions</h2>
        <Accordion defaultActiveKey="0" flush>
          {faqData.map((item, idx) => (
            <Accordion.Item eventKey={idx.toString()} key={idx} className="mb-3 ">
              <Accordion.Header>{item.question}</Accordion.Header>
              <Accordion.Body>{item.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  );
};

export default FaqSection;
