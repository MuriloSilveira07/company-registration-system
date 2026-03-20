import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community"

import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"

import "./index.css"
import App from "./App"
import { CompaniesProvider } from "@/context/companies-context"
import { ClientsProvider } from "@/context/clients-context"
import { SuppliersProvider } from "@/context/suppliers-context"

ModuleRegistry.registerModules([AllCommunityModule])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CompaniesProvider>
      <ClientsProvider>
        <SuppliersProvider>
          <App />
        </SuppliersProvider>
      </ClientsProvider>
    </CompaniesProvider>
  </StrictMode>,
)