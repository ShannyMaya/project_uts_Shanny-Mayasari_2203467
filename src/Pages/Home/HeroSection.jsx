export default function HeroSection() {
    return<section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
            <div className="hero--section--content">
                <p className="section--title">Hello</p>
                <h1 className="hero--section--title">
                    <span className="hero--section--title--color">Shanny Mayasari</span>{" "}
                    <br />
                    Pendidikan Ilmu Komputer - A
                </h1>
                <p className="hero--section--description">
                Hello Everyone
                <br /> Welcome to my website. Let's check it out
                </p>
            </div>
            <button className="btn btn-primary">Get In Touch</button>
        </div>
        <div className="hero--section--img">
            <img src="./img/hero_img.png" alt="Hero Section"/>
        </div>
     </section>;
}
