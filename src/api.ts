const conta = {
    email: 'zemartins81@gmail.com',
    password: '123456',
    name: 'José Carlos'
}

export const api = new Promise((resolve ) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})