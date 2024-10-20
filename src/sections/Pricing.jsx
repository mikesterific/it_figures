const Pricing = () => {
  return (
    <section className="pricing">
      <div className="container">
        <h2>Our Bookkeeping Packages</h2>
        <p>
          Choose the package that best fits your business needs. All packages
          include our expertise and commitment to accurate, timely bookkeeping.
        </p>
        <div className="pricing-grid">
          <div className="pricing-tier">
            <h3>Tier 1: Basic Bookkeeping</h3>
            <div className="price">$100/month</div>
            <ul className="pricing-features">
              <li>Up to 50 transactions/month</li>
              <li>1 bank account & 1 credit card</li>
              <li>Monthly reconciliation</li>
              <li>Basic financial statements</li>
              <li>30-minute monthly consultation</li>
            </ul>
            <a href="#" className="pricing-cta">
              Get Started
            </a>
          </div>
          <div className="pricing-tier">
            <h3>Tier 2: Small Business Package</h3>
            <div className="price">$250/month</div>
            <ul className="pricing-features">
              <li>Up to 150 transactions/month</li>
              <li>2 bank accounts & 2 credit cards</li>
              <li>Monthly reconciliation</li>
              <li>Comprehensive financial statements</li>
              <li>Basic accounts payable management</li>
              <li>1-hour monthly consultation</li>
            </ul>
            <a href="#" className="pricing-cta">
              Get Started
            </a>
          </div>
          <div className="pricing-tier">
            <h3>Tier 3: Growing Business Package</h3>
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
            <a href="#" className="pricing-cta">
              Get Started
            </a>
          </div>
          <div className="pricing-tier">
            <h3>Tier 4: Comprehensive Business Package</h3>
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
            <a href="#" className="pricing-cta">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
