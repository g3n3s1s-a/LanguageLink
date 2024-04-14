import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";
import "./aboutus.css";
import "./aboutus-img.webp";

export default function Aboutus() {
  return (
    <>
      <Topbar />
      
      <div className="homeContainer">
      <Sidebar />
        <div className="aboutus">
          <div className="aboutus-wrapper">
            <div className="aboutus-content">
              <h1 className="aboutus-title">Purpose</h1>
              <div className="aboutus-description">
                <p>
                  We are a team of passionate individuals dedicated to creating
                  innovative and authentic language practice. Our goal is making
                  language learning more engaging and effective for everyone.
                </p>
                <p>
                  By leveraging the power of social connections and community,
                  LanguageLink improves the delivery and acquisition of language
                  learning services. It provides an immersive, authentic, and
                  supportive environment that traditional language learning
                  resources often lack. This innovative approach can lead to
                  better engagement, retention, and overall language proficiency
                  for users.
                </p>
              </div>
              <div className="aboutus-values">
                <h2 className="aboutus-values-title">Our Core Values</h2>
                <ul>
                  <li>Authentic Language Practice</li>
                  <p>
                    Unlike apps or courses that provide scripted dialogues,
                    LanguageLink facilitates real-time conversations with native
                    speakers and learners, allowing for natural and contextual
                    language practice.
                  </p>
                  <li>Cultural Exchange</li>
                  <p>
                    By connecting users from diverse backgrounds, LanguageLink
                    fosters cultural exchange and understanding, enriching the
                    language learning experience beyond just vocabulary and
                    grammar.
                  </p>
                  <li>Peer Support and Motivation</li>
                  <p>
                    The social features, such as group chats and forums, create
                    a supportive community of learners who can motivate and
                    encourage each other, increasing engagement and persistence
                    in language learning.
                  </p>
                  <li>Personalized Learning</li>
                  <p>
                    Users can find language partners who align with their
                    interests, goals, and learning styles, enabling a more
                    personalized and tailored learning experience.
                  </p>
                  <li>Accessibility</li>
                  <p>
                    LanguageLink is a web-based platform, making it accessible
                    from anywhere and on various devices, eliminating barriers
                    to language learning resources.
                  </p>
                </ul>
              </div>
            </div>
            <div className="aboutus-image">
              <img src={require("./aboutus-img.webp")} alt="About Us" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
