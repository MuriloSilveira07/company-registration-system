type Props = {
  label: string
  name: string
  register: any
  error?: string
  className?: string
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
} & React.InputHTMLAttributes<HTMLInputElement>


export default function Input({
  label,
  name,
  register,
  error,
  className,
  ...rest
}: Props) {
  return (
    <div className={`flex flex-col gap-1 ${className || ""}`}>

      <label className="text-sm font-medium">
        {label}
      </label>

      <input
        {...register(name)}
        {...rest} // 🔥 permite readOnly, disabled, etc
        className="rounded border border-border p-2"
      />

      {error && (
        <span className="text-sm text-error">
          {error}
        </span>
      )}

    </div>
  )
}