import { useEffect } from "react"
import Layout from "@/layouts"
import FormContainer from "@/components/form"
import Input from "@/components/form/input"
import MaskInput from "@/components/form/mask-input"
import CpfCnpjInput from "@/components/form/cpf-cnpj-input"
import EntityForm from "@/components/form/entity-form"

import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { useSuppliers } from "@/context/suppliers-context"
import AddressFields from "@/components/form/address"

export default function SupplierEdit() {

    const { id } = useParams()
    const navigate = useNavigate()

    const { suppliers, update } = useSuppliers()

    const supplier = suppliers.find(s => s.id === Number(id))

    const {
        register,
        handleSubmit,
        control,
        reset,
        setValue,
        formState: { errors }
    } = useForm()

    // 🔥 ESSENCIAL: popula o form corretamente
    useEffect(() => {
        if (supplier) {
            reset(supplier)
        }
    }, [supplier, reset])

    function onSubmit(data: any) {

        update({
            ...data,
            id: Number(id)
        })

        navigate("/fornecedores")
    }

    return (
        <Layout>

            <form onSubmit={handleSubmit(onSubmit)}>

                <FormContainer title="Editar Fornecedor">

                    <EntityForm
                        register={register}
                        control={control}
                        setValue={setValue}
                        errors={errors}
                    />

                </FormContainer>

            </form>

        </Layout>
    )
}