import React from 'react';
import { listArrowQuote } from "../data/arrowAndQuote";

const OurCustomers = (props) => {


  return (
    <section id="customers" className="ourCustomers">
      <h1 className="everyMiddleHeading">Our customers</h1>
      <h4 className="everySmallestHeading">Testimonials</h4>
      <img className="ourCustomers__quote" src={listArrowQuote[0].img13} alt="quote" />
      <div className="ourCustomers__mainPart">
        <img
          onClick={() => props.click('left')}
          className="ourCustomers__mainPart-arrowLeft"
          src={listArrowQuote[0].img11}
          loading="lazy"
          alt="arrowLeft"
        />

        <figure className="ourCustomers__figure">
          <p className="ourCustomers__figure-text">{props.text}</p>
          <div className="ourCustomers__figure-containerForWoman">
            <div className="onlyPicture">
              <img
                className="ourCustomers__figure-woman"
                src={props.image}
                loading="lazy"
                alt="woman"
              />
            </div>
            <figcaption className="ourCustomers__figure-dataWomen">
              <h1 className="ourCustomers__figure-bigerHeading">
                {props.bigerHeading}
              </h1>
              <h3 className="ourCustomers__figure-smallerHeading">
                {props.smallerHeading}
              </h3>
            </figcaption>
          </div>
          <div className="dots">
            <span
              className={
                props.index === 0 ? "dots__span active" : "dots__span"
              }
            ></span>
            <span
              className={
                props.index === 1 ? "dots__span active" : "dots__span"
              }
            ></span>
            <span
              className={
                props.index === 2 ? "dots__span active" : "dots__span"
              }
            ></span>
          </div>
        </figure>

        <img
          onClick={() => props.click('right')}
          className="ourCustomers__mainPart-arrowRight"
          src={listArrowQuote[0].img12}
          loading="lazy"
          alt="arrowRight"
          type="right"
        />
      </div>
    </section>
  );

}

export default OurCustomers;