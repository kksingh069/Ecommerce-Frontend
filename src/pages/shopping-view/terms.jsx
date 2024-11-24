import React from "react";
import Footer from '@/components/shopping-view/footer';
const terms = () => {
  return (
    <div>
  <style>
    {`
    .terms-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem 1rem;
      background-color: #f9f9f9;
    }

    .terms-heading {
      font-size: calc(2rem + 1vw);
      text-align: center;
      color: #222;
      margin-bottom: 2rem;
    }

    .terms-section {
      margin-bottom: 2rem;
    }

    .terms-subheading {
      font-size: 1.5rem;
      color: #5b627d;
      margin-bottom: 1rem;
    }

    .terms-section p {
      font-size: 1rem;
      line-height: 1.6;
      color: #666;
      margin-bottom: 1rem;
    }

    .terms-list {
      list-style-type: disc;
      padding-left: 1.5rem;
    }

    .terms-list li {
      font-size: 1rem;
      line-height: 1.6;
      color: #333;
      margin-bottom: 0.5rem;
    }

    @media (max-width: 768px) {
      .terms-container {
        padding: 1.5rem;
      }

      .terms-heading {
        font-size: 1.8rem;
      }

      .terms-subheading {
        font-size: 1.3rem;
      }

      .terms-section p,
      .terms-list li {
        font-size: 0.9rem;
      }
    }

    @media (max-width: 480px) {
      .terms-heading {
        font-size: 1.6rem;
      }

      .terms-subheading {
        font-size: 1.1rem;
      }

      .terms-section p,
      .terms-list li {
        font-size: 0.85rem;
      }

      .terms-container {
        padding: 1rem;
      }
    }
    `}
  </style>
  <div className="terms-container">
    <h1 className="terms-heading">Terms and Conditions</h1>

    <div className="terms-section">
      <h2 className="terms-subheading">General Terms</h2>
      <p>
        Welcome to Love Veda, your trusted source for natural soaps and shampoos.
      </p>
      <ul className="terms-list">
        <li>
          All purchases are subject to product availability and shipping timelines.
        </li>
        <li>
          Prices and availability are subject to change without prior notice.
        </li>
      </ul>
    </div>

    <div className="terms-section">
      <h2 className="terms-subheading">Payments and Refunds</h2>
      <ul className="terms-list">
        <li>
          Orders must be paid in full before shipping. Accepted payment methods
          include credit/debit cards and UPI.
        </li>
        <li>
          Refunds are only processed for damaged or defective items upon valid proof.
        </li>
      </ul>
    </div>

    <div className="terms-section">
      <h2 className="terms-subheading">Product Usage</h2>
      <ul className="terms-list">
        <li>
          Love Veda products are made from natural ingredients, but individual results may vary.
        </li>
        <li>
          Store products in a cool, dry place to maintain quality and effectiveness.
        </li>
      </ul>
    </div>

    <div className="terms-section">
      <h2 className="terms-subheading">Privacy Policy</h2>
      <ul className="terms-list">
        <li>
          We respect your privacy and are committed to protecting your personal information.
        </li>
        <li>
          Your data will only be used to process your order and improve our services.
        </li>
        <li>
          We do not share your information with third parties without your consent.
        </li>
      </ul>
    </div>

    <div className="terms-section">
      <h2 className="terms-subheading">Shipping and Delivery</h2>
      <ul className="terms-list">
        <li>
          We ship products across India with standard delivery timelines of 3-7 business days.
        </li>
        <li>
          Shipping fees may apply based on the order value and delivery location.
        </li>
        <li>
          Delays may occur due to unforeseen circumstances such as weather or carrier issues.
        </li>
      </ul>
    </div>

    <div className="terms-section">
      <h2 className="terms-subheading">Contact Us</h2>
      <p>
        For inquiries, issues, or feedback, please contact us:
      </p>
      <ul className="terms-list">
        <li>Email: support@loveveda.com</li>
        <li>Phone: +91-123-456-7890</li>
        <li>Address: Love Veda, 123 Greenway Road, Mumbai, India</li>
      </ul>
    </div>
  </div>
<Footer/>
</div>
  );
};

export default terms;
