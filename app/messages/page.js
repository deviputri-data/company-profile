import { connection } from "next/server";
import { supabase } from "@/lib/supabase";
import { deleteMessageAction } from "./actions";

export default async function MessagesPage() {
  await connection();

const { data: messages, error } = await supabase
  .from("messages")
  .select("*")
  .order("created_at", { ascending: false });

if (error) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold">Pesan Masuk</h1>
      <p className="mt-8 text-red-600">Gagal memuat pesan: {error.message}</p>
    </section>
  );
}

  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="text-3xl font-bold">Pesan Masuk</h1>

      <div className="mt-8 space-y-4">
        {messages.length === 0 ? (
          <p className="text-muted-foreground">Belum ada pesan masuk.</p>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} className="rounded-lg border p-4">
              <p className="font-medium">{msg.name} — {msg.email}</p>
              <p className="mt-1 text-sm text-muted-foreground">{msg.message}</p>

              <form action={deleteMessageAction} className="mt-3">
                <input type="hidden" name="id" value={msg.id} />
                <button
                  type="submit"
                  className="cursor-pointer rounded-md border border-[#FFDE59]/40 px-4 py-1.5 font-sans text-sm font-semibold text-[#FFDE59] transition-colors hover:border-red-400 hover:bg-red-500/10 hover:text-red-400"
                >
                  Hapus
                </button>
              </form>
            </div>
          ))
        )}
      </div>
    </section>
  );
}