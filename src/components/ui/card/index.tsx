type Props = {
  children: React.ReactNode
}

export default function Card({ children }: Props) {
  return (
    <div className="bg-surface border border-border rounded-lg p-6 shadow-sm">
      {children}
    </div>
  )
}