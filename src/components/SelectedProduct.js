import React from "react";
import { connect } from "react-redux";

const SelectedProducet = (props) => {
  if (!props.product) return <h3>Select Product To Show Details!</h3>;

  const { name, price } = props.product;

  return (
    <div>
      <h2>Details For:</h2>
      <h1>{name}</h1>
      <h3>{price}</h3>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { product: state.selectedProduct };
};

export default connect(mapStateToProps)(SelectedProducet);
