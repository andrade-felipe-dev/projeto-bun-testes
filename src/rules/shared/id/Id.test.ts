import { expect, test } from "bun:test"
import Id from "./Id"

test("Devo não passar nada por parâmetro e devo receber a instancia com um id gerado", () => {
    const id = new Id()
    expect(id).toBeInstanceOf(Id)
})
