import { Shield } from "lucide-react";
import FeatureSection from "./FeatureSection";

const EnterpriseSecurity = () => (
  <FeatureSection
    icon={<Shield className="w-8 h-8" />}
    title="Enterprise-Grade Security"
    description="Security is built into our development lifecycle —
    protecting your data, users, and reputation."
    points={[
      "Secure authentication & authorization",
      "Data encryption & secure APIs",
      "OWASP security best practices",
      "Compliance-ready architecture"
    ]}
    impacts={[
      { value: "Zero", label: "Security Breaches" },
      { value: "100%", label: "Data Protection" },
      { value: "Trusted", label: "User Confidence" },
      { value: "Compliant", label: "Industry Standards" }
    ]}
  />
);

export default EnterpriseSecurity;
