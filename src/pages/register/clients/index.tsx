import FormContainer from "@/components/form"
import Input from "@/components/form/input"
import Layout from "@/layouts"
import CpfCnpjInput from "@/components/form/cpf-cnpj-input"
import MaskInput from "@/components/form/mask-input"
import AddressFields from "@/components/form/address"
import { useNavigate } from "react-router-dom"
import { useClients } from "@/context/clients-context"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

export default function Client() {

  const clientSchema = z.object({
    cpfCnpj: z.string().min(11, "CPF/CNPJ é obrigatório"),
    razaoSocial: z.string().min(1, "Razão social é obrigatória"),
    nomeFantasia: z.string().min(1, "Nome fantasia é obrigatório"),
    inscricaoEstadual: z.string().optional(),
    inscricaoMunicipal: z.string().optional(),
    telefone: z.string().min(8, "Telefone é obrigatório"),

    cep: z.string().min(8, "CEP é obrigatório"),
    rua: z.string().min(1, "Rua é obrigatória"),
    numero: z.string().optional(),
    bairro: z.string().min(1, "Bairro é obrigatório"),
    cidade: z.string().min(1, "Cidade é obrigatória"),
    estado: z.string().min(2, "Estado é obrigatório"),
  })

  const {
    register,
    handleSubmit,
    control,
    setValue,
    setError,
    clearErrors,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      cpfCnpj: "",
      razaoSocial: "",
      nomeFantasia: "",
      inscricaoEstadual: "",
      inscricaoMunicipal: "",
      telefone: "",
      cep: "",
      rua: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: "",
    }
  })

  const navigate = useNavigate()
  const { add } = useClients()

  function onSubmit(data: any) {

    add(data)

    navigate("/clientes")
  }

  return (
    <Layout>

      <form onSubmit={handleSubmit(onSubmit)}>

        <FormContainer title="Cadastro de Empresa">

          <div className="flex flex-col gap-2 mt-4">
            <h3 className="text-lg font-semibold border-b pb-2">
              Dados da empresa
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
              <CpfCnpjInput
                label="CPF/CNPJ"
                name="cpfCnpj"
                register={register}
                error={errors.cpfCnpj?.message}
              />

              <Input
                label="Razão Social"
                name="razaoSocial"
                register={register}
                error={errors.razaoSocial?.message}
              />

              <Input
                label="Nome Fantasia"
                name="nomeFantasia"
                register={register}
                error={errors.nomeFantasia?.message}
              />

              <Input
                label="Inscrição Estadual"
                name="inscricaoEstadual"
                register={register}
                error={errors.inscricaoEstadual?.message}
              />

              <Input
                label="Inscrição Municipal"
                name="inscricaoMunicipal"
                register={register}
                error={errors.inscricaoMunicipal?.message}
              />

              <MaskInput
                label="Telefone"
                name="telefone"
                mask="(00) 00000-0000"
                control={control}
                error={errors.telefone?.message}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-4">
            <h3 className="text-lg font-semibold border-b pb-2">
              Endereço
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
              <AddressFields
                register={register}
                control={control}
                setValue={setValue}
                errors={errors}
                setError={setError}
                clearErrors={clearErrors}
              />
            </div>
          </div>

        </FormContainer>

      </form>

    </Layout>
  )
}