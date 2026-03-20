import { createCrudContext } from "@/context/create-crud-context"
import { companies as mockCompanies } from "@/mocks/companies"
import { Company } from "@/types/company"

const {
  Provider: CompaniesProvider,
  useCrud: useCompaniesCrud
} = createCrudContext<Company>("msf_companies", mockCompanies)

export { CompaniesProvider }

export function useCompanies() {
  const { data, ...rest } = useCompaniesCrud()

  return {
    companies: data,
    ...rest
  }
}