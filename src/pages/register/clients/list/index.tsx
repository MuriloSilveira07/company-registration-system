import Layout from "@/layouts"
import PageHeader from "@/components/ui/page-header"
import DataTable from "@/components/ui/data-table"
import TableActions from "@/components/ui/table-actions"

import { useClients } from "@/context/clients-context"
import { useNavigate } from "react-router-dom"

export default function ClientsList() {

  const { clients, remove } = useClients()
  const navigate = useNavigate()

  function handleDelete(client: any) {

    const confirmed = confirm("Deseja realmente excluir este cliente?")

    if (!confirmed) return

    remove(client.id)
  }

  const columnDefs = [
    {
      headerName: "CPF/CNPJ",
      field: "cpfCnpj",
      flex: 1,
      sortable: true,
      filter: true
    },
    {
      headerName: "Razão Social",
      field: "razaoSocial",
      flex: 2,
      sortable: true,
      filter: true
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
      headerName: "Ações",
      width: 120,
      cellRenderer: (params: any) => (
        <TableActions
          onEdit={() => navigate(`/clientes/editar/${params.data.id}`)}
          onDelete={() => handleDelete(params.data)}
        />
      )
    }
  ]

  return (
    <Layout>

      <PageHeader
        title="Clientes cadastrados"
        buttonLink="/clientes/nova"
      />

      <DataTable
        columnDefs={columnDefs}
        rowData={clients}
      />

    </Layout>
  )
}