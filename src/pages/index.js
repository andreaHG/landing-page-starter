import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "theme";
import Layout from "components/layout";
import Banner from "sections/banner";
import Services from "sections/services";
import WorkHard from "sections/work-hard";
import UltimateFeatures from "sections/ultimate-features";
import {
  individual,
  icon2,
  icon3,
  icon4,
  icon5,
  chat,
} from "assets/images/icons";
import workHard from "assets/images/wheel-chair.jpeg";
import banner from "assets/images/person-care-rides.jpeg";

console.log("image: ", banner);
const image1 = banner;
const image2 = workHard;
const productName = "CareRides";

const tagline = "Caring transportation for those who need it most";

const visionStatement =
  "For patients with disabilities who do not have transportation, CareRides is a cross-platform app that connects patients with volunteer drivers for transportation to medical appointments. Acommodates individuals who may not have access through these mainstream services and is also available in multiple channels, such as phone and text.";

const features = [
  {
    id: 1,
    icon: icon2,
    title: "Schedule Ahead",
    description: `Plan your ride so you never miss an appointment time.`,
  },
  {
    id: 2,
    icon: icon4,
    title: "Navigate with Ease",
    description: `Simple, intuitive app that is easy to navigate.`,
  },
  {
    id: 3,
    icon: icon5,
    title: "Create your Profile",
    description: `Save your frequent locations and appointment reminders.`,
  },
];

const valuePropositions = [
  {
    id: 1,
    icon: individual,
    title: "Free for you",
    description: `Our service is completely free for consumers, no hidden fees ever.`,
  },
  {
    id: 2,
    icon: chat,
    title: "Not just an App",
    description: `You can schedule a ride within our mobile app or via text/call.`,
  },
  {
    id: 3,
    icon: icon3,
    title: "Accessible Vehicles",
    description: `Our authorized vehicles are fully equipped to accommodate your mobility needs.`,
  },
];
const benefitted = [
  { id: 1, label: "Patients" },
  { id: 2, label: "Healthcare Organizations" },
  { id: 3, label: "Volunteers" },
];

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout logoName={productName}>
        <Banner productName={productName} tagline={tagline} img={image1} />
        <Services visionStatement={visionStatement} feature={features} />
        <UltimateFeatures valuePropositions={valuePropositions} />
        <WorkHard benefitted={benefitted} img={image2} />
      </Layout>
    </ThemeProvider>
  );
}
