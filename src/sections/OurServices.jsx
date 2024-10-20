import ourServicesBanner from '../assets/images/ourServices.jpg';

const OurServices = () => {
  return (
    <section
      id="our-services"
      className="services-detail"
      style={{ scrollMarginTop: '62px' }}
    >
      <div className="container">
        <h2>Our Services</h2>
        <img
          className="our-services-banner"
          src={ourServicesBanner}
          alt="Our Services"
        />
        <div className="services-grid two-columns">
          <div className="service-item">
            <h3>Monthly Bookkeeping</h3>
            <p>
              We maintain your books on a monthly basis, ensuring all
              transactions are accurately recorded and categorized. This
              includes reconciling bank statements, credit cards, and other
              financial accounts to keep your records up-to-date and error-free.
            </p>
          </div>
          <div className="service-item">
            <h3>Financial Statement Preparation</h3>
            <p>
              We prepare clear, comprehensive financial statements including
              income statements, balance sheets, and cash flow statements. These
              reports provide valuable insights into your business's financial
              health and performance, helping you make informed decisions.
            </p>
          </div>
          <div className="service-item">
            <h3>Payroll Solutions</h3>
            <p>
              We streamline your payroll process by helping you select, set up,
              and optimize the right payroll service for your business. Our
              expertise covers integration with your accounting software,
              automation for efficiency, and compliance guidance. We empower you
              to manage payroll effectively, saving time and ensuring accuracy,
              so you can focus on growing your business.
            </p>
          </div>
          <div className="service-item">
            <h3>Accounts Payable/Receivable</h3>
            <p>
              We manage your accounts payable and receivable processes,
              including invoice generation, bill payments, and tracking of
              customer payments. This helps improve cash flow management and
              maintains good relationships with your vendors and customers.
            </p>
          </div>
          <div className="service-item">
            <h3>Tax Readiness Preparation</h3>
            <p>
              While we don't directly prepare taxes, we provide valuable
              assistance in organizing and preparing your financial information
              for tax purposes. This includes generating necessary reports and
              working closely with your tax professional to ensure a smooth tax
              filing process.
            </p>
          </div>
          <div className="service-item">
            <h3>CPA Collaboration</h3>
            <p>
              Trusted by CPAs: Already have a CPA? We enjoy collaborating with
              your current tax professional.
            </p>
            <p>
              Need a CPA? We can help you choose one, whether from our trusted
              network or by finding a qualified professional in your area.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
