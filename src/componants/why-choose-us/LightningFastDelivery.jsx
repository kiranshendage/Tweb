import { Zap } from "lucide-react";
import FeatureSection from "./FeatureSection";

const LightningFastDelivery = () => (
  <FeatureSection
    icon={<Zap className="w-8 h-8" />}
    title="Lightning-Fast Delivery"
    description="We accelerate your idea to market using agile execution, rapid prototyping,
    and streamlined development pipelines — without compromising quality."
    points={[
      "Agile sprint-based development",
      "Rapid MVP & proof-of-concept builds",
      "Parallel frontend & backend execution",
      "CI/CD automation for faster releases"
    ]}
    impacts={[
      { value: "40–60%", label: "Faster Time-to-Market" },
      { value: "< 30 Days", label: "MVP Launch Time" },
      { value: "2×", label: "Release Velocity" },
      { value: "Zero", label: "Delivery Bottlenecks" }
    ]}
  />
);

export default LightningFastDelivery;
