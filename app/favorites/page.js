// app/favorites/page.js
"use client";

import { useContext } from "react";
import { FavoriteContext } from "@/context/FavoriteContext";
import UserCard from "@/components/UserCard";

export default function FavoritesPage() {
  const { favorites } = useContext(FavoriteContext);

  return (
    <section className="relative">
      <div className="bg-grid bg-radial-fade absolute inset-0 -z-10" />

      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-primary">Directory</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">
            My Favorite Users
          </h1>
          <p className="mt-4 text-muted-foreground">
            Daftar user yang sudah kamu tandai sebagai favorite.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {favorites.length > 0 ? (
            favorites.map((user) => <UserCard key={user.id} user={user} />)
          ) : (
            <div className="col-span-full flex flex-col items-center gap-3 py-16 text-center text-muted-foreground">
              <p>Belum ada user yang di-favorite.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}