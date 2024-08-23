"use client";
import React from "react";
import { LucideIcon } from "lucide-react";

interface IconProps {
  icon: LucideIcon;
  size?: number;
  color?: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  icon: IconComponent,
  size = 24,
  color = "currentColor",
  className,
}) => {
  return <IconComponent size={size} color={color} className={className} />;
};

export default Icon;
