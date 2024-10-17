import React, { useState } from "react";

export default function Cources() {

// Separate toggle states for each section
const [showSection, setShowSection] = useState({
  definitions: false,
  applicationProcess: false,
  basicQuestions: false,
});

// Separate selected FAQ for each section
const [selectedFaq, setSelectedFaq] = useState({
  definitions: null,
  applicationProcess: null,
  basicQuestions: null,
});

// Toggle section visibility
const toggleSection = (section) => {
  setShowSection({ ...showSection, [section]: !showSection[section] });
};

// Toggle individual FAQ
const toggleFaq = (section, index) => {
  setSelectedFaq({
    ...selectedFaq,
    [section]: selectedFaq[section] === index ? null : index,
  });
};


  const definitionsFaqData  = [
    { question: "What is a Trademark?", answer: "A trademark is a symbol, word, or phrase legally registered or established by use as representing a company or product." },
    { question: "What is a Service Mark?", answer: "A service mark is similar to a trademark, but it identifies and distinguishes the source of a service rather than a product." },
    { question: "What is a 'Good'?", answer: "'Good' refers to any tangible product that can be sold or traded." },
    { question: "What is a 'Service'?", answer: "A 'service' refers to an intangible benefit or satisfaction that is offered for sale." },
    { question: "What is a Patent?", answer: "A patent is a government grant that gives an inventor the exclusive right to make, use, and sell an invention for a certain number of years." },
    { question: "What is a Copyright?", answer: "Copyright is a legal right that grants the creator of original work exclusive rights to its use and distribution." },
    { question: "What is a Common Law Trademark?", answer: "A common law trademark is a trademark that is established through actual use in commerce, rather than through registration." },
    { question: "What is a specimen?", answer: "A specimen is a real-world example of how exactly the trademark is used with a good or service. Some examples of appropriate specimens include tags, product packaging, or advertisements for services." },
    { question: "What is an Intent to Use Application?", answer: "An Intent to Use Application is a filing with the USPTO to reserve a trademark for future use when the applicant has not yet used the mark in commerce." },
    { question: "What is a Statement of Use Application?", answer: "A Statement of Use Application is filed with the USPTO after the trademark has been used in commerce, providing proof of use." },
    { question: "What does 'Use' Mean?", answer: "'Use' refers to the application of a trademark in commerce, which typically involves selling or advertising products or services under the mark." },
    { question: "What is a Certification Mark?", answer: "A certification mark is used to certify that goods or services meet a certain standard, quality, or characteristic." },
    { question: "What is a Collective Mark?", answer: "A collective mark is a trademark used by a group or organization to identify and distinguish the goods or services of its members." },
    { question: "What is disclaiming a part of a mark?", answer: "Disclaiming a part of a mark means that the applicant acknowledges that a portion of the trademark is descriptive or generic and is not claiming exclusive rights to that part." },
    { question: "What is a Declaration of Incontestability?", answer: "A Declaration of Incontestability is a filing that can be made to solidify the rights of a trademark that has been in continuous use for five years after registration." },
    { question: "What is and when would I file under Supplemental Register?", answer: "The Supplemental Register is for trademarks that do not qualify for the Principal Register but still have some distinctiveness. Filing allows the mark to receive some benefits but does not provide the same protections as the Principal Register." },
    { question: "What do TM, SM, and ® signify?", answer: "The 'TM' symbol signifies that a word, name, or symbol is being claimed as a trademark. The 'SM' symbol does the same for service marks. The '®' symbol can only be used with trademarks that have been officially registered with the USPTO." },
    { question: "What is a drawing?", answer: "A drawing in trademark applications is a visual representation of the trademark that shows how it appears." },
    { question: "What is a dead or abandoned mark?", answer: "A dead or abandoned mark refers to a trademark that has been canceled or is no longer in use." },
    { question: "Can an abandoned trademark be revived?", answer: "In certain circumstances, an abandoned trademark can be revived if the owner can prove the intent to continue use." },
    { question: "What is a Trademark Search?", answer: "A trademark search is a process of searching existing trademarks to determine if a similar mark is already registered or in use." },
    { question: "What is a Common Law Search?", answer: "A Common Law Search involves searching for trademarks that are used but not registered, typically through business directories, online marketplaces, and social media." },
    { question: "What is trademark monitoring?", answer: "Trademark monitoring is the practice of regularly checking for potential infringements or unauthorized use of a trademark by others." }
  ];
  const applicationProcessFaqData  = [
    { question: "What things will I need to provide to Trademark Genius to begin my application?", answer: "You will need to provide details about your mark, including its use in commerce, the goods/services it will represent, and a specimen showing the mark in use." },
    { question: "What and how much is the USPTO Filing fee?", answer: "The USPTO filing fee varies depending on the type of application. The current fee for a TEAS Standard application is $350 per class." },
    { question: "Am I able to get a refund?", answer: "The USPTO does not offer refunds once the application has been submitted." },
    { question: "How long does the USPTO processing take?", answer: "USPTO processing times vary, but typically it takes around 8 to 12 months to register a trademark." },
    { question: "Can I make changes to the mark after it has been filed?", answer: "Minor changes can be made before publication, but significant changes that alter the mark's identity are not allowed." },
    { question: "What is an Office Action?", answer: "An Office Action is a document issued by the USPTO explaining why your trademark application is being refused or requiring additional information." },
    { question: "Where can I check the status of my application with the USPTO?", answer: "You can check the status of your application using the USPTO's Trademark Status and Document Retrieval (TSDR) system." },
    { question: "How do I keep my mark protected after registration?", answer: "To keep your mark protected, you must continue to use it in commerce and file required maintenance documents, such as a Declaration of Use, every 5 to 10 years." }
];
const basicQuestionsFaqData = [
  { question: "Why do trademarks get refused?", answer: "Trademarks can be refused for various reasons, such as being too similar to an existing mark, being merely descriptive, or lacking distinctiveness." },
  { question: "What does my description need to include?", answer: "Your description needs to clearly specify the goods or services associated with your trademark." },
  { question: "Why do I need to register a trademark when a common law trademark may already exist?", answer: "Registering a trademark provides additional legal protections and rights that are not available under common law." },
  { question: "Who holds the ultimate right to use and registration?", answer: "The first party to use the trademark in commerce generally holds the ultimate right to use and register it." },
  { question: "Should I Trademark my logo as well?", answer: "Yes, if your logo is an important part of your brand, it is advisable to trademark it separately." },
  { question: "What category do I use for my product/service?", answer: "You will need to select one or more classes from the USPTO's list of goods and services that accurately describe your product or service." },
  { question: "Is my web address protected or do I need to register it as well?", answer: "A web address is not automatically protected as a trademark unless it functions as a source identifier for goods or services." },
  { question: "Do plurals of my trademark need to be registered separately?", answer: "No, plurals do not need separate registration as long as they are used in connection with the same goods or services." },
  { question: "What happens if someone is infringing?", answer: "If someone is infringing on your trademark, you can send a cease and desist letter or pursue legal action." },
  { question: "Can I sell, license or assign my mark?", answer: "Yes, you can sell, license, or assign your trademark rights." },
  { question: "What is software classified as?", answer: "Software can be classified as a product or service depending on its use and how it is sold." },
  { question: "Can I trademark my book?", answer: "You cannot trademark the content of a book, but you may be able to trademark the title if it is part of a series." },
  { question: "Do I have to be a U.S. Citizen to register a mark?", answer: "No, you do not have to be a U.S. citizen to register a trademark with the USPTO." },
  { question: "Is a Federal Registration valid outside of the U.S.?", answer: "No, a federal registration is only valid within the United States, but international protections can be sought through treaties like the Madrid Protocol." }
];



return (
  <div className="container-xxl py-5" style={{ backgroundColor: "#f9f9f9", padding: "50px 0" }}>
    <div className="container">
      {/* FAQ Header */}
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3" style={{ fontFamily: "Arial, sans-serif", fontWeight: "bold", padding: "10px 20px", borderRadius: "5px", display: "inline-block" }}>
          Frequently Asked Questions
        </h6>
        <h1 className="mb-5" style={{ fontFamily: "Arial, sans-serif", fontSize: "36px", margin: "30px 0" }}>FAQs</h1>
      </div>

      {/* Disclaimer (Always Visible) */}
      <div className="disclaimer-section" style={{ marginBottom: "20px" }}>
        <h3 style={{ fontSize: "24px", fontWeight: "bold", fontFamily: "Arial, sans-serif" }}>Disclaimer</h3>
        <p style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6", paddingTop: "10px" }}>
          Trademark Genius does not operate as a law firm. No information on our website is to be used as legal advice...
        </p>
      </div>

      {/* Definitions Section */}
      <div className="faq-section">
        <div onClick={() => toggleSection("definitions")} className="faq-heading" style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", fontSize: "24px", fontWeight: "bold" }}>
          Definitions
          <span>{showSection.definitions ? "▲" : "▼"}</span>
        </div>
        {showSection.definitions && (
          <div className="faq-list">
            {definitionsFaqData.map((item, index) => (
              <div key={index} className="faq-item" style={{ marginBottom: "10px", borderBottom: "1px solid #eaeaea", paddingBottom: "10px" }}>
                <div onClick={() => toggleFaq("definitions", index)} className="faq-question" style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0" }}>
                  <h5 style={{ fontFamily: "Arial, sans-serif", fontSize: "20px" }}>{item.question}</h5>
                  <span>{selectedFaq.definitions === index ? "-" : "+"}</span>
                </div>
                {selectedFaq.definitions === index && <p className="faq-answer" style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.5", marginTop: "10px" }}>{item.answer}</p>}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Application Process Section */}
      <div className="faq-section">
        <div onClick={() => toggleSection("applicationProcess")} className="faq-heading" style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", fontSize: "24px", fontWeight: "bold" }}>
          Application Process
          <span>{showSection.applicationProcess ? "▲" : "▼"}</span>
        </div>
        {showSection.applicationProcess && (
          <div className="faq-list">
            {applicationProcessFaqData.map((item, index) => (
              <div key={index} className="faq-item" style={{ marginBottom: "10px", borderBottom: "1px solid #eaeaea", paddingBottom: "10px" }}>
                <div onClick={() => toggleFaq("applicationProcess", index)} className="faq-question" style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0" }}>
                  <h5 style={{ fontFamily: "Arial, sans-serif", fontSize: "20px" }}>{item.question}</h5>
                  <span>{selectedFaq.applicationProcess === index ? "-" : "+"}</span>
                </div>
                {selectedFaq.applicationProcess === index && <p className="faq-answer" style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.5", marginTop: "10px" }}>{item.answer}</p>}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Basic Questions Section */}
      <div className="faq-section">
        <div onClick={() => toggleSection("basicQuestions")} className="faq-heading" style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", fontSize: "24px", fontWeight: "bold" }}>
          Basic Questions
          <span>{showSection.basicQuestions ? "▲" : "▼"}</span>
        </div>
        {showSection.basicQuestions && (
          <div className="faq-list">
            {basicQuestionsFaqData.map((item, index) => (
              <div key={index} className="faq-item" style={{ marginBottom: "10px", borderBottom: "1px solid #eaeaea", paddingBottom: "10px" }}>
                <div onClick={() => toggleFaq("basicQuestions", index)} className="faq-question" style={{ cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0" }}>
                  <h5 style={{ fontFamily: "Arial, sans-serif", fontSize: "20px" }}>{item.question}</h5>
                  <span>{selectedFaq.basicQuestions === index ? "-" : "+"}</span>
                </div>
                {selectedFaq.basicQuestions === index && <p className="faq-answer" style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.5", marginTop: "10px" }}>{item.answer}</p>}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
);
}