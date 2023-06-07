import "./GoogleButton.css";

interface GoogleButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function GoogleButton({ children, onClick }: GoogleButtonProps) {
  return (
    <div onClick={onClick} className="google-btn">
      <div className="google-icon-wrapper">
        <img
          className="google-icon"
          src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
        />
      </div>
      <p className="btn-text">
        <b>{children}</b>
      </p>
    </div>
  );
}
