import React from 'react'

export default function Homepage() {
    return (
        <section className="card">
            <h2 className="card-header">About Me</h2>

            <img src="./Assets/Banner of me.png" className="card-img-top" alt="My smiling lo-res face on a soothing green background"/>
            <div className="card-body">

              <p>Hi!  I'm Nik Van Baak, a full-stack web developer who employs a strong background in psychological theory and practice to create out-of-the-box solutions and meet user needs.  As a team member, I draw on a unique work history in communications and behavior therapy to promote project excellence through high-quality communication.</p>
              <p>I am proficient in HTML, CSS, and Javascript.  Check out my work on <a href="https://github.com/nvanbaak?tab=repositories">Github!</a></p>
              <p>As a developer, I hope to build new tools that enhance the average person's ability to thrive in the world.  Ask me about my Augmented Executive Function project!</p>

            </div>
            <div className="card-header">
                <h3>Professional Resources:</h3>
            </div>
            <ul className="list-group list-flush">
                <li className="list-group-item">
                    <a  href="https://github.com/nvanbaak">My Github</a>
                </li>
                <li className="list-group-item">
                    <a  href="./Assets/nvanbaak-resume.pdf">My Resume</a>
                </li>
                <li className="list-group-item">
                    <a  href="https://www.linkedin.com/in/nick-van-baak-6b8973165/">My Linkedin</a>
                </li>
            </ul>
          </section>
    )
}
