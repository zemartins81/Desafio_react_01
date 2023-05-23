const conta = {
    email: 'zemartins81@gmail.com',
    password: '123456',
    name: 'José Carlos',
    balance: 200,
    id: '1234'
}

export const api = new Promise((resolve ) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})