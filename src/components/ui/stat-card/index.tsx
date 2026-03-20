type Props = {
  title: string
  value: number
}

export default function StatCard({ title, value }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col gap-2">

      <span className="text-sm text-gray-500">
        {title}
      </span>

      <span className="text-3xl font-bold text-gray-900">
        {value}
      </span>

    </div>
  )
}