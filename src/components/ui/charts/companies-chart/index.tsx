import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts"

type Props = {
  data: any[]
}

export default function CompaniesChart({ data }: Props) {
  return (
    <div className="w-full h-64">

      <ResponsiveContainer>

        <LineChart data={data}>

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="total"
            stroke="#3b82f6"
            strokeWidth={2}
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  )
}