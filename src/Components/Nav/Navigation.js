
export default function Navbar({ changeTab }) {



  return (

    <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a href="/" className="navbar-brand">Austin Engle Portfolio</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" href="#about" key='about' onClick={() => changeTab('About')}>About Me <span className="sr-only"></span></a>
          <a className="nav-link" href="#resume" key='resume' onClick={() => changeTab('Resume')}>Resume</a>
          <a className="nav-link" href="#work" key='projects' onClick={() => changeTab('Projects')}>Projects</a>
          <a className="nav-link" href="#contact" key='contact' onClick={() => changeTab('Contact')}>Contact</a>
        </div>
      </div>
    </nav>
  )
}