import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";
const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechStar</h1>
          <p>Solutions to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solutions to the tech problems you face
            everyday. We are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            deserunt veritatis ab! Voluptatum corrupti ullam placeat animi
            deleniti iusto, recusandae debitis quos delectus inventore nemo!
            Atque a fuga voluptates ullam. Reiciendis eveniet, illum nostrum ab
            provident non aperiam! Dolorum qui dolorem commodi quas, quos optio
            nemo accusamus quis quo error iste sint velit exercitationem sequi
            ipsa maxime dolores recusandae repellat? Hic dolor nostrum a quos
            asperiores quasi dolore pariatur, sit, quaerat ipsam assumenda aut
            sapiente delectus eveniet fuga tempora ex, id corporis unde! Quo
            delectus impedit soluta maiores aliquam iusto.
          </p>
        </div>
      </div>
      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.3s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.7s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div style={{ animationDelay: "1s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};
export default Home;
