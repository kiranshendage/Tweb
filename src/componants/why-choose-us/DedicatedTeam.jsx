import { Users } from "lucide-react";
import FeatureSection from "./FeatureSection";

const DedicatedTeam = () => (
  <FeatureSection
    icon={<Users className="w-8 h-8" />}
    title="Dedicated Expert Team"
    description="You get a focused, experienced team that works
    as an extension of your business."
    points={[
      "Dedicated developers & designers",
      "Direct communication & transparency",
      "Flexible engagement models",
      "Long-term technology partnership"
    ]}
    impacts={[
      { value: "24/7", label: "Team Availability" },
      { value: "High", label: "Project Ownership" },
      { value: "Fast", label: "Decision Making" },
      { value: "Strong", label: "Client Trust" }
    ]}
  />
);

export default DedicatedTeam;
