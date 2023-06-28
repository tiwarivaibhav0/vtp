import React from "react";

type Props = { data: any[] };

const ReactPro = (props: Props) => {
  return (
    <div className="grid">
      {props.data.map((it: number, i: number) => (
        <div className="grid_items">{it}</div>
      ))}
    </div>
  );
};

export default ReactPro;
