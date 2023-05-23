interface IDioBank {
    islogged: boolean
}

const dioBank = {
    islogged: false
}

export const getAllLocalStorage = (): string | null => {
    return localStorage.getItem('diobank')
}

export const createLocalStorage = () => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}

export const changeLocalStorage = (dioBank: IDioBank) => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}