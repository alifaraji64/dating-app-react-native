import { z } from "zod";

export const ProfileDetailsSchema = z.object({
    bio: z.string().min(20, { message: 'your bio should be at least 20 characters' }).max(70, { message: 'your bio should not be more than 70 characters' }),
    image: z.string().min(1, { message: 'profile image is required' }),
    full_name: z.string().min(3, { message: 'your full name should be at least 3 characters' }).max(17,{message:'your full name can not be more than 17 characters'}),
    gender: z.string().min(1, { message: 'gender is required' }),
    interested_gender: z.string().min(1, { message: 'you should select which gender you are interested in' }),
    birth_year: z.any({ message: 'birth year is required' }),
    country: z.string().min(1, { message: 'country is required' }),
    goal: z.string().min(1, { message: 'relationship goal is required' }),
    age_range: z.array(z.any()).length(2, { message: 'preferred age range is required' })
})