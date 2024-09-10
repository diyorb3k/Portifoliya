import "../../assets/SCSS/Hom.scss";
import header_img from "../../assets/header.img/logo 1.svg";
import header_econ1 from "../../assets/header.img/ant-design_twitter-circle-filled.svg";
import header_econ2 from "../../assets/header.img/entypo-social_linkedin-with-circle.svg";
import header_econ3 from "../../assets/header.img/Vector.svg";
import heroimg from "../../assets/hero_img/50353683 1 (2).jpg";
import main_img1 from "../../assets/main/akar-icons_github-fill.svg";
import main_img2 from "../../assets/main/cib_greensock.svg";
import main_img3 from "../../assets/main/logos_bootstrap.svg";
import main_img4 from "../../assets/main/logos_git-icon.svg";
import main_img5 from "../../assets/main/logos_react.svg";
import main_img6 from "../../assets/main/logos_sass.svg";
import main_img7 from "../../assets/main/Vector.svg";
import main_img8 from "../../assets/main/vscode-icons_file-type-css.svg";
import main_img9 from "../../assets/main/vscode-icons_file-type-html.svg";
import main_img10 from "../../assets/main/vscode-icons_file-type-js-official.svg";
import main_img11 from "../../assets/main/vscode-icons_file-type-tailwind.svg";
import main_img12 from "../../assets/main/vscode-icons_file-type-vscode.svg";
import main_card1 from "../../assets/card_img/Rectangle 12.png";
import main_card2 from "../../assets/card_img/Rectangle 13.jpg";
import main_card3 from "../../assets/card_img/Rectangle 14.png";
import main_card4 from "../../assets/card_img/Rectangle 4.jpg";
import main_card5 from "../../assets/card_img/Rectangle 6.jpg";
import main_card6 from "../../assets/card_img/Rectangle 8.png";
import main_card_econ1 from "../../assets/card_img/akar-icons_github-fill.svg";
import main_card_econ2 from "../../assets/card_img/akar-icons_link-chain.svg";
import foter_img from "../../assets/foter_img/logo 1 (1).svg";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";

import { useState } from "react";
const Hom = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <header>
        <div className="container">
          <div className="navbar">
            <ul>
              <img src={header_img} alt="" />
            </ul>
            <div className="navbar_right">
              <ul className={`ul_nav ${menuOpen ? "show" : ""}`}>
                <li>Hom</li>
                <li>About</li>
                <li>Tech Stack</li>
                <li>Projects</li>
                <li>Contact</li>
              </ul>
              <ul className="ul_nav_img">
                <img src={header_econ3} alt="get_hub.nan" />
                <img src={header_econ1} alt="tewiter.nan" />
                <img src={header_econ2} alt="lenkidin.nan" />
                <span onClick={toggleMenu}>
                  {menuOpen ? (
                    <VscChromeClose
                      style={{ width: "40px" }}
                      className="econ"
                    />
                  ) : (
                    <SlMenu style={{ width: "40px" }} className="econ" />
                  )}
                </span>
              </ul>
            </div>
          </div>
        </div>
      </header>
      {menuOpen && (
        <div className="menu">
          <ul>
            <li>Option </li>
            <li>Option </li>
            <li>Option </li>
          </ul>
        </div>
      )}
      {/* <section className="section1">
        <div className="container">
          <div className="hera">
            <div className="hero_tex">
              <span className="spanhi">Hi 👋,</span>
              <br />
              <span className="name">My name is</span>
              <br />
              <span className="pavan">Pavan MG</span>
              <br />
              <span className="build">I build things for web</span>
            </div>
            <div className="hero_img">
              <img src={heroimg} alt="" />
            </div>
          </div>
        </div>
      </section>
      <main>
        <div className="container">
          <div className="main_list">
            <span>My Tech Stack</span>
            <p> Technologies I’ve been working with recently</p>
          </div>
          <div className="img_econ">
            <img src={main_img9} alt="" />
            <img src={main_img8} alt="" />
            <img src={main_img10} alt="" />
            <img src={main_img5} alt="" />
            <img src={main_img7} alt="" />
            <img src={main_img3} alt="" />

            <img src={main_img11} alt="" />
            <img src={main_img6} alt="" />
            <img src={main_img4} alt="" />
            <img src={main_img2} alt="" />
            <img src={main_img12} alt="" />
            <img src={main_img1} alt="" />
          </div>
        </div>
        <div className="container">
          <div className="proekt">
            <span>Projects</span>
            <p>Things I’ve built so far</p>
          </div>

          <div className="Proekt">
            <div className="card_item">
              <img src={main_card4} alt="" />
              <span className="loyix">Project Tile goes here</span>
              <p className="this">
                This is sample project description random things are here in
                description This is sample project lorem ipsum generator for
                dummy content
              </p>

              <p className="sass">
                <span>Tech stack</span>:HTML,JavaScript,SASS,React
              </p>
              <div className="eco_gro">
                <div className="img_econw">
                  <img src={main_card_econ2} alt="" />
                  <span className="cod">Live Preview</span>
                </div>

                <div className="img_econw">
                  <img src={main_card_econ1} alt="" />
                  <p className="cod">View Code</p>
                </div>
              </div>
            </div>

            <div className="card_item">
              <img src={main_card5} alt="" />
              <span className="loyix">Project Tile goes here</span>
              <p className="this">
                This is sample project description random things are here in
                description This is sample project lorem ipsum generator for
                dummy content
              </p>

              <p className="sass">
                <span>Tech stack</span>:HTML,JavaScript,SASS,React
              </p>
              <div className="eco_gro">
                <div className="img_econw">
                  <img src={main_card_econ2} alt="" />
                  <span className="cod">Live Preview</span>
                </div>

                <div className="img_econw">
                  <img src={main_card_econ1} alt="" />
                  <p className="cod">View Code</p>
                </div>
              </div>
            </div>

            <div className="card_item">
              <img src={main_card6} alt="" />
              <span className="loyix">Project Tile goes here</span>
              <p className="this">
                This is sample project description random things are here in
                description This is sample project lorem ipsum generator for
                dummy content
              </p>

              <p className="sass">
                <span>Tech stack</span>:HTML,JavaScript,SASS,React
              </p>
              <div className="eco_gro">
                <div className="img_econw">
                  <img src={main_card_econ2} alt="" />
                  <span className="cod">Live Preview</span>
                </div>

                <div className="img_econw">
                  <img src={main_card_econ1} alt="" />
                  <p className="cod">View Code</p>
                </div>
              </div>
            </div>

            <div className="card_item">
              <img src={main_card1} alt="" />
              <span className="loyix">Project Tile goes here</span>
              <p className="this">
                This is sample project description random things are here in
                description This is sample project lorem ipsum generator for
                dummy content
              </p>

              <p className="sass">
                <span>Tech stack</span>:HTML,JavaScript,SASS,React
              </p>
              <div className="eco_gro">
                <div className="img_econw">
                  <img src={main_card_econ2} alt="" />
                  <span className="cod">Live Preview</span>
                </div>

                <div className="img_econw">
                  <img src={main_card_econ1} alt="" />
                  <p className="cod">View Code</p>
                </div>
              </div>
            </div>

            <div className="card_item">
              <img src={main_card2} alt="" />
              <span className="loyix">Project Tile goes here</span>
              <p className="this">
                This is sample project description random things are here in
                description This is sample project lorem ipsum generator for
                dummy content
              </p>

              <p className="sass">
                <span>Tech stack</span>:HTML,JavaScript,SASS,React
              </p>
              <div className="eco_gro">
                <div className="img_econw">
                  <img src={main_card_econ2} alt="" />
                  <span className="cod">Live Preview</span>
                </div>

                <div className="img_econw">
                  <img src={main_card_econ1} alt="" />
                  <p className="cod">View Code</p>
                </div>
              </div>
            </div>

            <div className="card_item">
              <img src={main_card3} alt="" />
              <span className="loyix">Project Tile goes here</span>
              <p className="this">
                This is sample project description random things are here in
                description This is sample project lorem ipsum generator for
                dummy content
              </p>

              <p className="sass">
                <span>Tech stack</span>:HTML,JavaScript,SASS,React
              </p>
              <div className="eco_gro">
                <div className="img_econw">
                  <img src={main_card_econ2} alt="" />
                  <span className="cod">Live Preview</span>
                </div>

                <div className="img_econw">
                  <img src={main_card_econ1} alt="" />
                  <p className="cod">View Code</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="container">
          <div className="foterbilok">
            <div>
              <img src={foter_img} alt="img_not" />
            </div>
            <div className="contackt">
              <p>+91 12345 09876</p>
              <p>info@example.com</p>
              <div className="img_foter">
                <img src={header_econ3} alt="get_hub.nan" />
                <img src={header_econ1} alt="tewiter.nan" />
                <img src={header_econ2} alt="lenkidin.nan" />
              </div>
            </div>
          </div>
          <div className="border_footer"></div>
          <div className="foterna">
            <div className="foter_navbar">
              <ul className="ul_nav">
                <li>Hom</li>
                <li>About</li>
                <li>Tech Stack</li>
                <li>Projects</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="foterright">
              <p>Designed and built by <span>Pavan MG</span> with <span>Love</span> &  <span>Coffee</span></p>
            </div>
          </div>
        </div>
      </footer> */}
    </>
  );
};
export default Hom;
