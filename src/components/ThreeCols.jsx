const ThreeCols = () => {
  return (
    <div className="threeColsWrap container section-grid">
      <section>
        <h2>Our Services</h2>
        <ul>
          <li>Monthly bookkeeping</li>
          <li>Financial statement preparation</li>
          <li>Payroll processing</li>
          <li>Accounts payable/receivable</li>
          <li>Tax Readiness Preparation</li>
          <li>CPA Collaboration</li>
        </ul>
        <a href="#our-services" className="link btn">
          Learn More
        </a>
      </section>

      <section>
        <h2>Why Choose Us</h2>
        <ul className="checkList">
          <li>Affordable pricing for startups and small businesses</li>
          <li>Personalized service tailored to your needs</li>
          <li>Expertise in small business finances</li>
          <li>Time-saving solutions to help you focus on growth</li>
          <li>Flexible, remote services</li>
        </ul>
        <a href="#our-approach" className="link btn">
          Our Approach
        </a>
      </section>

      <section>
        <h2>Get Started Today</h2>
        <p>
          Ready to simplify your bookkeeping? Contact us for a free consultation
          or to sign up for one of our affordable packages.
        </p>
        <ul>
          <li>📞 Phone: (555) 123-4567</li>
          <li>✉️ Email: info@itfiguresaccounting.com</li>
        </ul>
        <a href="#contact-us" className=" btn cta-button">
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default ThreeCols;
