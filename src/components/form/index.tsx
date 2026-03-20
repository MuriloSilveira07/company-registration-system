import { useNavigate } from "react-router-dom"
import { ArrowLeft } from "lucide-react"

import Button from "../ui/button"
import PageHeader from "../ui/page-header"

type Props = {
  title: string
  children: React.ReactNode
}

export default function FormContainer({ title, children }: Props) {

  const navigate = useNavigate()

  return (
    <div className="w-full mx-auto flex flex-col gap-4">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <PageHeader title={title} />

        <Button
          size="md"
          icon={<ArrowLeft size={16} />}
          onClick={() => navigate(-1)}
          className="!bg-transparent !text-sidebar !hover:text-text"
        >
          Voltar
        </Button>
      </div>

      {/* CARD */}
      <div className="card flex flex-col gap-6">

        {/* FORM */}
        <div className="flex flex-col gap-6">
          {children}
        </div>

        {/* ACTIONS */}
        <div className="flex justify-end pt-4 gap-4 border-t">

          <Button
            size="md"
            className="!bg-transparent !text-sidebar !hover:text-text"
            onClick={() => navigate(-1)}
          >
            Cancelar
          </Button>

          <Button
            size="md"
            type="submit"
          >
            Salvar
          </Button>

        </div>

      </div>

    </div>
  )
}