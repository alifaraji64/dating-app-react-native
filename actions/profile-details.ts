import { supabase } from "@/lib/supabase"
import { Database } from '../lib/database.types';
import { useAuth } from "@/context/auth-context";
export const checkDetailsExist = async (): Promise<User | Error> => {
    const { user } = useAuth()
    try {
        const { data, error } = await supabase.from('user').select('*').match({ id: user?.id }).returns<User>();
        console.log(data);

        if (error) {
            console.log(error)
            throw new Error('error checkDetailsExist: ' + error)
        }
        return data;
    } catch (error) {
        console.log(error);
        throw new Error('error checkDetailsExist: ' + error)
    }

}