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


  const definitionsFaqData = [
    {
      question: "What is a Trademark?",
      answer: "A trademark is a distinctive symbol, word, or phrase that is legally registered or established through use to represent a specific company or product. Trademarks serve as a means of identifying the source of goods and can include logos, brand names, and slogans. The primary purpose of a trademark is to prevent confusion in the marketplace by allowing consumers to identify the origin of a product or service."
    },
    {
      question: "What is a Service Mark?",
      answer: "A service mark functions similarly to a trademark, but it specifically identifies and distinguishes the source of a service rather than a product. Service marks are often used by businesses that provide services rather than tangible goods. The rights associated with a service mark are equivalent to those of a trademark, providing legal protection against unauthorized use."
    },
    {
      question: "What is a 'Good'?",
      answer: "'Good' refers to any tangible product that can be sold or traded in the marketplace. This can include items such as clothing, electronics, food products, and more. Goods are physical items that consumers can purchase and own, and they are typically the subject of trademark protection to help distinguish them from similar products."
    },
    {
      question: "What is a 'Service'?",
      answer: "A 'service' refers to an intangible benefit or satisfaction that is offered for sale. Services can encompass a wide range of activities, including consulting, legal advice, education, and maintenance. Unlike goods, services are not physical items but rather actions performed to meet a need or provide value to consumers."
    },
    {
      question: "What is a Patent?",
      answer: "A patent is a government grant that provides an inventor with exclusive rights to make, use, and sell an invention for a specific period, typically 20 years from the filing date. Patents are intended to encourage innovation by protecting inventors from unauthorized use of their inventions, ensuring that they can reap the financial benefits of their creations."
    },
    {
      question: "What is a Copyright?",
      answer: "Copyright is a legal right that grants the creator of an original work exclusive rights to its use and distribution. This includes rights to reproduce, distribute, perform, and display the work. Copyright applies to various forms of creative expression, including literature, music, art, and software, and generally lasts for the life of the author plus an additional number of years, depending on the jurisdiction."
    },
    {
      question: "What is a Common Law Trademark?",
      answer: "A common law trademark is a trademark that is established through actual use in commerce rather than through formal registration. These trademarks gain protection by being used in the marketplace, but their rights may be limited compared to registered trademarks. Common law trademarks can still be enforced in court, but proving their validity may be more challenging."
    },
    {
      question: "What is a specimen?",
      answer: "A specimen is a real-world example that demonstrates how a trademark is used in connection with a good or service. Acceptable specimens can include labels, tags, product packaging, advertising materials, or promotional items that clearly display the trademark in use. Specimens are crucial for trademark registration as they provide evidence of the mark's actual use in commerce."
    },
    {
      question: "What is an Intent to Use Application?",
      answer: "An Intent to Use Application is a filing with the United States Patent and Trademark Office (USPTO) that allows an applicant to reserve a trademark for future use. This type of application is filed when the applicant has not yet used the mark in commerce but intends to do so in the future. It provides the applicant with priority over others who may wish to register the same or similar mark."
    },
    {
      question: "What is a Statement of Use Application?",
      answer: "A Statement of Use Application is filed with the USPTO after a trademark has been used in commerce, providing proof that the trademark is in active use. This filing is necessary to convert an Intent to Use Application into a registered trademark. The Statement of Use must include a specimen showing the trademark's use in connection with the goods or services listed in the application."
    },
    {
      question: "What does 'Use' Mean?",
      answer: "'Use' refers to the application of a trademark in commerce, which typically involves selling or advertising products or services under the mark. To establish rights in a trademark, the owner must demonstrate that the mark is used in a manner that consumers associate it with the specific goods or services. Use can be actual (real sales of products) or constructive (the mark is registered)."
    },
    {
      question: "What is a Certification Mark?",
      answer: "A certification mark is used to certify that goods or services meet certain standards, quality, or characteristics set by an organization. Unlike trademarks, which indicate the source of goods, certification marks inform consumers that products or services possess a specific quality, origin, or mode of manufacture. Examples include marks for organic certification or quality assurance."
    },
    {
      question: "What is a Collective Mark?",
      answer: "A collective mark is a trademark used by a group or organization to identify and distinguish the goods or services of its members. This type of mark allows members of an association or cooperative to collectively promote their products or services under a shared brand. Collective marks can be used to communicate quality or membership in a specific group."
    },
    {
      question: "What is disclaiming a part of a mark?",
      answer: "Disclaiming a part of a mark means that the applicant acknowledges that a portion of the trademark is descriptive or generic and is not claiming exclusive rights to that part. This allows the applicant to focus on the distinctive elements of the mark that are eligible for protection while ensuring that others can use the descriptive or generic parts of the mark."
    },
    {
      question: "What is a Declaration of Incontestability?",
      answer: "A Declaration of Incontestability is a legal filing that can be made after a trademark has been in continuous use for five years following its registration. This declaration solidifies the trademark rights, making them stronger and harder to challenge. It provides the trademark owner with several advantages, including presumptive evidence of validity and the inability for others to contest the mark based on prior rights."
    },
    {
      question: "What is and when would I file under the Supplemental Register?",
      answer: "The Supplemental Register is for trademarks that do not qualify for the Principal Register but still have some distinctiveness. This register allows the mark to receive some benefits, such as the ability to use the ® symbol, but does not provide the same protections as the Principal Register. Businesses might file under the Supplemental Register if they wish to enhance their trademark's distinctiveness or if they are in the process of developing it further."
    },
    {
      question: "What do TM, SM, and ® signify?",
      answer: "The 'TM' symbol signifies that a word, name, or symbol is being claimed as a trademark, and it can be used for marks that are not officially registered. The 'SM' symbol serves the same purpose for service marks. The '®' symbol indicates that a trademark has been officially registered with the USPTO, providing the owner with enhanced legal protections against infringement."
    },
    {
      question: "What is a drawing?",
      answer: "A drawing in trademark applications is a visual representation of the trademark that shows how it appears. This can include logos, designs, or word marks and is a crucial part of the application process. The drawing must accurately depict the trademark as it is used in commerce and must meet specific USPTO requirements regarding format and clarity."
    },
    {
      question: "What is a dead or abandoned mark?",
      answer: "A dead or abandoned mark refers to a trademark that has been canceled or is no longer in use. This can occur when the owner fails to renew the trademark registration, does not file necessary maintenance documents, or voluntarily relinquishes their rights. Dead marks may become available for others to register if they are no longer protected."
    },
    {
      question: "Can an abandoned trademark be revived?",
      answer: "In certain circumstances, an abandoned trademark can be revived if the owner can prove the intent to continue use. This often involves showing that the owner has taken steps to resume use of the mark or has reestablished it in commerce. The process can be complex and may require legal assistance to navigate."
    },
    {
      question: "What is a Trademark Search?",
      answer: "A trademark search is a process of searching existing trademarks to determine if a similar mark is already registered or in use. This search helps identify potential conflicts before filing an application and can save time and resources by preventing infringement issues. Trademark searches can include searching the USPTO database, state trademark records, and common law sources."
    },
    {
      question: "What is a Common Law Search?",
      answer: "A Common Law Search involves searching for trademarks that are used but not registered, typically through business directories, online marketplaces, and social media. This type of search is essential for identifying unregistered marks that could pose a risk of infringement and helps businesses ensure they are not unintentionally violating existing rights."
    },
    {
      question: "What is trademark monitoring?",
      answer: "Trademark monitoring is the practice of regularly checking for potential infringements or unauthorized use of a trademark by others. This can involve tracking new trademark applications, monitoring online marketplaces, and conducting internet searches. Effective monitoring allows trademark owners to take timely action against infringing uses and protect their brand."
    }
  ];

  const applicationProcessFaqData = [
    {
        question: "What things will I need to provide to Trademark Genius to begin my application?",
        answer: "To initiate your application with Trademark Genius, you will need to supply several essential details regarding your trademark. This includes a comprehensive description of your mark, the specific goods or services it will represent, and a specimen demonstrating the mark's actual use in commerce. Providing accurate and detailed information at this stage is crucial to ensure a smooth application process."
    },
    {
        question: "What and how much is the USPTO Filing fee?",
        answer: "The filing fee for submitting a trademark application to the United States Patent and Trademark Office (USPTO) can vary significantly based on the type of application you are filing. For instance, the current fee for a TEAS Standard application is set at $350 per class of goods or services. It is important to note that additional fees may apply if you are seeking to file in multiple classes or if you need to make amendments to your application after submission."
    },
    {
        question: "Am I able to get a refund?",
        answer: "Once you have submitted your trademark application to the USPTO, it is essential to understand that the agency does not offer refunds. This policy means that if you change your mind or decide to withdraw your application after submission, you will not be able to recover the fees paid. Therefore, it is advisable to ensure that all information is accurate and that you are ready to proceed before filing your application."
    },
    {
        question: "How long does the USPTO processing take?",
        answer: "The processing time for trademark applications filed with the USPTO can vary widely depending on several factors, including the complexity of your application and the current workload of the USPTO. Typically, the registration process can take anywhere from 8 to 12 months. During this period, your application will undergo examination, and you may receive communications from the USPTO regarding any required changes or additional information needed."
    },
    {
        question: "Can I make changes to the mark after it has been filed?",
        answer: "After filing your trademark application, you may have some flexibility in making adjustments to your mark; however, this is limited. Minor changes can be accommodated before your application is published for opposition. Significant alterations that fundamentally change the identity of the mark, however, are not permissible and may lead to rejection of your application. It is crucial to finalize your mark before submitting your application to avoid complications later in the process."
    },
    {
        question: "What is an Office Action?",
        answer: "An Office Action is a formal communication issued by the USPTO that outlines reasons why your trademark application has been refused or why additional information is needed. These documents are critical as they provide specific feedback regarding the issues identified in your application. Responding to an Office Action promptly and thoroughly is essential to advance your application through the trademark registration process."
    },
    {
        question: "Where can I check the status of my application with the USPTO?",
        answer: "You can easily monitor the status of your trademark application by utilizing the USPTO's Trademark Status and Document Retrieval (TSDR) system. This online tool allows applicants to check the progress of their applications, view any documents related to their filing, and understand the current standing of their trademark status in real time."
    },
    {
        question: "How do I keep my mark protected after registration?",
        answer: "Maintaining the protection of your registered trademark is an ongoing responsibility. To ensure that your mark remains protected, you must continue to use it in commerce actively. Additionally, the USPTO requires that you file necessary maintenance documents, such as a Declaration of Use, every 5 to 10 years. Failing to meet these requirements can lead to the cancellation of your trademark registration."
    }
];

const basicQuestionsFaqData = [
    {
        question: "Why do trademarks get refused?",
        answer: "Trademark applications may be refused for a variety of reasons. Common causes include the proposed mark being too similar to an existing registered mark, being merely descriptive of the goods or services offered, or lacking distinctiveness. Understanding these potential pitfalls is crucial for applicants to navigate the registration process successfully."
    },
    {
        question: "What does my description need to include?",
        answer: "The description accompanying your trademark application must clearly and precisely specify the goods or services associated with your trademark. It is essential to avoid vague language and instead focus on being as detailed as possible, which helps ensure that your application is understood and processed correctly by the USPTO."
    },
    {
        question: "Why do I need to register a trademark when a common law trademark may already exist?",
        answer: "Registering a trademark provides additional legal protections and rights that are not available under common law. While common law trademarks can provide some level of protection, federal registration with the USPTO offers stronger legal standing, nationwide rights, and the ability to enforce your trademark against potential infringers."
    },
    {
        question: "Who holds the ultimate right to use and registration?",
        answer: "The first party to use the trademark in commerce generally holds the ultimate right to use and register it. This principle emphasizes the importance of demonstrating actual use of your trademark in the marketplace, as it establishes your claim to the mark and its associated rights."
    },
    {
        question: "Should I Trademark my logo as well?",
        answer: "Yes, if your logo is an important part of your brand identity, it is advisable to trademark it separately. A registered trademark for your logo can provide legal protection against unauthorized use and can strengthen your overall brand strategy by ensuring that your visual identity is safeguarded."
    },
    {
        question: "What category do I use for my product/service?",
        answer: "You will need to select one or more classes from the USPTO's list of goods and services that accurately describe your product or service. Understanding the correct classification is essential for ensuring that your trademark application is comprehensive and that your rights are appropriately protected."
    },
    {
        question: "Is my web address protected or do I need to register it as well?",
        answer: "A web address is not automatically protected as a trademark unless it functions as a source identifier for goods or services. If your web address serves as an integral part of your branding and helps consumers identify your business, it may be beneficial to seek trademark registration."
    },
    {
        question: "Do plurals of my trademark need to be registered separately?",
        answer: "No, plurals do not need separate registration as long as they are used in connection with the same goods or services. The trademark registration generally covers various forms of the mark, including its singular and plural versions, as long as they represent the same source."
    },
    {
        question: "What happens if someone is infringing?",
        answer: "If someone is infringing on your trademark, you have several options for addressing the issue. You can send a cease and desist letter to the infringer, outlining your rights and requesting that they stop using your mark. If necessary, you may also pursue legal action to enforce your trademark rights and seek remedies."
    },
    {
        question: "Can I sell, license or assign my mark?",
        answer: "Yes, you can sell, license, or assign your trademark rights to another party. This transfer of rights can be a strategic business decision, allowing you to monetize your trademark or expand your brand presence through licensing agreements."
    },
    {
        question: "What is software classified as?",
        answer: "Software can be classified as a product or service depending on its use and how it is sold. Understanding the correct classification is vital for trademark registration, as it affects the scope of protection you can obtain for your mark."
    },
    {
        question: "Can I trademark my book?",
        answer: "While you cannot trademark the content of a book, you may be able to trademark the title if it is part of a series or if it serves as a brand identifier. This distinction is important for authors who wish to protect their titles against unauthorized use."
    },
    {
        question: "Do I have to be a U.S. Citizen to register a mark?",
        answer: "No, you do not have to be a U.S. citizen to register a trademark with the USPTO. Foreign applicants can file for trademark registration, but they may need to appoint a U.S.-licensed attorney to represent them in the process."
    },
    {
        question: "Is a Federal Registration valid outside of the U.S.?",
        answer: "No, a federal registration is only valid within the United States. However, international protections can be sought through treaties like the Madrid Protocol, which allows trademark owners to seek protection in multiple countries through a single application."
    }
];




  return (
    <div className="container-xxl py-5" style={{ backgroundColor: "#f9f9f9", marginTop: "70px " }}>
      <div className="container">
        {/* FAQ Header */}
        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
          <h6 className="section-title bg-white text-center text-primary px-3" style={{ fontFamily: "Arial, sans-serif", fontWeight: "bold", padding: "10px 10px", margin: "30px", borderRadius: "5px", display: "inline-block" }}>
            Frequently Asked Questions
          </h6>
          <h1 className="mb-5" style={{ fontFamily: "Arial, sans-serif", fontSize: "36px", margin: "10px 0" }}>FAQs</h1>
        </div>

        {/* Disclaimer (Always Visible) */}
        <div className="disclaimer-section" style={{ marginBottom: "20px" }}>
          <h3 style={{ fontSize: "24px", fontWeight: "bold", fontFamily: "Arial, sans-serif" }}>Disclaimer</h3>
          <p style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.9", paddingTop: "30px" }}>
            The information provided in the Frequently Asked Questions (FAQ) section of this website is for general informational purposes only. While we strive to ensure that the content is accurate and up-to-date, we do not provide legal advice or act as a law firm. Trademark laws are complex, and registration requirements may vary depending on your specific situation
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