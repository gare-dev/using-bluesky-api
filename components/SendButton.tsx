interface interfaceProps {
  onClick?: any;
}

export default function SendButton(props: interfaceProps) {
  return (
    <div>
      <button onClick={props.onClick}>Click me</button>
    </div>
  );
}
