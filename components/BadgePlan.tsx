import React from "react"

interface BadgeProps {
  icon?: React.ReactNode
  text: string
}

const BadgePlan: React.FC<BadgeProps> = ({ icon, text }) => {
  const color =
    (text === "Basic" && "bg-primary/15 text-primary") ||
    (text === "VIP" && "bg-goldVIP/15 text-goldVIP") ||
    (text === "VVIP" && "bg-purpleVVIP/15 text-purpleVVIP")

  return (
    <span
      className={`flex gap-1 rounded text-xs w-fit px-2 py-1 font-aktivGroteskMedium ${color}`}
    >
      {icon}
      {text}
    </span>
  )
}

export default BadgePlan
