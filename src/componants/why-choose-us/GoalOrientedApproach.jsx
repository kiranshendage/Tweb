import { Target } from "lucide-react";
import FeatureSection from "./FeatureSection";

const GoalOrientedApproach = () => (
  <FeatureSection
    icon={<Target className="w-8 h-8" />}
    title="Goal-Oriented Approach"
    description="Every feature, line of code, and design decision is aligned
    directly with your business goals and KPIs."
    points={[
      "Business-first requirement analysis",
      "KPI-driven feature prioritization",
      "Continuous performance tracking",
      "Clear ROI measurement"
    ]}
    impacts={[
      { value: "3×", label: "Business Efficiency" },
      { value: "Higher", label: "ROI Accuracy" },
      { value: "Clear", label: "Product Direction" },
      { value: "Aligned", label: "Stakeholder Goals" }
    ]}
  />
);

export default GoalOrientedApproach;
