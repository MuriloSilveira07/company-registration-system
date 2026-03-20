type Props = {
  open: boolean
  title?: string
  description?: string
  onConfirm: () => void
  onCancel: () => void
}

export default function ConfirmModal({
  open,
  title = "Confirmar ação",
  description = "Tem certeza que deseja continuar?",
  onConfirm,
  onCancel
}: Props) {

  if (!open) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">

      <div className="bg-bg rounded-lg p-6 w-full max-w-md shadow-lg">

        <h2 className="text-lg text-text font-semibold mb-2">
          {title}
        </h2>

        <p className="text-sm text-sidebar mb-6">
          {description}
        </p>

        <div className="flex justify-end gap-3">

          <button
            onClick={onCancel}
            className="px-4 py-2 text-sm rounded border text-text"
          >
            Cancelar
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 text-sm rounded bg-red-600 text-white"
          >
            Excluir
          </button>

        </div>

      </div>

    </div>
  )
}