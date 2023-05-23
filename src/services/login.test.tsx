import { login } from "./login";

const mockSetIsLoggedIn = jest.fn();
const mockNavigate = jest.fn();

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: () => ({
    setIsLoggedIn: mockSetIsLoggedIn,
  }),
}));

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockNavigate,
}));

describe("test login", () => {
  const mockAlert = jest.fn();

  Object.defineProperty(global, "alert", {
    configurable: true,
    writable: true,
    value: mockAlert,
  });

  const mockEmail = "zemartins81@gmail.com";

  it("Deve exibir um alert com boas vindas caso o email seja válido", async () => {
    const  response = await login(mockEmail);
    expect(response).toBeTruthy()
  });

  it("Deve exibir um alert de erro caso o email seja inválido", async () => {
    const  response = await login("zemartins81@gmail.co");
    expect(response).toBeFalsy()
  });
});
