import React from 'react'
import { toast } from "react-toastify";


export default function Test() {


  const notify = () => {
    toast.success("File uploaded successfully!");
  };
  return (
    <div>

      <button onClick={notify}>Show Toast</button>;
    </div>
  )
}
