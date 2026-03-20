import Layout from "@/layouts"
import PageHeader from "@/components/ui/page-header"
import DataTable from "@/components/ui/data-table"
import TableActions from "@/components/ui/table-actions"
import ConfirmModal from "@/components/ui/confirm-modal"

import { useCompanies } from "@/context/companies-context"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

export default function CompanyList() {

  const [openModal, setOpenModal] = useState(false)
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [selectedName, setSelectedName] = useState("")

  const navigate = useNavigate()
  const { companies, remove } = useCompanies()

  function handleOpenDeleteModal(company: any) {
    setSelectedId(company.id)
    setSelectedName(company.razaosocial || company.nomefantasia || "este item")
    setOpenModal(true)
  }

  const columnDefs = [
    {
      headerName: "CPF/CNPJ",
      field: "cpfCnpj",
      flex: 1
    },
    {
      headerName: "Razão Social",
      field: "razaoSocial",
      flex: 2
    },
    {
      headerName: "Nome Fantasia",
      field: "nomeFantasia",
      flex: 2
    },
    {
      headerName: "Telefone",
      field: "telefone",
      flex: 1
    },
    {
      headerName: "Logo",
      field: "logo",
      width: 100,
      cellRenderer: (params: any) => {
        if (!params.data.logo) {
          return (
            <div className="h-full flex items-center justify-center text-gray-400">
              —
            </div>
          )
        }

        return (
          <div className="h-full flex items-center justify-center">
            <div className="h-10 w-20 flex items-center justify-center">
              <img
                src={params.data.logo}
                alt="logo"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>
        )
      }
    },
    {
      headerName: "Ações",
      width: 120,
      cellRenderer: (params: any) => (
        <TableActions
          onEdit={() => navigate(`/empresas/editar/${params.data.id}`)}
          onDelete={() => handleOpenDeleteModal(params.data)}
        />
      )
    }
  ]

  return (
    <Layout>

      <PageHeader
        title="Empresas cadastradas"
        buttonLink="/empresas/nova"
      />

      <DataTable
        columnDefs={columnDefs}
        rowData={companies}
      />

      <ConfirmModal
        open={openModal}
        title="Excluir empresa"
        description={`Tem certeza que deseja excluir ${selectedName}?`}
        onCancel={() => {
          setOpenModal(false)
          setSelectedId(null)
          setSelectedName("")
        }}
        onConfirm={() => {
          if (selectedId !== null) {
            remove(selectedId)
          }

          setOpenModal(false)
          setSelectedId(null)
          setSelectedName("")
        }}
      />
    </Layout>
  )
}