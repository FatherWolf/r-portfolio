import img1 from "./images/laptop.jpg"
import img2 from "./images/lock.jpg"
import img3 from "./images/matrix.jpg"
import img4 from "./images/sunshine.jpg"
import img5 from "./images/plants.jpg"
import img6 from "./images/sunshine.jpg"

export default function Project() {

  return (
    <>
    <section className="container-lg p-3">
      <article>
        <h2 id="work">Work</h2>

        <div className="row">
          <article className="col p-3">
            <figure className="figure">
              <h4>Plant Tracker</h4>
              <a href="https://desolate-stream-26867.herokuapp.com/">
                <img src={img5} id="large-img" className="figure-img img-fluid rounded"/>

                </a>
              <figcaption className="figure-caption">Application to track and share differnt house plants with friends.</figcaption>
            </figure>

          </article>
        </div>
      </article>
    </section><section className="container-lg p-3">
        <article className="row row-col-1 row-col-sm-2 row-col-md-3">


          <article className="col">
            <figure className="figure">
              <h4 className="h4">Password Generator</h4>
              <a href="https://fatherwolf.github.io/Password-Generator/">
                <img src={img2} className="figure-img img-fluid rounded imgmd"
                  alt="assignments"/></a>
              <figcaption className="figure-caption">A Password Generator I built using Jquery and Javascript as the main
                technologies</figcaption>
            </figure>

          </article>

          <article className="col">

            <figure className="figure">
              <h4 className="h4">Weather Dashbord</h4>
              <a href="https://jacobotaylor.github.io/band-weather-app/">
                <img src={img6}
                  alt="assignments"/></a>
              <figcaption className="figure-caption">A colabrative project where we built a site to show the weather and
                display a gif based off of the current forcast.</figcaption>
            </figure>

          </article>
          
          <article className="col">

            <figure className="figure">
              <h4 className="h4">Weather Dashbord</h4>
              <a href="https://jacobotaylor.github.io/band-weather-app/">
                <img src={img6}
                  alt="assignments"/></a>
              <figcaption className="figure-caption">A colabrative project where we built a site to show the weather and
                display a gif based off of the current forcast.</figcaption>
            </figure>

          </article>


          <article className="col">

            <figure className="figure">
              <h4 className="h4">Weather Dashbord</h4>
              <a href="https://jacobotaylor.github.io/band-weather-app/">
                <img src={img6}
                  alt="assignments"/></a>
              <figcaption className="figure-caption">A colabrative project where we built a site to show the weather and
                display a gif based off of the current forcast.</figcaption>
            </figure>

          </article>


          <article className="col">

            <figure className="figure">
              <h4 className="h4">Weather Dashbord</h4>
              <a href="https://jacobotaylor.github.io/band-weather-app/">
                <img src={img6}
                  alt="assignments"/></a>
              <figcaption className="figure-caption">A colabrative project where we built a site to show the weather and
                display a gif based off of the current forcast.</figcaption>
            </figure>

          </article>

        </article>
      </section>
      
      </>
  )
}