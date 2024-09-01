import { createContext, useContext, useState } from "react";

interface interfaceProps {
  onChange?: any;
  value?: string
  text?: string
}

export default function InputText(props: interfaceProps) {


  return (
    <div>
      <input value={props.value} onChange={props.onChange} type="text" />
      <h2>{props.text}</h2>
    </div>
  );
}
