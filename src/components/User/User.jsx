import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();

  return (
    <>
      <div className="p-6 text-3xl font-bold">User Id : {userid}</div>
    </>
  );
}

export default User;
