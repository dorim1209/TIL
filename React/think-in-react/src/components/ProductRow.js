import React from "react";

const ProductRow = props => {
  return (
    <tr>
      <td style={{ color: !props.stocked && "red" }}>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  );
};

export default ProductRow;
