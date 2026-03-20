import { Link } from "react-router-dom"
import Button from "../button"
import { Plus } from "lucide-react"

type Props = {
  title: string
  buttonLink?: string
  buttonLabel?: string
}

export default function PageHeader({
  title,
  buttonLink,
  buttonLabel = "Novo"
}: Props) {

  return (
    <div className="flex items-center justify-between mb-6">

      <h1 className="text-xl font-semibold">
        {title}
      </h1>

      {buttonLink && (
        <Link to={buttonLink}>
          <Button size="sm"
          icon={<Plus size={16} />}>
            {buttonLabel}
          </Button>
        </Link>
      )}

    </div>
  )
}