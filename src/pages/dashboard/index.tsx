import Layout from "../../layouts"
import StatCard from "../../components/ui/stat-card"
import Card from "../../components/ui/card"
import CompaniesChart from "../../components/ui/charts/companies-chart"
import { companiesByMonth } from "../../mocks/dashboard"
import PageHeader from "@/components/ui/page-header"

export default function Dashboard() {
    return (
        <Layout>

            <PageHeader
                title="Página Inicial"
            />
            
            {/* Estatísticas */}
            <div className="grid grid-cols-3 gap-6 mb-8">

                <StatCard
                    title="Empresas cadastradas"
                    value={12}
                />

                <StatCard
                    title="Clientes cadastrados"
                    value={45}
                />

                <StatCard
                    title="Fornecedores cadastrados"
                    value={7}
                />

            </div>

        </Layout>
    )
}