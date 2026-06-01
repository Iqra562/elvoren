import z from 'zod'

export const CreateProductSchema = z.object({
    name: z.string().min(1).max(100),
     thumbnail:z.string(),
    description:z.string(),
    price : z.number().positive(),
    stock: z.number().int().min(0),
})
