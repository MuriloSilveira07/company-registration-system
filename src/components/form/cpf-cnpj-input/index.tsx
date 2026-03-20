import { useState } from "react"
import { UseFormRegister } from "react-hook-form"

type Props = {
  label: string
  name: string
  register: UseFormRegister<any>
  error?: string
}

export default function CpfCnpjInput({ label, name, register, error }: Props) {

  const [value, setValue] = useState("")

  const { onChange, ...rest } = register(name)

  function formatCpfCnpj(value: string) {
    const numbers = value.replace(/\D/g, "")

    if (numbers.length <= 11) {
      return numbers
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    }

    return numbers
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2")
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {

    const formatted = formatCpfCnpj(e.target.value)

    setValue(formatted)

    onChange({
      ...e,
      target: {
        ...e.target,
        value: formatted
      }
    })
  }

  return (
    <div className="flex flex-col gap-1">

      <label className="text-sm font-medium">
        {label}
      </label>

      <input
        className="rounded border border-gray-300 p-2"
        value={value}
        onChange={handleChange}
        {...rest}
      />

      {error && (
        <span className="text-sm text-red-500">
          {error}
        </span>
      )}

    </div>
  )
}