import React from 'react';
import './firstTimeHomeBuyer.scss'; // You can style this page using this CSS file

const FirstTimeHomeBuyer = () => {
  return (
    <div className="firstTimeHomeBuyer">
      <h1>First Time Home Buyer Guide</h1>
      <p>
        Welcome to HomeConnect's First Time Home Buyer guide. We're here to help you through the process of purchasing your first home. Here are some steps and tips for you:
      </p>

      <h2>1. Budget</h2>
      <p>
        Determine your budget before you start your home search. This includes considering your down payment, monthly mortgage payments, and other costs like taxes and insurance.
      </p>

      <h2>2. Financing Options</h2>
      <p>
        Explore financing options such as FHA loans, VA loans, or conventional loans. Make sure to get pre-approved for a mortgage.
      </p>

      <h2>3. Choosing a Location</h2>
      <p>
        Think about the location where you want to buy your home. Consider factors like commute time, schools, local amenities, and future property values.
      </p>

      <h2>4. House Condition</h2>
      <p>
        Decide what kind of house condition you prefer. Do you want a newly built home, a fixer-upper, or something in between?
      </p>

      <h2>5. Timeline</h2>
      <p>
        Set a timeline for when you'd like to move into your new home. This will help streamline your search and offer process.
      </p>

      <h2>Resources</h2>
      {/* <ul>
        <li><a href="/mortgage-calculator">Mortgage Calculator</a></li>
        <li><a href="/real-estate-agents">Find a Real Estate Agent</a></li>
        <li><a href="/faq">Frequently Asked Questions</a></li>
      </ul> */}
    </div>
  );
};

export default FirstTimeHomeBuyer;
