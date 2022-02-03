import img1 from "./images/grass.jpg"
import img2 from "./images/lock.jpg"
import img3 from "./images/matrix.jpg"
import img4 from "./images/world.jpg"
import img5 from "./images/plants.jpg"
import img6 from "./images/sunshine.jpg"
import gitimg from "./images/gitimg.png"
export default function Project() {

  return (
    <>
      <section className="container-lg p-3">
        <article>
          <h2 id="work">Projects</h2>

          <div className="row">
            <article className="card col p-3 ">
              <figure className="figure">
                <h4>Plant Tracker</h4>
                <a href="https://desolate-stream-26867.herokuapp.com/">
                  <img src={img5} id="large-img" className="figure-img img-fluid rounded" alt="PlantTracker" />

                </a>
                <figcaption className="figure-caption text-dark">Application to track and share differnt house plants with friends.<a href="https://github.com/Johny49/plant-tracker">
                  <img src={gitimg} className="p-2"
                    alt="repo" /></a> </figcaption>
              </figure>

            </article>
          </div>
        </article>
      </section>
      <section className="container-fluid p-3">
        <article className="row">


          <article className="card col m-5">
            <figure className="figure">
              <h4 className="h4 text-dark">Password Generator</h4>
              <a href="https://fatherwolf.github.io/Password-Generator/">
                <img src={img2} className="figure-img img-fluid rounded imgmd"
                  alt="assignments" /></a>
              <figcaption className="figure-caption text-dark">A Password Generator I built using Jquery and Javascript as the main
                technologies. <a href="https://github.com/FatherWolf/Password-Generator">
                  <img src={gitimg} className="p-2"
                    alt="repo" /></a> </figcaption>
            </figure>

          </article>


          <article className="card col m-5">

            <figure className="figure">
              <h4 className="h4 text-dark">Weather Dashbord</h4>
              <a href="https://jacobotaylor.github.io/band-weather-app/">
                <img src={img6} className="figure-img img-fluid rounded imgmd"
                  alt="assignments" /></a>
              <figcaption className="figure-caption text-dark">A project where we built a site to show the weather and
                display a gif based off of the current forcast. <a href="https://github.com/jacobotaylor/band-weather-app">
                  <img src={gitimg} className="p-2"
                    alt="repo" /></a></figcaption>
            </figure>

          </article>
          <section />
          <section className="container">
            <div className="row">
              <article className="card col m-5">

                <figure className="figure">
                  <h4 className="h4 text-dark">Note Taker</h4>
                  <a href="https://note13taker.herokuapp.com/">
                    <img src={img1} className="figure-img img-fluid rounded imgmd"
                      alt="assignments" /></a>
                  <figcaption className="figure-caption text-dark">Application that allows you to take notes using local storage. <a href="https://github.com/FatherWolf/note-taker">
                    <img src={gitimg} className="p-2"
                      alt="repo" /></a></figcaption>
                </figure>

              </article>


              <article className="card col m-5">

                <figure className="figure">
                  <h4 className="h4 text-dark">Portfolio</h4>
                  <a href="https://fatherwolf.github.io/portfolio-project/">
                    <img src={img3} className="figure-img img-fluid rounded imgmd"
                      alt="assignments" /></a>
                  <figcaption className="figure-caption text-dark">My Real Portfolio <a href="https://github.com/FatherWolf/portfolio-project">
                    <img src={gitimg} className="p-2"
                      alt="repo" /></a></figcaption>
                </figure>

              </article>


              <article className="card col m-5">

                <figure className="figure">
                  <h4 className="h4 text-dark">Employee Tracker</h4>
                  <a href="https://drive.google.com/file/d/1vW_BtwUoQ0Ile_Cs8MhnWRel34bDDmBw/view">
                    <img src={img4} className="figure-img img-fluid rounded imgmd"
                      alt="assignments" /></a>
                  <figcaption className="figure-caption text-dark">Back end project using commands in terminal to view and add employees to a database. <a href="https://github.com/FatherWolf/employee-tracker">
                    <img src={gitimg} className="p-2"
                      alt="repo" /></a></figcaption>
                </figure>
              </article>
            </div>
          </section>
        </article>
      </section>

    </>
  )
}