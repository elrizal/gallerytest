import React from 'react';
import { Parallax } from 'react-parallax';
import ScrollAnimation from 'react-animate-on-scroll';
import '../css/header.sass';
import Nav from '../components/nav';
import Zoom from 'react-reveal/Zoom';

const backGround = 'https://res.cloudinary.com/diuubtvqd/image/upload/v1572981281/bottom-marble.jpg'


const Home = () => (
  <div className="home-section">
    <Nav/>
    <div>
    <Parallax className="top" bgImage={backGround} strength={400}>
      <div style={{ height: 700 }}>
        <div className="titlecontain">
          <h1 className='header-title t-shadow'>Erin Leigh Rizal</h1>
        </div>
        <div className='marbfront animated fadeIn'>
        </div>
      </div>
    </Parallax>
    <div class="tile is-ancestor">
  <div class="tile is-vertical is-8">
    <div class="tile">
      <div class="tile is-parent is-vertical">
        <article class="tile is-child notification is-primary">
          <p class="title">Vertical...</p>
          <p class="subtitle">Top tile</p>
        </article>
        <article class="tile is-child notification is-warning">
          <p class="title">...tiles</p>
          <p class="subtitle">Bottom tile</p>
        </article>
      </div>
      <div class="tile is-parent">
 
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child notification is-danger">
        <p class="title">Wide tile</p>
        <p class="subtitle">Aligned with the right tile</p>
        <div class="content">
        </div>
      </article>
    </div>
  </div>
  <div class="tile is-parent">
    <article class="tile is-child notification is-success">
      <div class="content">
        <p class="title">Tall tile</p>
        <p class="subtitle">With even more content</p>
        <div class="content">
         
        </div>
      </div>
    </article>
  </div>
</div>
    <section class="section">
    <div class="container">
      <h1 class="title">Section</h1>
      <h2 class="subtitle">
        A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
      </h2>
    </div>
  </section>
    <div class="container">
    <p>Ad pariatur eiusmod nulla ex proident nulla anim amet ipsum aliqua anim ipsum. 
      Proident irure adipisicing enim aliqua ea sint ut reprehenderit elit nulla anim excepteur veniam excepteur. 
      Ut anim consectetur nostrud Lorem aliquip est laborum deserunt ut anim enim magna. 
      Laboris pariatur adipisicing mollit ullamco fugiat dolore nostrud labore esse exercitation ut duis quis anim.
       Eiusmod do et excepteur dolor quis nisi sunt labore ut veniam et in minim aliquip.
        Ad magna consectetur proident quis ea proident enim ex irure. 
        Consectetur excepteur sint in anim dolor tempor ad in velit occaecat culpa velit consequat.</p>
    </div>
    </div>
    <ScrollAnimation animateIn='fadeIn'>
        <div class="container is-fluid" ><h2>Showcase:</h2>
        <p> Here are sections with samples of work I have done for my clients and employers from 2011-2019 - </p></div>
        <div align='center' id='introgridc'>
          <a className='introgrid' href="/uxui">
          <img className='introgrid' src={'https://res.cloudinary.com/diuubtvqd/image/upload/v1555423791/work/ux.jpg'} alt='ux design'/> </a>
          <a className='introgrid' href="/branddesign">
          <img className='introgrid' src={'https://res.cloudinary.com/diuubtvqd/image/upload/v1555423791/work/branding.jpg'} alt='brand design'/> </a>
          <a className='introgrid' href="/dev">
          <img className='introgrid' src={'https://res.cloudinary.com/diuubtvqd/image/upload/v1555423791/work/web.jpg'} alt='web development'/></a>
          <a className='introgrid' href="/sm">
          <img className='introgrid' src={'https://res.cloudinary.com/diuubtvqd/image/upload/v1555423791/work/social.jpg'} alt='social media'/> </a>
        </div>  
        </ScrollAnimation>
        <Zoom>
  <p>Markup that will be revealed on scroll</p>
</Zoom>

  </div>
)

export default Home   