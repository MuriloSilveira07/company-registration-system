import { Pencil, Trash } from "lucide-react"

type Props = {
  onEdit?: () => void
  onDelete?: () => void
}

export default function TableActions({ onEdit, onDelete }: Props) {
  return (
    <div className="flex items-center gap-3 h-full">

      {onEdit && (
        <button
          onClick={onEdit}
          className="text-primary"
        >
          <Pencil size={16} />
        </button>
      )}

      {onDelete && (
        <button
          onClick={onDelete}
          className="text-error"
        >
          <Trash size={16} />
        </button>
      )}

    </div>
  )
}