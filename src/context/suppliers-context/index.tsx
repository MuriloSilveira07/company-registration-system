import { createCrudContext } from "@/context/create-crud-context"
import { suppliers as mockSuppliers } from "@/mocks/suppliers"
import { Supplier } from "@/types/supplier"

const {
  Provider: SuppliersProvider,
  useCrud: useSuppliersCrud
} = createCrudContext<Supplier>("msf_suppliers", mockSuppliers)

export { SuppliersProvider }

export function useSuppliers() {
  const { data, ...rest } = useSuppliersCrud()

  return {
    suppliers: data,
    ...rest
  }
}