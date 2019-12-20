import React, { Component } from 'react';
import { useHistory } from "react-router-dom";

export default function Welcome() {
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}


 