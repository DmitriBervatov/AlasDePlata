import {create} from 'zustand';

interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
    login: (token: string, remember: boolean) => void;
    logout: () => void;
    loadToken: () => void;
}

export const useAuth = create<AuthState>((set) => ({
    token: null,
    isAuthenticated: false,
    login: (token, remember) => {
        if (remember) {
            localStorage.setItem("token", token);
        } else {
            sessionStorage.setItem("token", token);
        }
        set({token, isAuthenticated: true});
    },
    logout: () => {
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        set({ token: null, isAuthenticated: false});
    },
    loadToken: () => {
        const token = localStorage.getItem("token") || sessionStorage.getItem("token");
        set({token, isAuthenticated: !!token});
    }
}))