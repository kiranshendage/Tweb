import { Monitor } from "lucide-react";
import FeatureSection from "./FeatureSection";

const PremiumUIUXDesign = () => (
  <FeatureSection
    icon={<Monitor className="w-8 h-8" />}
    title="Premium UI/UX Design"
    description="We design visually stunning, intuitive experiences that
    convert users into loyal customers."
    points={[
      "User-centric research & wireframing",
      "Modern, premium visual language",
      "Mobile-first & responsive design",
      "Conversion-optimized interfaces"
    ]}
    impacts={[
      { value: "+45%", label: "User Engagement" },
      { value: "-30%", label: "Bounce Rate" },
      { value: "+50%", label: "Conversion Rate" },
      { value: "High", label: "Brand Trust" }
    ]}
  />
);

export default PremiumUIUXDesign;
