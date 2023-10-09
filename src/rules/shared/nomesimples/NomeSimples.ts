export default class NomeSimples {
    constructor(
        readonly completo: string,
        readonly min: number = 3,
        readonly max: number = 120
    ) {
        if (min > max) {
            throw new Error("Tamanho mínimo é maior que o tamanho máximo")
        }

        if (!completo) {
            throw new Error("Nome é obrigatório")
        }

        if (completo.length > max) {
            throw new Error(`O nome deve ter no máximo ${max} caracteres`)
        }

        if (completo.length < min) {
            throw new Error(`O nome deve ter no mínimo ${min} caracteres`)
        }
    }

    parcial(quantidade: number): string {
        return this.completo.substring(0, quantidade)
    }
}
