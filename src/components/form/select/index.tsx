type Props = {
  label: string
  name: string
  register: any
  options: { value: string; label: string }[]
}

export default function Select({
  label,
  name,
  register,
  options
}: Props) {
  return (
    <div className="flex flex-col gap-1">

      <label className="text-sm font-medium">
        {label}
      </label>

      <select
        {...register(name)}
        className="rounded border border-border p-2"
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

    </div>
  )
}