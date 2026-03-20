import { useEffect, useRef, useState } from "react"
import { Upload, Trash2 } from "lucide-react"

type Props = {
  label: string
  name: "logo"
  setValue: any
  defaultValue?: string
}

export default function Logo({ label, name, setValue, defaultValue }: Props) {

  const [preview, setPreview] = useState<string | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (defaultValue) {
      setPreview(defaultValue)
    }
  }, [defaultValue])

  function handleFile(file: File) {
    const reader = new FileReader()

    reader.onloadend = () => {
      const base64 = reader.result as string
      setPreview(base64)
      setValue(name, base64)
    }

    reader.readAsDataURL(file)
  }

  function handleChange(e: any) {
    const file = e.target.files[0]
    if (file) handleFile(file)
  }

  function handleRemove() {
    setPreview(null)
    setValue(name, "")
  }

  return (
    <div className="flex flex-col gap-3">

      {/* <label className="text-sm font-medium">
        {label}
      </label> */}

      {/* DROPZONE */}
      {!preview && (
        <div
          onClick={() => inputRef.current?.click()}
          className="
            flex flex-col items-center justify-center
            h-32
            border-2 border-dashed border-border
            rounded-lg cursor-pointer
            hover:border-primary hover:bg-bg/50
            transition
          "
        >
          <Upload size={24} className="text-sidebar mb-2" />

          <span className="text-sm text-text">
            Clique ou arraste uma imagem
          </span>

          <span className="text-xs text-sidebar">
            PNG, JPG até 2MB
          </span>
        </div>
      )}

      {/* PREVIEW */}
      {preview && (
        <div className="flex items-center gap-4">

          <img
            src={preview}
            alt="Logo"
            className="h-40 w-96 rounded-md object-contain border p-4"
          />

          <div className="flex flex-col gap-2">

            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="text-sm text-primary hover:underline"
            >
              Trocar imagem
            </button>

            <button
              type="button"
              onClick={handleRemove}
              className="text-sm text-error flex items-center gap-1"
            >
              <Trash2 size={14} />
              Remover
            </button>

          </div>

        </div>
      )}

      {/* INPUT ESCONDIDO */}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        className="hidden"
      />

    </div>
  )
}