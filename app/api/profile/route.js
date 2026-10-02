export async function GET() {
    return Response.json({
        name: "Devi Putri Intansari",
        role: "Peserta Bootcamp",
        favoriteTech: ["React", "Next.js"],
    });
}