import Input from "../input"
import MaskInput from "../mask-input"
import CpfCnpjInput from "../cpf-cnpj-input"
import AddressFields from "../address"
import Logo from "../logo"

type Props = {
    register: any
    control: any
    setValue: any
    errors: any
    setError?: any
    clearErrors?: any
    defaultLogo?: string
    showLogo?: boolean
}

export default function EntityForm({
    register,
    control,
    setValue,
    errors,
    setError,
    clearErrors,
    defaultLogo,
    showLogo = false
}: Props) {

    return (
        <div className="flex flex-col gap-8">

            {/* 🔹 DADOS */}
            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold border-b pb-2">
                    Dados da empresa
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                    <CpfCnpjInput
                        label="CPF/CNPJ"
                        name="cpfCnpj"
                        register={register}
                        error={errors?.cpfCnpj?.message}
                    />

                    <Input
                        label="Razão Social"
                        name="razaoSocial"
                        register={register}
                        error={errors?.razaoSocial?.message}
                    />

                    <Input
                        label="Nome Fantasia"
                        name="nomeFantasia"
                        register={register}
                        error={errors?.nomeFantasia?.message}
                    />

                    <Input
                        label="Inscrição Estadual"
                        name="inscricaoEstadual"
                        register={register}
                    />

                    <Input
                        label="Inscrição Municipal"
                        name="inscricaoMunicipal"
                        register={register}
                    />

                    <MaskInput
                        label="Telefone"
                        name="telefone"
                        mask="(00) 00000-0000"
                        control={control}
                        error={errors?.telefone?.message}
                    />

                </div>
            </div>

            {/* 🔹 ENDEREÇO */}
            <div className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold border-b pb-2">
                    Endereço
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

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

            {/* 🔹 LOGO */}
            {showLogo && (
                <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold border-b pb-2">
                        Logo
                    </h3>

                    <Logo
                        label="Upload da logo"
                        name="logo"
                        setValue={setValue}
                        defaultValue={defaultLogo}
                    />
                </div>
            )}

        </div>
    )
}