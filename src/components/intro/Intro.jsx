import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
// import img from '../../assets/Me.jpg'

// import ME from '../../assets/Rasif Tagizade image.jpg';


const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        {/* <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Rasif Taghizade" />
          </div>
        </div> */}
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2 years</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed Projects</small>
            </article>
          </div>
          <p>
          Hi Everyone, I am Anurag Tiwari from Mumbai,Maharashtra India.
I am a final-year student pursuing a Bachelor's Degree in Computer Engineering at the University of Mumbai. I wear two hats pretty well. One is the coding hat—I love figuring out the digital dance of bits and bytes, always looking for cool solutions and seeing what tech can pull off. Then there's the music hat, where I find peace banging on the keyboard and playing tunes that just feel right. But it's not all about screens and sounds for me. I'm also a traveler at heart. Exploring new places, soaking in different cultures, and just enjoying the beauty of the world keeps me curious and open-minded. Life's a mix of code, melodies, and adventures for me.







          </p>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <a href="#contact" className="btn btn-primary">
    Let's Talk
  </a>
</div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
