import React from "react";
import { Tab } from "react-bootstrap";
function ToFItem({ key, tof }) {
  return (
    <>
      <Tab eventKey="food" title="1">
        {/* <div className="row">
          <div className="col-6">
            {products.map((product) => (
              <Food key={product.id} product={product} onAdd={onAdd} />
            ))}
          </div>
          <div className="col-6">
            {products.map((product) => (
              <Food key={product.id} product={product} />
            ))}
          </div>
        </div> */}
        {tof} - {key}
      </Tab>
    </>
  );
}

export default ToFItem;
