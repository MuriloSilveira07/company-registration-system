import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import EmpresaPage from "../pages/register/company"
import ClientePage from "../pages/register/clients"
import FornecedorPage from "../pages/register/supplier"
import CompanyList from "../pages/register/company/list"
import ClientsList from "../pages/register/clients/list"
import SuppliersList from "../pages/register/supplier/list"
import Dashboard from "../pages/dashboard"
import CompanyEdit from "@/pages/register/company/edit"
import ClientEdit from "@/pages/register/clients/edit"
import SupplierEdit from "@/pages/register/supplier/edit"

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* rota inicial */}
        <Route path="/" element={<Navigate to="/dashboard" />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/empresas" element={<CompanyList />} />
        <Route path="/empresas/nova" element={<EmpresaPage />} />
        <Route path="/fornecedores/editar/:id" element={<SupplierEdit />} />

        {/* 👇 ADICIONE ESTA ROTA */}
        <Route path="/empresas/editar/:id" element={<CompanyEdit />} />
        <Route path="/clientes/editar/:id" element={<ClientEdit />} />

        <Route path="/clientes" element={<ClientsList />} />
        <Route path="/clientes/nova" element={<ClientePage />} />

        <Route path="/fornecedores" element={<SuppliersList />} />
        <Route path="/fornecedores/nova" element={<FornecedorPage />} />

      </Routes>
    </BrowserRouter>
  )
}