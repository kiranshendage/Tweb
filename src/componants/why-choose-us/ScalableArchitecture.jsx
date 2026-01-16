import { Rocket } from "lucide-react";
import FeatureSection from "./FeatureSection";

const ScalableArchitecture = () => (
  <FeatureSection
    icon={<Rocket className="w-8 h-8" />}
    title="Scalable Architecture"
    description="We engineer future-ready systems that scale effortlessly as your users,
    data, and business complexity grow."
    points={[
      "Modular & microservice-ready architecture",
      "Cloud-native & serverless solutions",
      "High-performance database design",
      "Horizontal & vertical scalability planning"
    ]}
    impacts={[
      { value: "10×", label: "User Growth Ready" },
      { value: "99.9%", label: "System Uptime" },
      { value: "Low", label: "Infrastructure Cost" },
      { value: "∞", label: "Growth Potential" }
    ]}
  />
);

export default ScalableArchitecture;
