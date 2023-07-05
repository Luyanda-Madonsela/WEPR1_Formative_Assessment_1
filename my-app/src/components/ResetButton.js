import React from 'react'
import { useState, useEffect } from "react";

function ResetButton({ reset }) {

  return (
    <button onClick={reset}>Reset Board</button>
  )
}

export default ResetButton