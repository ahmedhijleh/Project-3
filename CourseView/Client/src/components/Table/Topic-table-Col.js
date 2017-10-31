import React from "react";


export const List = ({ Topics }) => {
  return (
    <div className="Topics-List">
      <ul className="list-group">
        {Topics}
      </ul>
    </div>
  );
};
