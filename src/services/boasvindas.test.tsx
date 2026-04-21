import { boasvindas } from "./boasvindas"

describe('boasvinas', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('Deve exibir um alert com boas vindas', () => {
        boasvindas()
        expect(mockAlert).toHaveBeenCalledWith('Bem vinda!')
    })
})