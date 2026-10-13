export default function WildPage() {
  const ToHome = (e) => {
    e.preventDefault();
    window.location.href = "/ij-portfolio/";
  };
  return (
    <div className="d-flex align-items-center flex-column">
      <div className="EasyText">Hello! There's nothing of interest here.</div>
      <button type="button" className="btn btn-dark EasyText" onClick={ToHome}>
        To Home
      </button>
    </div>
  );
}
