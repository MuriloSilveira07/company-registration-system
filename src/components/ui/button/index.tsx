import { ReactNode } from "react"

type Props = {
  children: React.ReactNode
  type?: "button" | "submit"
  size?: "sm" | "md"
  className?: string
  icon?: React.ReactNode
  onClick?: () => void
}

export default function Button({
  children,
  type = "button",
  size = "md",
  className = "",
  icon,
  onClick
}: Props) {

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2"
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center gap-2 bg-sidebar hover:bg-text text-surface rounded-md font-medium transition ${sizeStyles[size]} ${className}`}
    >
      {icon}
      {children}
    </button>
  )
}