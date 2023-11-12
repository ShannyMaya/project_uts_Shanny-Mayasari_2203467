import HeroSection from "../HeroSection";
import MyBiodata from "../MyBiodata";
import AboutMe from "../AboutMe";
import MyEducation from "../MyEducation";
import ContactMe from "../ContactMe";
import Footer from "../Footer";

export default function Home () {
    return(
        <>
            <HeroSection />
            <MyBiodata />
            <AboutMe />
            <MyEducation />
            <ContactMe />
            <Footer />
        </>
    );
}
