import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import {
  LayoutDashboard,
  Building,
  Users,
  Truck,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Settings,
  Folder
} from "lucide-react"

type Props = {
  collapsed: boolean
  toggleSidebar: () => void
}

export default function Sidebar({ collapsed, toggleSidebar }: Props) {

  const location = useLocation()

  const isRegisterRoute =
    location.pathname.startsWith("/empresas") ||
    location.pathname.startsWith("/clientes") ||
    location.pathname.startsWith("/fornecedores")

  const [openRegister, setOpenRegister] = useState(isRegisterRoute)

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2 p-2 rounded hover:bg-sidebar ${isActive ? "bg-sidebar" : ""
    }`

  return (
    <div
      className={`
        bg-text text-surface h-screen p-4
        transition-all duration-300
        ${collapsed ? "w-16" : "w-64"}
        flex flex-col justify-between
      `}
    >

      {/* PARTE SUPERIOR */}
      <div>

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">

          {!collapsed && (
            <h1 className="text-xl font-bold">CMS</h1>
          )}

          <button
            onClick={toggleSidebar}
            className="p-1 rounded hover:bg-sidebar"
          >
            {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>

        </div>

        <hr className="mb-4 border-sidebar" />

        <nav className="flex flex-col gap-2">

          {/* DASHBOARD */}
          <NavLink to="/dashboard" className={navClass}>
            <LayoutDashboard size={18} />
            {!collapsed && "Tela Inicial"}
          </NavLink>

          {/* CADASTRO */}
          <button
            onClick={() => setOpenRegister(!openRegister)}
            className="flex items-center justify-between p-2 rounded hover:bg-sidebar"
          >

            <div className="flex items-center gap-2">
              <Folder size={18} />
              {!collapsed && "Cadastro"}
            </div>

            {!collapsed && (
              openRegister
                ? <ChevronDown size={16} />
                : <ChevronRight size={16} />
            )}

          </button>

          {/* SUBMENU */}
          <div
            className={`
    overflow-hidden transition-all duration-300 ease-in-out
    ${openRegister && !collapsed ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}
  `}
          >
            <div className="flex flex-col gap-2 ml-6">

              <NavLink to="/empresas" className={navClass}>
                <Building size={18} />
                Empresas
              </NavLink>

              <NavLink to="/clientes" className={navClass}>
                <Users size={18} />
                Clientes
              </NavLink>

              <NavLink to="/fornecedores" className={navClass}>
                <Truck size={18} />
                Fornecedores
              </NavLink>

            </div>
          </div>

        </nav>

      </div>

      {/* PARTE INFERIOR */}
      <div>

        {/* OUTROS */}
        <div className="mb-4">

          {!collapsed && (
            <p className="text-xs text-gray-400 mb-2">OUTROS</p>
          )}

          <button className="flex items-center gap-2 p-2 rounded hover:bg-sidebar">
            <Settings size={18} />
            {!collapsed && "Configurações"}
          </button>

        </div>

        {/* USUÁRIO */}
        <div className="border-t border-sidebar pt-4 flex items-center gap-3">

          <img
            src="https://"
            alt="user"
            className="w-8 h-8 rounded-full"
          />

          {!collapsed && (
            <div className="flex flex-col text-sm">
              <span className="font-medium">Murilo Silveira</span>
              <span className="text-gray-400 text-xs">
                murilo@alcancetech.com.br
              </span>
            </div>
          )}

        </div>

      </div>

    </div>
  )
}