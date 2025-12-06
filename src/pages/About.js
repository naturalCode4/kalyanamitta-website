import React from 'react';
import './About.css';

const About = () => {

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>About Healing On Tap</h1>
            <p className="about-subtitle">
              Your guide to healing, transformation, and spiritual growth
            </p>
          </div>
        </div>
      </section>

      {/* About Adin */}
      <section className="about-adin section-rainbow">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>About Adin</h2>
              <p>
                My name is Adin. I grew up in Bethesda, Maryland, have lived all over the United States, 
                and am currently Nomadic. People sometimes ask about my 'spiritual awakening' (or whatever 
                you want to call it), and I can't put a finger on it! My growth feels rather continuous 
                my whole life, what I was exploring as a child in early relationships. When I started to 
                spontaneously experience what Tibetan Buddhists would call early practice of 'Dzogchen' 
                at the age of 15, it felt utterly on point: Ah yes of course that's how it all is.
              </p>
              <p>
                I've learned a tremendous amount through Buddhism, Kabbalah, Christian Mysticism, Taoism, 
                Modern Spiritualities and Modalities, and being a human in general. You could say I am 
                polyamorous with the many spiritual traditions and practices of the world. But most of all 
                I learn to trust inner guidance and Great Spirit.
              </p>
              <p>
                Kalyāņa Mitta means Wise Friendship in Pali, the language the historical Shakyamuni Buddha 
                spoke. I strive to be a true friend – one who benefits others' lives via one's own realization, 
                wisdom, compassion, and virtue. I am determined to be part of the collective healing and 
                awakening, offering the knowledge, love, and virtue that I have.
              </p>
              <p>
                My goal is to make my livelihood with deep integrity by doing what I actually love and feel 
                most called to do: helping you: supporting the lives of all beings. I have a tremendous 
                amount to learn and we are on this journey together. Thank you Great Spirit, my teachers, 
                friends, and all the traditions I have learned from.
              </p>
            </div>
            <div className="about-image">
              <div className="placeholder-image">
                <span>Profile Image</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section section-light">
        <div className="container">
          <h2>Testimonials</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Adin is a kind, caring and spiritually connected person. If you are looking to discover new ways to see life and your soul—or just need someone to talk to—I highly recommend engaging with Adin's deep breadth of experience and modalities that he offers.""
              </p>
              <p className="testimonial-author">- Travis D.</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "Adin is a warm, creative, and sagely steward for our times! He is a passionate practitioner of many modalities who has helped me expand my consciousness and deepen my meditation, yoga, and energy practices. Kind and reliable, I trust him from my soul."
              </p>
              <p className="testimonial-author">- Ethan B., Rabbi</p>
            </div>
            <div className="testimonial-card">
              <p className="testimonial-text">
                "I recently booked a Reiki session with Adin, who I have known for sometime through our shared interest in Yoga. I had done Reiki only once with a different practitioner, and came away as a bit of a skeptic; I didn't feel any different at the end of the session. My experience with Adin was very different. He has a very simple and straightforward way of speaking and explaining the Reiki process, which put me at ease very quickly.  We talked for a few minutes then he began the Reiki process.  Adin has a wonderful aura about him of contained energy and confidence, with a feeling of intuitively moving and allowing the energy to move, of becoming the 'Hollow Bone' that the ancient healers speak off.  I felt the energy within my body and mind, and came away from the session with a wonderful sense of energized peace and well-being that stayed with me for several days. I wholeheartedly recommend him as a naturally gifted Reiki practitioner, and look forward to doing more energy healing work with him soon.
                "
              </p>
              <p className="testimonial-author">- Owen P., Kundalini Yoga Teacher</p>
            </div>
          </div>
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
