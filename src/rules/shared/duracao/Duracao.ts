export default class Duracao {
    constructor(readonly emsegundos: number) {
        if (emsegundos <= 0) {
            throw new Error("A duração deve ser maior que 0")
        }

        if (!emsegundos) {
            throw new Error("A duração é obrigatória.")
        }
    }

    get emHorasMinutosESegundos(): string {
        const horas = Math.floor(this.emsegundos / 3600) // 1 hora = 3600 segundos
        const minutos = Math.floor((this.emsegundos % 3600) / 60)
        const segundosRestantes = this.emsegundos % 60

        const formatoHora = (n: number) => (n < 10 ? `0${n}` : `${n}`)

        return `${formatoHora(horas)}:${formatoHora(minutos)}:${formatoHora(
            segundosRestantes
        )}`
    }
}
