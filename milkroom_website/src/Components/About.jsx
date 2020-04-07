import React from "react";
import { SocialIcon } from "react-social-icons";
const About = () => {
  return (
    <main>
      <h1 className="Title">About Us</h1>
      <p>
        In 2017, themilkroom was founded by our family. The aim was to bring
        delicious desserts to Southport within a family friendly setting. We
        completely redesigned our store to make it fit for purpose for our
        customers to enjoy. The idea was created around our kitchen table as we
        had a passion for all things desserts!! Themilkroom has grown to
        employing our amazing staff team and provide deliveries for residents in
        Southport. This has been an exciting journey, and not one without its
        challenges but we have been overwhelmed by our customers response to our
        store and we thank you very much, your support is so appreciated. We
        will continue our to bring you the latest desserts whether that’s in
        store or through take aways and delivery. Best Wishes from us all,
        themilkroom team.{" "}
      </p>
      <div className="Icons">
        <SocialIcon url="http://facebook.com/themilkroomsouthport/" />
        <SocialIcon url="http://twitter.com/themilkroom" />
        <SocialIcon url="http://instagram.com/themilkroom" />
      </div>
    </main>
  );
};

export default About;
