type Props = {
  columns: string[]
  data: any[]
}

export default function Table({ columns, data }: Props) {
  return (
    <table className="w-full border border-border rounded-lg">

      <thead className="">
        <tr>
          {columns.map((column, index) => (
            <th key={index} className="text-left p-3 border-b border-border">
              {column}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, index) => (
          <tr key={index} className="border-b border-border">

            <td className="p-3">{row.cpfCnpj}</td>
            <td className="p-3">{row.razaoSocial}</td>
            <td className="p-3">{row.nomeFantasia}</td>
            <td className="p-3">{row.telefone}</td>
            <td className="p-3">{row.endereco}</td>

          </tr>
        ))}
      </tbody>

    </table>
  )
}