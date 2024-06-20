interface Props {
  children: string;
  color?: string;
  onClick: () => void;
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <div>
      <button onClick={onClick} className={"btn btn-" + color}>
        {children}
      </button>
    </div>
  );
};

export default Button;
