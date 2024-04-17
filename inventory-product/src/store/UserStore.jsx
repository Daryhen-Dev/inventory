import { create }from "zustand"
import { supabase } from "../supabase/supabase.config"
import { InsertUser } from "../supabase/cruduser"

export const useUserStore = create((set, get) => ({
    insertUserAdmin: async (p) => {
        const {data, error} = await supabase.auth.signUp({
            email: p.email,
            password: p.pass,
          })
          if (error) return
          const dataUser = 
          await InsertUser(
            {
                idauth: data.user.id, 
                date_created: new Date(),
                email: p.email, 
                user_type: "admin"   
            }
        )
        return dataUser
    }
}))