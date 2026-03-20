import { Controller } from "react-hook-form"
import { IMaskInput } from "react-imask"

type Props = {
  label: string
  error?: string
  mask: string
  name: string
  control: any
  onAccept?: (value: string) => void
}

export default function MaskInput({
  label,
  mask,
  error,
  name,
  control,
  onAccept
}: Props) {
  return (
    <div className="flex flex-col gap-1">

      <label className="text-sm font-medium">
        {label}
      </label>

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <IMaskInput
            {...field}
            mask={mask}
            lazy={true}
            onAccept={(value) => {
              field.onChange(value)
              onAccept?.(value)
            }}
            className="rounded border border-gray-300 p-2"
          />
        )}
      />

      {error && (
        <span className="text-sm text-error">
          {error}
        </span>
      )}

    </div>
  )
}