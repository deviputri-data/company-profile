import Link from "next/link";
import { ArrowRight, Code2, Palette, Sparkles, Users2 } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
 Card,
 CardContent,
 CardHeader,
 CardTitle,
} from "@/components/ui/card";

const features = [
 {
 icon: Code2,
 title: "Web Development",
 description:
 "Fast, scalable web applications built with modern tooling and clean architecture.",
 },
 {
 icon: Palette,
 title: "UI Development",
 description:
 "Clean, responsive interfaces that feel intuitive on every screen size.",
 },
 {
 icon: Users2,
 title: "Consulting",
 description:
 "Practical guidance to help you plan and ship your next digital project.",
 },
];

export default function Home() {
 return (
 <>
 <section className="relative overflow-hidden">
 

 <div className="mx-auto max-w-6xl px-6 py-28 md:py-36 relative">
 

 <div className="animate-fade-up mx-auto max-w-3xl text-center">
 <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-accent/10 px-4 py-1.5 text-sm text-primary">
 <Sparkles className="size-3.5" />
 Welcome to MyWebsite
 </div>

 <h1 className="text-4xl font-bold tracking-tight text-primary md:text-6xl">
 Build something meaningful with technology.
 </h1>

 <p className="mt-6 text-lg leading-8 text-muted-foreground">
 We help individuals and businesses build modern, simple, and
 useful digital experiences.
 </p>

 <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
 <Link
 href="/services"
 className={cn(buttonVariants({ size: "lg" }), "rounded-full bg-accent px-6 text-accent-foreground shadow-lg shadow-accent/30 hover:bg-primary")}
 >
 Explore Services
 <ArrowRight className="size-4" />
 </Link>

 <Link
 href="/contact"
 className={cn(
 buttonVariants({ variant: "outline", size: "lg" }),
 "rounded-full border-border px-6 text-foreground hover:bg-secondary/30"
 )}
 >
 Contact Us
 </Link>
 </div>
 </div>
 </div>
 </section>

 <section className="mx-auto max-w-6xl px-6 py-20">
 <div className="mx-auto max-w-2xl text-center">
 <h2 className="text-2xl font-bold tracking-tight text-primary md:text-3xl">
 What we do
 </h2>
 <p className="mt-3 text-muted-foreground">
 A small set of things we focus on, done well.
 </p>
 </div>

 <div className="mt-12 grid gap-6 md:grid-cols-3">
 {features.map(({ icon: Icon, title, description }) => (
 <Card
 key={title}
 className="group border border-border bg-card transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10"
 >
 <CardHeader>
 <div className="mb-3 flex size-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent/20">
 <Icon className="size-5" />
 </div>
 <CardTitle className="text-base text-foreground">{title}</CardTitle>
 </CardHeader>
 <CardContent>
 <p className="text-sm text-muted-foreground">{description}</p>
 </CardContent>
 </Card>
 ))}
 </div>
 </section>

 <section className="mx-auto max-w-6xl px-6 pb-24">
 <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-8 py-14 text-center">
 <div className="bg-grid bg-radial-fade absolute inset-0 opacity-40" />

 <div className="relative">
 <h2 className="text-2xl font-bold tracking-tight text-primary md:text-3xl">
 Have a project in mind?
 </h2>
 <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
 Let&apos;s talk about what you&apos;re building and how we can
 help.
 </p>

 <Link
 href="/contact"
 className={cn(
 buttonVariants({ size: "lg" }),
 "mt-8 rounded-full bg-accent px-6 text-accent-foreground hover:bg-primary"
 )}
 >
 Get in touch
 <ArrowRight className="size-4" />
 </Link>
 </div>
 </div>
 </section>
 </>
 );
}