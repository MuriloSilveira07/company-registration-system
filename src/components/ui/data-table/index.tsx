import { AgGridReact } from "ag-grid-react"
import { Search } from "lucide-react"
import { useState } from "react"

type Props = {
  rowData: any[]
  columnDefs: any[]
}

export default function DataTable({ rowData, columnDefs }: Props) {
  const [search, setSearch] = useState("")

  const filteredData = rowData.filter((row: any) => {
    const value = search.toLowerCase()

    return Object.values(row).some((field) =>
      String(field ?? "").toLowerCase().includes(value)
    )
  })

  return (
    <div className="ag-theme-alpine w-full mt-4" style={{ height: 500 }}>
      <div className="flex justify-end mb-2">
        <div className="relative w-64">
          <Search
            size={16}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-sidebar"
          />

          <input
            type="text"
            placeholder="Procurar..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full pl-6 pb-1
              bg-transparent
              border-0 border-b border-sidebar
              text-sm text-text
              placeholder-sidebar
              focus:outline-none
              focus:border-primary
            "
          />
        </div>
      </div>

      <AgGridReact
        theme="legacy"
        rowData={filteredData}
        columnDefs={columnDefs}
        pagination
        paginationPageSize={10}
      />
    </div>
  )
}