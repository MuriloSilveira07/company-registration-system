import { useEffect } from "react"
import Layout from "@/layouts"
import FormContainer from "@/components/form"
import Input from "@/components/form/input"
import MaskInput from "@/components/form/mask-input"
import CpfCnpjInput from "@/components/form/cpf-cnpj-input"
import EntityForm from "@/components/form/entity-form"

import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { useClients } from "@/context/clients-context"
import AddressFields from "@/components/form/address"

export default function ClientEdit() {

    const { id } = useParams()
    const navigate = useNavigate()

    const { clients, update } = useClients()

    const client = clients.find(s => s.id === Number(id))

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
        if (client) {
            reset(client)
        }
    }, [client, reset])

    function onSubmit(data: any) {

        update({
            ...data,
            id: Number(id)
        })

        navigate("/clientes")
    }

    return (
        <Layout>

            <form onSubmit={handleSubmit(onSubmit)}>

                <FormContainer title="Editar Cliente">

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