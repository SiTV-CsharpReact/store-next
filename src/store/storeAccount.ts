import create from 'zustand';

interface StoreAccount {
    LoginSuccess:boolean;
    Email: string;
    PopupLogin:boolean;
    IsRegister:boolean;
    setEmail: (value: string) => void;
    setLoginSuccess: (value: boolean) => void;
    setPopupLogin:(value: boolean) => void;
    setIsRegister:(value: boolean) => void;
}

const useStoreAccount = create<StoreAccount>((set) => ({
    LoginSuccess: false,
    Email: "",
    PopupLogin:false,
    IsRegister:false,
    setEmail: (value) => set({ Email: value }),
    setLoginSuccess: (value) => set({ LoginSuccess: value }),
    setPopupLogin: (value) => set({ PopupLogin: value }),
    setIsRegister: (value) => set({ IsRegister: value }),
}));

export default useStoreAccount;