import contact from '../assets/images/connect.jpg';
const ContactUs = () => {
  return (
    <section
      id="contact"
      className="contact-us"
      style={{ backgroundImage: `url(${contact})` }}
    >
      <div className="container">
        <div className="contact-content">
          <h2>Let's Connect</h2>
          <p className="contact-intro">
            At It Figures Accounting, we're passionate about helping small
            businesses thrive. We love diving into numbers and finding ways to
            make your financial picture clearer and brighter. Our work isn't
            just about balancing books; it's about building relationships and
            watching our clients grow.
          </p>

          <div className="contact-methods">
            <div className="contact-method">
              <h3>Email</h3>
              <p>
                <a href="mailto:info@itfiguresaccounting.com">
                  info@itfiguresaccounting.com
                </a>
              </p>
            </div>
            <div className="contact-method">
              <h3>Phone</h3>
              <p>(555) 123-4567</p>
            </div>
          </div>

          <p className="contact-cta">
            We look forward to talking with you soon and exploring how we can
            support your business journey!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
