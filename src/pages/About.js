import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './About.css';
import GoogleReviews from '../components/GoogleReviews';

const About = () => {

  const { hash } = useLocation();

  // Fix: Manually scroll to the section if a hash exists in the URL
  useEffect(() => {
    if (hash) {
      // Small timeout ensures DOM is ready before scrolling
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>A Friend on the Path</h1>
            <p className="about-subtitle">
              Offering powerful modalities, loving presence, and ancient wisdom
            </p>
          </div>
        </div>
      </section>

      {/* About Adin */}
      <section id="about-adin" className="about-adin section-rainbow">
        <div className="container">
          <div className="about-adin-content">
            <h2>About Adin</h2>
            <div className="about-image">
              <div className="placeholder-image">
                <span>Profile Image</span>
              </div>
            </div>
            <div className="about-adin-text">
              <p>Adin is a healer and spiritual guide who helps people transform, heal, and align with their inherent wisdom and basic goodness. His mission is to support you however he can by offering powerful modalities, loving presence, and wisdom—practicing Right Livelihood in doing so. His approach is integrative and personal, grounded in intuition, science, and various spiritual traditions.
              </p>
              <p>He currently lives in West Philadelphia, PA. He is a certified practitioner of Emotional Freedom Techniques (EFT), Reiki II, Yoga, and Breathwork. He has practiced extensively in Zen, Tibetan, and Theravadan Buddhist lineages. He has also explored mysticism across Judaic, Christian, Sufi, and Taoist traditions, as well as yoga, qi gong, medicine work, shamanism, healing arts, psychic development, bhakti, and ecstatic dance—seeking what genuinely gives life, unclouds the pure heart, and supports positive transformation.</p>
              <h3>Story</h3>
              <p>
                When I was 15, I rapidly shifted from being quite depressed to undergoing a radical expansion in consciousness and access to peace and happiness. It was as if my sense of self deeply quieted, replaced by eternal and ecstatic peace. When this opened up, it felt like a natural continuation of who I'd always been. I remember in elementary school preferring to lay in the grass watching the clouds rather than hang out with friends, and I remember spending hours wandering through my neighborhood in deep play—a state that's so vital for children to experience. I navigated this blissful state and discovered I could dissolve negative emotions in 60-90 seconds simply by allowing them to be. Around that time, I encountered a neat little book called The Teachings of Buddha, and it immediately read like poetry pointing to the truths of consciousness, our kind and pure nature, and our potential.
              </p>
              <p>
                After about six months of this, I struggled to integrate this experience with the rest of my human experience. With little cultural context or appreciation for what I was going through and the insights that were arising, I felt confused. I also had unresolved painful emotions and trauma that, with the greater awareness now present in me, had become conscious. I'd formed a dualistic illusion that the expansive state I'd experienced was more "real" than any other experience, which resulted in a lot of judgment and agitation toward other parts of myself. While these states may carry a higher truth frequency, we ought to bring our entire integrated being into life. During this time, I immersed myself in Ram Dass's Be Here Now, resonating with it over and over; it had a big impact on me. It took time to integrate these expanded aspects of consciousness with my human and interpersonal self. Meeting and resolving pain from early childhood experiences is surely an ongoing journey—I'm still doing it—and I can help you do it too.
              </p>
              <p>
                At Wesleyan University, I explored Zen Buddhist meditation, Ashtanga Yoga, and eagerly pursued a more truthful knowing of the heart and mind while studying music and engineering. My friends and I were concerned about the stress and mental-performance-focused culture we saw both on campus and in society at large. We founded the Wesleyan Buddhist meditation club and created a really supportive space together. A friend who had spent a semester at Dai Bosatsu Zendo brought our group there, where I got to experience meditation in a beautiful, traditional context. A wonderful non-profit organization, Dharma Gates, arose from my friend group's contemplation and desire to impact the culture— which generously (without cost) offers immersions for young people in deep and authentic Buddhist meditation practice. Since then I've been explored many other kinds of contemplative practices.
              </p> 
              <p>
                In April 2025, it occurred to me that I was ready to center my livelihood around what I already love and genuinely want to do—helping people. Obvious when I thought of it... But to be fair, I wasn't fully ready before then. Once I made a confident commitment to step into this work, Spirit sent me on quite a healing journey, which I believe purified me and prepared me to step more fully into service. This year I certified in Reiki II, EFT, yoga, and pranayama. Now I feel aligned, grounded, and empowered to offer this work from a place of depth.
              </p>
              <h3>Approach</h3>
              <p>
                I draw from my own experience— a lot of what I offer comes from what I've navigated and overcome myself, combined with intuitive gifts and years of practice supporting others. It also comes from the beautiful and expansive things that have unfolded in my life and consciousness. I like to think that any shit one has gone through is redeemed in developing compassion, and perhaps being more able to help others overcome their challenges. One gift I bring is bridging spirituality and spiritual tools in a grounded, accessible way that meets one where they are. 
              </p> 
              <p>
                Emotional and energetic healing is often taught by women, which can make it feel less accessible to men. As a male practitioner who holds both rigorous spiritual practice and healing work, I'm here to show men this path is ours to walk too.
              </p>
              <p>
                My mission is to support you however I can by offering loving presence, powerful modalities, and wisdom—- while practicing integrity with my work, aka Right Livelihood. My approach is integrative and personal, grounded in intuition, science, and various spiritual traditions. I am fluent in both scientific and spiritual speak around these subjects. I am also occasionally funny.

              </p>
              <p>
                If you're curious about how we might work together, I am too!
              </p>
              <h3>
                A Note on Teachers and Practice
              </h3>
              <p>
                I have a lot of respect for teachers who embody the great depths of practice and actualization. Those who have guided me in my spiritual development, particularly in meditation, are more experienced and mature than I am (though we need not cling to hierarchies of advancement—we are all equal in our essential nature). I don't claim to match their capacity for spiritual transmission. If you have a profound longing for awakening, I can help point you to excellent practice communities and/or teachers, and I'll remain a friend and support on your path. We can generally guide others to the degree of our own realization. I'm not an NBA star, so I can't train you to be an NBA star. 
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

      {/* Call to Action */}
      <section className="about-cta section-dark">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Begin Your Journey?</h2>
            <p>
              I'm here to support you on your path to healing, growth, and spiritual connection. 
              Let's work together to create the transformation you're seeking.
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn">Book a Session</a>
              <a href="/offerings" className="btn btn-outline">Learn More</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
