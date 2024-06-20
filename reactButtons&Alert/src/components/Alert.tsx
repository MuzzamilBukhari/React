interface Props {
  children: string;
  onClose: () => void;
}
const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button onClick={onClose} className="btn-close"></button>
    </div>
  );
};

export default Alert;
