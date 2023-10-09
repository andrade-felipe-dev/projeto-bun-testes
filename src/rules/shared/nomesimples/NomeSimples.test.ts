import { expect, test } from "bun:test"
import NomeSimples from "./NomeSimples"

test("devo passar um nome valido e ele construir um objeto", () => {
    const nomeSimples = new NomeSimples("Nome do curso")
    expect(nomeSimples.completo).toBe("Nome do curso")
})

test("devo passar um nome invalido e ele deve me retornar um erro", () => {
    expect(() => new NomeSimples("")).toThrow("Nome é obrigatório")
})

test("devo passar um nome com valor menor que o minimo de caracteres e deve me retornar um erro", () => {
    const minimo = 20

    expect(() => new NomeSimples("Nome é valido", minimo)).toThrow(
        `O nome deve ter no mínimo ${minimo} caracteres`
    )
})

test("devo passar um nome com valor maior que o minimo de caracteres e deve me retornar um erro", () => {
    const minimo = 3
    const maximo = 10

    expect(() => new NomeSimples("Nome é valido", minimo, maximo)).toThrow(
        `O nome deve ter no máximo ${maximo} caracteres`
    )
})
