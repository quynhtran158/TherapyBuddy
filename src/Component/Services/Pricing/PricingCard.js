import React from "react";
import "./PricingCard.css";

const Pricing = () => {
  return (
    <div className="content">
      <div className="description">
        <h1>
          Our <b>Plans</b> for your <b>strategies</b>
        </h1>
        <p>
          see below our three main plans for your business, for your startup and
          agency. <br /> it starts from here! You can teach yourself what you
          really like.
        </p>

        <div className="pricing-box">
          <div className="row">
            <div className="col-lg-4">
              <div className="price-box">
                {" "}
                <span className="price">$29</span>
                <div className="desc">
                  <div className="title">Easy</div>
                  <p>
                    All The basics for businesses. <br /> that are just getting
                    start
                  </p>
                </div>
                <hr />
                <ul>
                  <li>One Project</li>
                  <li> Your DashBored</li>
                </ul>
                <div className="buttonSelect">Get Easy</div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="price-box custom">
                {" "}
                <span className="price">$59</span>
                <div className="desc">
                  <div className="title">Basic</div>
                  <p>
                    better for growing businesses <br /> thant want more
                    customers
                  </p>
                </div>
                <hr />
                <ul>
                  <li> Two Projects</li>
                  <li> Your DashBored</li>
                  <li> components indclued</li>
                  <li> Advanced charts</li>
                </ul>
                <div className="buttonSelect custom">Get basic</div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="price-box">
                {" "}
                <span className="price">$139</span>
                <div className="desc">
                  <div className="title">Custom</div>
                  <p>
                    advanced features for pros who <br />
                    need more customization.
                  </p>
                </div>
                <hr />
                <ul>
                  <li> Two Projects</li>
                  <li> Your DashBored</li>
                  <li> components indclued</li>
                  <li> Advanced charts</li>
                </ul>
                <div className="buttonSelect">Get basic</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
