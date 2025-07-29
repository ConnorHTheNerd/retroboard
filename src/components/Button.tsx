// BROKEN - DO NOT USE

interface Props {
  children: string;
  type?: "primary" | "secondary" | "danger" | "success" | "info";
}

const Button = ({ children, type = "primary" }: Props) => {
  return (
    <button type="button" className={"btn btn-" + { type }}>
      {children}
    </button>
  );
};

export default Button;
