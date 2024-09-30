import { Helmet } from "react-helmet-async";
import TinnyBanner from "../../components/shared/TinnyBanner";
import MeetOurTeam from "../../components/aboutUs/MeetOurTeam";
import AboutOurCommunity from "../../components/aboutUs/AboutOurCommunity";
import Testimonial from "../../components/aboutUs/Testimonial";

function AboutUs() {
  return (
    <div>
      <Helmet>
        <title>Hiring Staff - About Us</title>
      </Helmet>
      <TinnyBanner
        title={"About Us"}
        subTitle={"Get the latest news, updates and tips"}
        currentPath={"About Us"}
      />
      <AboutOurCommunity />
      <MeetOurTeam />
        <Testimonial />
    </div>
  );
}

export default AboutUs;
