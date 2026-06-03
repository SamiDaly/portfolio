import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "coffe-shop",
    title: "Coffee-Shop",
    imageUrl: "/Skärmavbild 2026-05-21 kl. 23.13.33.png",
    githubLink: "https://github.com/SamiDaly/WebbShop-frontend-ts.git",
  },
  {
    id: "auction-site",
    title: "Auction Site",
    imageUrl: "/Skärmavbild 2026-05-21 kl. 23.24.05.png",
    githubLink: "https://github.com/SamiDaly/realtime-auction-platform.git",
  },
  {
    id: "movie-site",
    title: "Movie Site",
    imageUrl: "/Skärmavbild 2026-05-21 kl. 23.28.48.png",
    githubLink: "https://github.com/SamiDaly/groupproject.git",
  },
];

export function getProjectById(id?: string) {
  return projects.find((project) => project.id === id);
}
