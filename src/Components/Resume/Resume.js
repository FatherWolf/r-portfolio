import resume from "./img/resimg.jpg"
export default function Resume() {
  return (
    <><section className="container-lg p-3 card">
      <article className="row ">
        <div className="col">
          <h2 id="resume">Resume</h2>
          <a href="https://docs.google.com/document/d/1WPNiJO-2sWUP-xiSfg-tTngNzdIqEHQD/edit?usp=sharing&ouid=107355233381663506756&rtpof=true&sd=true"
            className="btn-lg btn-info" role="button">Show Resume</a>
        </div>
      </article>
      <article className=" col m-5">
        <figure className="figure">

          <a href="https://fatherwolf.github.io/Password-Generator/">
            <img src={resume} className="figure-img img-fluid rounded imgmd p5"
              alt="assignments" /></a>

        </figure>

      </article>
    </section></>

  )
}