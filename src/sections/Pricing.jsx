const Pricing = () => {
  return (
    <section
      id="pricing"
      className="pricing"
      style={{ scrollMarginTop: '62px' }}
    >
      <div className="container">
        <h2>Our Bookkeeping Packages</h2>
        <div className="pricing-intro-container">
          <div className="pricing-intro-column">
            <p>
              Choose the package that best suits your business needs! Each of
              our packages comes with our dedicated expertise and a commitment
              to providing accurate, timely bookkeeping.
            </p>
          </div>
          <div className="pricing-intro-column">
            <p>
              If you find that our standard packages don't quite fit your budget
              or specific requirements, don't hesitate to reach out. We're here
              to create a tailored, cost-effective solution as unique as your
              business—because every unicorn deserves a custom approach!
            </p>
          </div>
        </div>
        <div className="pricing-grid">
          <div className="pricing-tier">
            <h3>Basic Bookkeeping</h3>
            <div className="price">$100/month</div>
            <ul className="pricing-features">
              <li>Up to 50 transactions/month</li>
              <li>1 bank account & 1 credit card</li>
              <li>Monthly reconciliation</li>
              <li>Basic financial statements</li>
              <li>30-minute monthly consultation</li>
            </ul>
          </div>
          <div className="pricing-tier">
            <h3>Small Business</h3>
            <div className="price">$250/month</div>
            <ul className="pricing-features">
              <li>Up to 150 transactions/month</li>
              <li>2 bank accounts & 2 credit cards</li>
              <li>Monthly reconciliation</li>
              <li>Comprehensive financial statements</li>
              <li>Basic accounts payable management</li>
              <li>1-hour monthly consultation</li>
            </ul>
          </div>
          <div className="pricing-tier">
            <h3>Growing Business</h3>
            <div className="price">$375/month</div>
            <ul className="pricing-features">
              <li>Up to 300 transactions/month</li>
              <li>3 bank accounts & 3 credit cards</li>
              <li>Monthly reconciliation</li>
              <li>Comprehensive financial statements</li>
              <li>Accounts payable & receivable management</li>
              <li>Basic payroll support (up to 5 employees)</li>
              <li>Quarterly financial review</li>
              <li>90-minute monthly consultation</li>
            </ul>
          </div>
          <div className="pricing-tier">
            <h3>Comprehensive Business</h3>
            <div className="price">$500/month</div>
            <ul className="pricing-features">
              <li>Up to 500 transactions/month</li>
              <li>4 bank accounts & 4 credit cards</li>
              <li>Monthly reconciliation</li>
              <li>Custom financial statements & reporting</li>
              <li>Full accounts payable & receivable management</li>
              <li>Payroll support (up to 10 employees)</li>
              <li>Basic inventory tracking</li>
              <li>Quarterly financial review & planning</li>
              <li>2-hour monthly consultation</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="pricing-cta-wrap">
        <h4>Customized Solutions for your budget</h4>
        <div className="pricing-cta-content">
          <p>
            Don&#39;t see a perfect fit? We understand that every business is
            unique. Contact us to discuss a tailored package that meets your
            specific requirements and budget. Our flexible approach ensures you
            get the bookkeeping support you need without paying for services you
            don&#39;t.
          </p>
          <a href="#contact" className="btn">
            Get in touch for a personalized quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
