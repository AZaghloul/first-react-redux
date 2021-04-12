import React from "react";
import { connect } from "react-redux";
import { selectProduct } from "../actions";

const ProductsList = (props) => {
  const renderList = () => {
    return props.products.map((prd) => (
      <tr key={prd.id}>
        <td>{prd.name}</td>
        <td>
          <button
            onClick={() => props.selectProduct(prd)}
            className="btn btn-warning"
          >
            Select
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <table className="table">
      <tbody>{renderList()}</tbody>
    </table>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return { products: state.products };
};

export default connect(mapStateToProps, { selectProduct })(ProductsList);
