import {changeLocalStorage, createLocalStorage, getAllLocalStorage} from "./storage";

const dioBank = {
    islogged: false
}
describe('test storage', () => {
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')

    it('Deve retornar o objeto no localStorage com a chave diobank', () => {
        getAllLocalStorage()
        expect(mockGetItem).toHaveBeenCalledWith('diobank')
    })

    it('deve criar o objeto no localstorage', () => {
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    })

    it('Deve alterar o valor do objeto no local storage', () => {
        changeLocalStorage(dioBank)
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    })
})