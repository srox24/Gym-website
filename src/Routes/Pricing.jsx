import React from 'react';

import "../styles/pricing.css"

const Pricing = () => {
  return (
    <>
  
    
    <div className="pricing">
      <h1>Our <span>Pricing</span></h1>
    <div class="pricing-table">
    {/* <!-- Pricing column --> */}
    <div class="pricing-table-column">
        {/* <!-- Title --> */}
        <h4>Silver Membership</h4>

        {/* <!-- Price --> */}
        <h3>$ 9/mo</h3>

        {/* <!-- Description --> */}
        <p>Basic Fitness</p>
        <p>Basic Fitness</p>
        <p>Basic Fitness</p>
        <p>Basic Fitness</p>

        {/* <!-- Button --> */}
        <button>Sign Up</button>
    </div>

    {/* <!-- Repeated pricing columns --> */}
    <div class="pricing-table-column">
        {/* <!-- Title --> */}
        <h4>Silver Membership</h4>

        {/* <!-- Price --> */}
        <h3>$ 9/mo</h3>

        {/* <!-- Description --> */}
        <p>Basic Fitness</p>
        <p>Basic Fitness</p>
        <p>Basic Fitness</p>
        <p>Basic Fitness</p>

        {/* <!-- Button --> */}
        <button>Sign Up</button>
    </div>

    <div class="pricing-table-column">
        {/* <!-- Title --> */}
        <h4>Silver Membership</h4>

        {/* <!-- Price --> */}
        <h3>$ 9/mo</h3>

        {/* <!-- Description --> */}
        <p>Basic Fitness</p>
        <p>Basic Fitness</p>
        <p>Basic Fitness</p>
        <p>Basic Fitness</p>

        {/* <!-- Button --> */}
        <button>Sign Up</button>
    </div>
</div>
</div>
</>
  )
}


export default Pricing