type Props = {
  collapsed: boolean
  toggleSidebar: () => void
}

export default function Toolbar({ collapsed, toggleSidebar }: Props) {

  return (
    <div className="flex items-center h-16 px-6 bg-white border-b">

      {collapsed && (
        <button
          onClick={toggleSidebar}
          className="md:hidden mr-4"
        >
        </button>
      )}

      <h1 className="text-lg font-semibold">
        Sistema MSF
      </h1>

    </div>
  )
}