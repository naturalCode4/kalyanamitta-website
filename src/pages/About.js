import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './About.css';
import GoogleReviews from '../components/GoogleReviews';
import Section from '../components/Section';
import CTA from '../components/CTA';
import pic5 from '../assets/pic5.png';


const About = () => {

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>A Friend on the Path</h1>
            <p className="about-subtitle">
              Healing & Guidance Rooted in Love and Wisdom
            </p>
          </div>
        </div>
      </section>

      {/* About Adin */}
      {/* <section id="about-adin" className="about-adin section-rainbow">
        <div className="container">
          <div className="about-adin-content">
            <h2>About Adin</h2>
            <div className="about-image">
              <img 
                src={pic5}
                alt="Healing On Tap Pic" 
                className="about-image" 
              />
            </div> */}
      <section id="about-adin" className="about-adin section-rainbow">
        <div className="container">
          <h2>About Adin</h2>
          
          <div className="about-layout-grid"> {/* NEW WRAPPER */}
            
            {/* Image Container */}
            <div className="about-image-container">
              <img 
                src={pic5}
                alt="Adin Portrait" 
                className="about-profile-pic" 
              />
            </div>
            <div className="about-adin-text">
              <p>
                Adin is a healer and spiritual guide who helps people transform, heal, and align with their inherent wisdom and basic goodness. His mission is to support you however he can by offering powerful modalities, loving presence, and wisdom. His approach is integrative and personal– grounded in intuition, science, and various spiritual traditions. 
              </p>
              <p>
                His offerings are EFT (Emotional Freedom Techniques, or Tapping), Reiki Energy Healing, and Spiritual Counseling and Practices (Meditation, Yoga, Breathwork, Sound Healing).
              </p>
              <p>
                He currently lives in West Philadelphia, PA. He is a certified practitioner of Emotional Freedom Techniques (EFT), Reiki II, Yoga (500 YTT), and Breathwork. He has practiced in Zen, Tibetan, and Theravadan Buddhist lineages. He has also explored mysticism across Judaic, Christian, Sufi, and Taoist traditions, as well as yoga, qi gong, medicine work, shamanism, healing arts, psychic development, bhakti, and ecstatic dance—seeking what genuinely gives life, unclouds the pure heart, and supports positive transformation.
              </p>
              <h3>Story</h3>
              <p>
                When I was 15, I rapidly shifted from being quite depressed to undergoing a radical expansion in consciousness and access to peace and joy. It was as if my sense of self was deeply quieted, replaced by eternal and ecstatic peace. When this opened up, it felt like a natural continuation of who I'd always been. I remember in elementary school often preferring to lay in the grass watching the clouds rather than hang out with my friends, and spending hours wandering through my neighborhood in deep play—a state that's so vital for children to experience. I navigated this blissful state and discovered I could dissolve negative emotions in 60-90 seconds simply by letting them be. Around that time, I encountered a neat little book called <a href="https://www.bdk.or.jp/pdf/buddhist-scriptures/02_english/TheTeachingofBuddha.pdf" target="_blank">The Teachings of Buddha</a>, and it immediately read like poetry pointing to the truths of consciousness, our kind and pure nature, and our potential.
              </p>
              <p>
                After about six months of this, I struggled to integrate these experiences and insights with the rest of my human experience. With little cultural context or appreciation for what I was going through and the insights that were arising, I felt confused. Also, I had unresolved painful emotions and trauma that, with the greater awareness now present in me, had become more conscious. I'd formed the dualistic delusion that the expansive state I'd experienced was more 'real' than any other experience, which resulted in a lot of judgment and agitation toward other parts of myself. While these states may carry a higher truth frequency, we ought to awaken our entire integrated being into life. During this time, I immersed myself in Ram Dass's <a href="https://shop.ramdass.org/products/be-here-now?srsltid=AfmBOorSfDnrK1GqlrYAtMHW7Q3RTAsF_mq-qS2aa1RVtA9uVWQQSKMQ" target="_blank">Be Here Now</a>, resonating with it over and over; it had a big impact on me. It took time to integrate these expanded aspects of consciousness with my human and interpersonal self. Meeting and resolving pain from early childhood experiences is surely an ongoing journey—I'm still doing it—and I can help you do it too.
              </p>
              <p>
                At Wesleyan University, while studying music and engineering, I explored Buddhist meditation, Ashtanga Yoga, Shamanism, and eagerly pursued a more truthful knowing of the heart and mind. My friends and I were concerned about the stress and mental-performance-focused culture we saw both on campus and in society at large. We founded the Wesleyan Buddhist meditation club and created a really supportive space together. A friend who had spent a semester at <a href="https://zenstudies.org/dai-bosatsu-zendo/" target="_blank">Dai Bosatsu Zendo</a> brought our group there, where I got to experience meditation in a beautiful, traditional context. A wonderful non-profit organization, <a href="https://www.dharma-gates.org/" target="_blank">Dharma Gates</a>, arose from my friend group's desire to positively impact culture and wellness— which generously (without cost) offers immersions for young people in deep and authentic Buddhist meditation practice.
              </p> 
              <p>
                Since then I've explored many other kinds of contemplative practices. Each of the practices I offer today have had a very positive impact on me.
              </p> 
              <p>
                In April 2025, it occurred to me that I was ready to center my livelihood around what I already love and genuinely want to do—helping people. Obvious when I thought of it... But to be fair, I wasn't fully ready before then. Then, once I made a confident commitment to step into this work, Spirit sent me on quite a healing journey, which I believe purified me and prepared me to step more fully into service. This year I certified in Reiki II, <a href="https://trainwithsonya.us/" target="_blank">EFT</a>, yoga, and pranayama. Now I feel aligned, grounded, and empowered to offer this work from a place of depth, stability, and clear intention.
              </p>
              <h3>My Approach</h3>
              <p>
                My approach is grounded in empathy, intuition, clear guidance, spiritual knowledge, implementation of modalities, lived experience and overcoming personal challenges, as well as some beautiful gifts that have unfolded in my life and consciousness. Even when I draw on Buddhist and mystical traditions or science, I strive to root this in direct truth and present experience—which is, after all, what any good spiritual system should point to.
              </p>
              <p>
                I believe our challenges are palpably redeemed through developing compassion and the capacity to walk wisely with others navigating similar terrain. Much of my ability to guide comes from what I've experienced and overcome myself, what I can empathize with in you, understanding our shared path, and from years of practice supporting others.
             </p>
              <p>
                Truly, sometimes all we may really need is just someone to hear us, share presence, and validate our experience (without judgment or fixing). I am happy to be that person. I wish to be supportive to you and I'm open to what that looks like.
              </p> 
              <p>
               One gift I bring is grounding spirituality and practice with contemporary understandings and meeting individuals as they are. 
             </p>
              <p>
                My mission is to support you by offering loving presence, powerful modalities, and wisdom— with passion and integrity with my work, aka <a href="https://www.stillwatermpc.org/dharma-topics/right_livelihood_and_the_art_of_living/" target="_blank">Right Livelihood</a>. My approach is integrative and personal, grounded in intuition, science, and various spiritual traditions. I am fluent in different ways of speaking about these subjects— spiritual and scientific, mystical or ordinary, unfiltered or measured. I am also occasionally funny.
              </p>
              <p>
                If you're curious about how we might work together, I am too!
              </p>
              <h3>
                Healing is For Everyone
              </h3>
              <p>
                Across history and cultures, men have always been deeply involved in spiritual practice, meditation, and inner work. The explicit focus on emotional and shadow work is more of a modern development. Women have been leading the way in emotional and energetic healing in our culture, but men need this work just as much.
              </p>
              <p>
                In contemporary Western culture, many men have felt that healing isn't for them—that they had to choose between masculinity and emotional depth, authenticity, and healing.
              </p>
              <p>
                As a male practitioner committed to both spiritual practice and healing work (which are not separate), I'm here to show that this path is ours to walk too. I'm here to help dissolve the internal barriers we've accumulated. This work isn't gendered—it's human and transcendent. It is for all to claim, regardless of gender or cultural conditioning.
              </p>
              <p>
                To any man who has felt the pull toward transformation, emotional healing, and wellness— but been challenged by questions of cultural acceptability, wondered where there is a space for you, or whether you are even capable of it: Let's walk this path together.
              </p>
              <h3>
                Side Offerings
              </h3>
              <p>
                <b>Web Development</b>: I designed and developed this website solo from scratch (including these rainbows!). Building and designing high quality custom websites is my side hustle. I have some availability, so <a href="/contact#get-in-touch" target="_blank">get in touch</a> if you would like me to build your site/app. I am especially excited to develop for Dharma centers, healing practitioners, and environmentally/socially positive organizations— and I may give you a friend rate for the good fortune of building something I feel a heart-connection to. I'm currently developing this <a href="https://dharma-gates.vercel.app/" target="_blank">Dharma Center Directory</a>!
              </p>
              <p>
                <b>Music</b>: I play the keys. <a href="https://stoneboysolar.bandcamp.com/album/nomadic-improv" target="_blank">Here's the album</a> I released in 2025. It is my hope these nomadic improvisation brings you peace and close to your soul.
              </p>
              <h3>
                A Note on Teachers and Practice
              </h3>
              <p>
                I have a lot of respect for teachers who embody the great depths of practice and actualization. Those who have guided me in my spiritual development, particularly in meditation, are in some key ways more experienced and mature than I am (though we need not cling to hierarchies of advancement—we are all equal in our essential nature). I can truthfully say I have done rigorous spiritual practice, but many of my teachers have practiced 5x or 10x more (the eldest may have done 25x. <a href="https://staging.hvzc.org/our-lineage/harada-roshi/" target="_blank">For example</a> & <a href="https://plumvillage.org/about/thich-nhat-hanh/biography" target="_blank">for example</a>) and dedicated their lives in more profound ways. I don't claim to match their capacity for spiritual transmission. If you have a profound longing for awakening, I can help point you to excellent practice communities and teachers, and I'll remain a friend and support on your path. We can generally guide others to the degree of our own realization. I'm not an NBA star, so I can't train you to be an NBA star. 
              </p>
              <p>
                Much gratitude and love to everyone who has supported me or taught me anything worth teaching.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials-section section-light">
        <div className="container">
          <h2>Testimonials</h2>
          <GoogleReviews />
        </div>
      </section>
      
    </div>
  );
};

export default About;