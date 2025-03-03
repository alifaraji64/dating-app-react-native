import { supabase } from '@/lib/supabase'
import { Database } from '../lib/database.types'
import { useAuth } from '@/context/auth-context'
import { User } from '@/lib/types'
export const checkDetailsExist = async ({
    id
}: {
    id: string
}): Promise<any | Error> => {
    console.log(id);

    const { data, error } = await supabase
        .from('user')
        .select('*')
        .match({ user_id: id })
        .returns()

    if (error) {
        console.log(error)
        throw new Error('error checkDetailsExist: ' + error)
    }
    return data
}

export const submitProfileDetails = async ({ details, uid }: { details: any, uid: string }) => {
    const { image, ...propertiesWithoutAge } = details;

    const { data, error } = await supabase.from('user').insert({
        ...propertiesWithoutAge,
        pictures: [details.image],
        user_id: uid
    })
    if (error) {
        console.log(error);
        throw new Error('error submitProfileDetails: ' + error)
    }
}

export const getProfileDetails = async ({ id }: { id: string }): Promise<User> => {
    const { data, error } = await supabase
        .from('user')
        .select('*')
        .match({ user_id: id }).single<User>()
    if (error) {
        console.log(error);
        throw new Error('error getProfileDetails: ' + error)
    }
    return data;
}
export const updateDetail = async ({ id, fieldName, value }: { id: string, fieldName: keyof User, value: any }) => {
    const { data, error } = await supabase
        .from('user')
        .update({[fieldName]:value})
        .match({user_id:id})
        console.log(data);
        
    if (error) {
        console.log(error);
        throw new Error('error getProfileDetails: ' + error)
    }
}