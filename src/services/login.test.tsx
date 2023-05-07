import { login } from "./login"



describe('test login', () => {

  const mockAlert = jest.fn();
  Object.defineProperty(global, 'alert', {
    configurable: true,
    writable: true,
    value: mockAlert,
  });

  const mockEmail = 'zemartins81@gmail.com'


    it('Deve exibir um alert com boas vindas', async() => {

      await login(mockEmail)      
        expect(mockAlert).toBeCalled();

      });

      it('Deve exibir um alert com boas vindas caso o email seja válido', async() => {

        await login(mockEmail)      

          expect(mockAlert).toHaveBeenCalledWith('Bem vindo! zemartins81@gmail.com');
        });

      it('Deve exibir um alert de erro caso o email seja inválido', async() => {
        await login('zemartins81@gmail.co')      
          expect(mockAlert).toHaveBeenCalledWith('Email inválido');
      })
})