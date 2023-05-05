import { login } from "./login"


describe('test login', () => {


    it('Deve exibir um alert com boas vindas', () => {
        const mockAlert = jest.fn();
        Object.defineProperty(global, 'alert', {
          configurable: true,
          writable: true,
          value: mockAlert,
        });
      
        login();
      
        expect(mockAlert).toBeCalled();
        expect(mockAlert).toHaveBeenCalledWith('Bem vindo!');
      });
})