import { supabase } from '@/lib/supabase';
import { Profile } from '@/lib/types';
import { User } from '@supabase/supabase-js';
import React, { createContext, useContext, useEffect, useState } from 'react'
import { ActivityIndicator } from 'react-native-paper';


// Define the shape of the context value
interface AuthContextType {
    user: User | null;
    loading: boolean;
    profile:Profile|null;
    setProfile: React.Dispatch<React.SetStateAction<any>>;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: true,
    profile:null,
    setProfile:()=>{}
});
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [profile,setProfile] = useState<Profile|null>(null)
    useEffect(() => {
        const fetchUser = async () => {
            const { data } = await supabase.auth.getUser();
            setUser(data.user);
            setLoading(false);
        };
        fetchUser()
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            console.log('session');
            console.log(session?.user);

            setUser(session?.user ?? null);
        });
        return () => subscription.unsubscribe();
    }, [])

    return (
        <AuthContext.Provider value={{ user, loading,profile,setProfile }}>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                children
            )}
        </AuthContext.Provider>
    )
}
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};