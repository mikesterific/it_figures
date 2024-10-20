const OurServices = () => {
  return (
    <section className="services-detail">
      <div className="container">
        <h2>Our Services</h2>
        {/* <p>
          At It Figures Accounting, we offer a comprehensive range of
          bookkeeping services tailored to meet the needs of small businesses
          and startups. Our goal is to provide you with accurate, timely, and
          insightful financial management, allowing you to focus on growing your
          business.
        </p> */}
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
            <h3>Payroll Processing</h3>
            <p>
              Our payroll services cover everything from calculating wages and
              deductions to preparing and filing payroll taxes. We ensure your
              employees are paid accurately and on time, while keeping you
              compliant with all relevant regulations.
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
            <h3>Tax Preparation Assistance</h3>
            <p>
              While we don't directly prepare taxes, we provide valuable
              assistance in organizing and preparing your financial information
              for tax purposes. This includes generating necessary reports and
              working closely with your tax professional to ensure a smooth tax
              filing process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
