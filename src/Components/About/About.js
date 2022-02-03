import Meimg from "./imagesA/me.jpg"


export default function About() {


  return (

    <>
      <img id="pic" src={Meimg} className="rounded mx-auto d-block img-thumbnail" alt="My Profile Pic" /><section className="container p-3" /><article className="card p-2" >
        <h2 id="about">About Me</h2>
        <p>
          My name is Austin Engle and I have recently completed a full stack developer bootcamp with UNCC. I have had a passion for coding for many years but decided to take the dive into a full-time bootcamp. I focus mainly on front end technologies and I am looking to persue a career as a software engineer.

        </p>
        <h2>Tech Stack:</h2>
        <ol className="p-4">
          <ol>Html</ol>
          <ol>Css</ol>
          <ol>Javascript</ol>
          <ol>React.js</ol>
          <ol>NoSql</ol>
          <ol>Node.js</ol>
          <ol>Express.js</ol>
        </ol>
      </article>
    </>
  )
}