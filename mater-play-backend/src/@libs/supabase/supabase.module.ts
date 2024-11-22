import { Module } from "@nestjs/common";
import { SupabaseService } from "./supabase.service";

const supabaseProvider = {
  provide: 'SUPABASE_CLIENT',
  useFactory: async () => {
    const supabase = await import('@supabase/supabase-js');
    return supabase.createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
  }
}

@Module({
  providers: [
    SupabaseService,
    supabaseProvider
  ],
  exports: [
    SupabaseService
  ]
})
export class SupabaseModule {}