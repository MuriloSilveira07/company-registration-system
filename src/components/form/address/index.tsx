import { useRef, useState } from "react"
import MaskInput from "../mask-input"
import Input from "../input"
import { UseFormSetValue, FieldErrors } from "react-hook-form"

type Props = {
    register: any
    control: any
    setValue: UseFormSetValue<any>
    errors?: FieldErrors<any>
    setError: any
    clearErrors: any
}

export default function AddressFields({
    register,
    control,
    setValue,
    errors,
    setError,
    clearErrors
}: Props) {
    const [loadingCep, setLoadingCep] = useState(false)
    const timeoutRef = useRef<number | null>(null)

    function clearAddressFields() {
        setValue("rua", "", { shouldValidate: true })
        setValue("numero", "", { shouldValidate: true })
        setValue("bairro", "", { shouldValidate: true })
        setValue("cidade", "", { shouldValidate: true })
        setValue("estado", "", { shouldValidate: true })
    }

    function handleCepChange(value: string) {
        const cep = value.replace(/\D/g, "")

        // se apagar ou deixar incompleto, limpa os campos
        if (cep.length < 8) {
            clearAddressFields()
            clearErrors("cep")
            return
        }

        // evita várias chamadas seguidas
        if (timeoutRef.current) {
            window.clearTimeout(timeoutRef.current)
        }

        timeoutRef.current = window.setTimeout(async () => {
            try {
                setLoadingCep(true)
                clearErrors("cep")

                const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
                const data = await response.json()

                if (data.erro) {
                    clearAddressFields()
                    setError("cep", {
                        type: "manual",
                        message: "CEP não encontrado"
                    })
                    return
                }

                if (!data.logradouro) {
                    clearAddressFields()
                    setError("cep", {
                        type: "manual",
                        message: "Digite um CEP específico de rua"
                    })
                    return
                }

                setValue("rua", data.logradouro || "", { shouldValidate: true })
                setValue("bairro", data.bairro || "", { shouldValidate: true })
                setValue("cidade", data.localidade || "", { shouldValidate: true })
                setValue("estado", data.uf || "", { shouldValidate: true })

            } catch (error) {
                clearAddressFields()
                setError("cep", {
                    type: "manual",
                    message: "Erro ao buscar CEP"
                })
            } finally {
                setLoadingCep(false)
            }
        }, 500)
    }

    return (
        <>
            <div className="flex flex-col gap-1">
                <MaskInput
                    label="CEP"
                    name="cep"
                    mask="00000-000"
                    control={control}
                    onAccept={(value: string) => handleCepChange(value)}
                    error={errors?.cep?.message as string}
                />

                {loadingCep && (
                    <span className="text-xs text-primary">
                        Buscando CEP...
                    </span>
                )}
            </div>

            <Input
                label="Rua"
                name="rua"
                register={register}
                error={errors?.rua?.message as string}
            />

            <Input
                label="Número"
                name="numero"
                register={register}
                error={errors?.numero?.message as string}
            />

            <Input
                label="Bairro"
                name="bairro"
                register={register}
                error={errors?.bairro?.message as string}
            />

            <Input
                label="Cidade"
                name="cidade"
                register={register}
                error={errors?.cidade?.message as string}
            />

            <Input
                label="Estado"
                name="estado"
                register={register}
                error={errors?.estado?.message as string}
            />
        </>
    )
}