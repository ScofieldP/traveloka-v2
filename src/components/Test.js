import React, { Component, useState } from "react";
import { render } from "react-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
const Test = () => {
    const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
      });
    return (
        <div>
        <button onClick={() => setState({ isPaneOpen: true })}>
          Click me to open right pane!
        </button>
       
        <SlidingPane
          className="some-custom-class"
          overlayClassName="some-custom-overlay-class"
          isOpen={state.isPaneOpen}
          title="Hey, it is optional pane title.  I can be React component too."
          subtitle="Optional subtitle."
          width = '40%'
          onRequestClose={() => {
            // triggered on "<" on left top click or on outside click
            setState({ isPaneOpen: false });
          }}
        >
          <div>And I am pane content. BTW, what rocks?</div>
          <br />
          
        </SlidingPane>
      
      </div>
    );
  };

export default Test;
