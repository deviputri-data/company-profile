"use server";

import { messages } from "@/lib/db.js";
import { revalidatePath } from "next/cache";

export async function deleteMessageAction(formData) {
    const id = formData.get("id");

    const index = messages.findIndex((m) => String(m.id) === String(id));
    if (index === -1) return;

    messages.splice(index, 1);

    revalidatePath("/messages");
}