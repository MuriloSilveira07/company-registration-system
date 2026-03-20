import { useEffect } from "react"
import Layout from "@/layouts"
import FormContainer from "@/components/form"
import Input from "@/components/form/input"
import MaskInput from "@/components/form/mask-input"
import CpfCnpjInput from "@/components/form/cpf-cnpj-input"
import AddressFields from "@/components/form/address"
import Logo from "@/components/form/logo"
import EntityForm from "@/components/form/entity-form"

import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { useCompanies } from "@/context/companies-context"

export default function CompanyEdit() {

    const { id } = useParams()
    const navigate = useNavigate()

    const { companies, update } = useCompanies()

    const company = companies.find(c => c.id === Number(id))

    const {
        register,
        handleSubmit,
        control,
        reset,
        setValue,
        formState: { errors }
    } = useForm()

    useEffect(() => {
        if (company) {
            reset(company)
        }
    }, [company, reset])

    function onSubmit(data: any) {
        update({
            ...data,
            id: Number(id)
        })

        navigate("/empresas")
    }

    return (
        <Layout>

            <form onSubmit={handleSubmit(onSubmit)}>

                <FormContainer title="Editar Empresa">

                    <EntityForm
                        register={register}
                        control={control}
                        setValue={setValue}
                        errors={errors}
                        defaultLogo={company?.logo}
                        showLogo={true}
                    />

                </FormContainer>

            </form>

        </Layout>
    )
}