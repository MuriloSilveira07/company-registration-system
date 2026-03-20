import Layout from "@/layouts"
import PageHeader from "@/components/ui/page-header"
import DataTable from "@/components/ui/data-table"
import TableActions from "@/components/ui/table-actions"

import { useSuppliers } from "@/context/suppliers-context"
import { useNavigate } from "react-router-dom"

export default function SuppliersList() {

  const { suppliers, remove } = useSuppliers()
  const navigate = useNavigate()

  function handleDelete(supplier: any) {

    const confirmed = confirm("Deseja realmente excluir este fornecedor?")

    if (!confirmed) return

    remove(supplier.id)
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
          onEdit={() => navigate(`/fornecedores/editar/${params.data.id}`)}
          onDelete={() => handleDelete(params.data)}
        />
      )
    }
  ]

  return (
    <Layout>

      <PageHeader
        title="Fornecedores cadastrados"
        buttonLink="/fornecedores/nova"
      />

      <DataTable
        columnDefs={columnDefs}
        rowData={suppliers}
      />

    </Layout>
  )
}