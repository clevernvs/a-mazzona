import React from 'react';

export default function CheckoutSteps(props) {

  //  .checkout-steps > div {
  //    border-top: 0.3rem #c0c0c0 solid;
  //    color: #c0c0c0;
  //    flex: 1;
  //    padding: 1rem;
  //    font: bold;
  //  }
  //  .checkout-steps > div.activate {
  //    border-top-color: #f08000;
  //    color: #f08000;
  //  }

  return (
    <div className="row checkout-steps">
      <div className={props.step1 ? 'active' : ''}>Sign-In</div>
      <div className={props.step2 ? 'active' : ''}>Shipping</div>
      <div className={props.step3 ? 'active' : ''}>Payment</div>
      <div className={props.step4 ? 'active' : ''}>Place-Order</div>

    </div >
  )
}
