import "./button.css";

export default function Button({ className, children, ...rest }) {
  return (
    <button {...rest} className="contentButton">
      {children}
    </button>
  );
}
