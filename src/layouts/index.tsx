import { useState } from "react"
import Sidebar from "../components/sidebar"
import Toolbar from "../components/toolbar"

export default function Layout({ children }: any) {

  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden">

      <Sidebar
        collapsed={collapsed}
        toggleSidebar={() => setCollapsed(!collapsed)}
      />

      <div className="flex flex-col flex-1">

        <Toolbar
          collapsed={collapsed}
          toggleSidebar={() => setCollapsed(!collapsed)}
        />

        <main className="flex-1 overflow-y-auto p-6 bg-bg">
          {children}
        </main>

      </div>

    </div>
  )
}