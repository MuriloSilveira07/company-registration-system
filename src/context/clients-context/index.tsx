import { createCrudContext } from "@/context/create-crud-context"
import { clients as mockClients } from "@/mocks/clients"
import { Client } from "@/types/client"

const {
  Provider: ClientsProvider,
  useCrud: useClientsCrud
} = createCrudContext<Client>("msf_clients", mockClients)

export { ClientsProvider }

export function useClients() {
  const { data, ...rest } = useClientsCrud()

  return {
    clients: data,
    ...rest
  }
}