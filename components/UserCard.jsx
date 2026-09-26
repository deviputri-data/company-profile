"use client";

import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { FavoriteContext } from "@/context/FavoriteContext";
import { Heart } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function UserCard({ user }) {
  const initials = user.name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const { toggleFavorite, isFavorite } = useContext(FavoriteContext);
  const favorited = isFavorite(user.id);

  return (
    <Card className="group border border-white/10 bg-foreground/3 transition-all hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl hover:shadow-black/20">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-primary/40 to-primary/10 text-sm font-semibold">
            {initials}
          </div>
          <CardTitle>{user.name}</CardTitle>
        </div>
      </CardHeader>

      <CardContent>
        <p className="text-sm text-muted-foreground">{user.email}</p>
        <p className="mt-1 text-sm text-muted-foreground">
          {user.company.name}
        </p>

        <div className="mt-4 flex items-center gap-2">
          <Button className="flex-1 rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
            View Profile
          </Button>

          <Button
            onClick={() => toggleFavorite(user)}
            variant={favorited ? "default" : "outline"}
            className={
              favorited
                ? "rounded-full border-0 bg-linear-to-r from-accent to-primary text-primary-foreground hover:opacity-90"
                : "rounded-full border-border bg-background text-foreground hover:bg-foreground/5"
            }
          >
            <Heart className={favorited ? "fill-current" : ""} size={16} />
            {favorited ? "Favorited" : "Add Favorite"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
