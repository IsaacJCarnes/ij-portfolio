export default function WildPage() {
    const ToHome = (e) => {
        window.location.href = "/ij-portfolio/";
    }
  return (
    <div className="d-flex align-items-center flex-column">
      <div className="text-white">Hello! There's nothing of interest here.</div>
      <button type="button" class="btn btn-dark" onClick={ToHome}>To About Me</button>
    </div>
  );
}
