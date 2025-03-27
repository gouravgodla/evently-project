import { title } from "process"
import { start } from "repl"
import { z } from "zod"
export const eventFormSchema = z.object({
    title: z.string().min(3, 'Title must be at least 3 characters'),
    description: z.string().min(3,'Description must be at least 3 characters').max(400 ,'Description must be less than 400 characters'),
    location: z.string().min(3, 'Location must be at least 3 characters').max(400, 'Location must be less than 400 characters'),
    imageUrl: z.string(),
    startDateTime: z.date(),
    endDateTime: z.string(),
    price: z.string(),
    isFree: z.boolean(),
<<<<<<< HEAD
    url: z.string().url(),
    categoryId: z.string().min(1, "Category is required"), // Added categoryId
=======
    url: z.string().url()

>>>>>>> ec21b564e99913ddf4e4158036753aa8ac30f42b
  })