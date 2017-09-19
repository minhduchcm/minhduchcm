import React, { Component } from "react";

import "./about-page.scss";

class AboutMe extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="header">
          <section>
            <div className="info">
              <h2>Hi! I'm Đức</h2>
              <code>
                <span className="line">
                  <span className="token keywork">class</span>
                  <span className="token name">&nbsp;About</span>
                  <span className="token punctuation">&nbsp;{"{"}</span>
                </span>
                <span className="line">
                  <span className="tab" />
                  <span className="token name">fullName</span>
                  <span className="token operator">&nbsp;=&nbsp;</span>
                  <span className="token value">"Lê Minh Đức"</span>
                  <span className="token punctuation">;</span>
                </span>
                <span className="line">
                  <span className="tab" />
                  <span className="token name">desc</span>
                  <span className="token operator">&nbsp;=&nbsp;</span>
                  <span className="token value">"A fullstack developer"</span>
                  <span className="token punctuation">;</span>
                </span>
                <span className="line">
                  <span className="tab" />
                  <span className="token name">email</span>
                  <span className="token operator">&nbsp;=&nbsp;</span>
                  <a href="mailto:minhducle.hcm@gmail.com">
                    <span className="token value link">
                      "minhducle.hcm@gmail.com"
                    </span>
                  </a>
                  <span className="token punctuation">;</span>
                </span>
                <span className="line">
                  <span className="tab" />
                  <span className="token name">doWork</span>
                  <span className="token property">&nbsp;=&nbsp;</span>
                  <span className="token punctuation">
                    &nbsp;(&nbsp;)&nbsp;
                  </span>
                  <span className="token keywork">=></span>
                  <span className="token punctuation">&nbsp;{"{"}</span>
                </span>
                <span className="line">
                  <span className="tab" />
                  <span className="tab" />
                  <span className="token property">computer</span>
                  <span className="token punctuation">.</span>
                  <span className="token name">
                    createAwesomeStuff(&nbsp;);
                  </span>
                </span>
                <span className="line">
                  <span className="tab" />
                  <span className="token punctuation">{"};"}</span>
                </span>
                <span className="line">
                  <span className="token punctuation">{"};"}</span>
                </span>
                <span className="line">
                  <span className="token keywork">export default</span>
                  <span className="token name">&nbsp;About</span>
                  <span className="token punctuation">;</span>
                </span>
              </code>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default AboutMe;
