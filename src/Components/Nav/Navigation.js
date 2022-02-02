export default function Navbar(){

return(
  <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand">Austin Engle Portfolio</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <a className="nav-link active" href="#about">About Me <span className="sr-only">(current)</span></a>
        <a className="nav-link" href="#resume">Resume</a>
        <a className="nav-link" href="#work">Work</a>
        <a className="nav-link" href="#contact">Contact</a>
      </div>
    </div>
  </nav>
)
}