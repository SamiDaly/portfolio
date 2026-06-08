import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "coffe-shop",
    title: "Coffee-Shop",
    imageUrl: "/webbShopp.png",
    githubLink: "https://github.com/SamiDaly/WebbShop-frontend-ts.git",
  },
  {
    id: "auction-site",
    title: "Auction Site",
    imageUrl: "/autionSite.png",
    githubLink: "https://github.com/SamiDaly/realtime-auction-platform.git",
  },
  {
    id: "movie-site",
    title: "Movie Site",
    imageUrl: "/movieSite.png",
    githubLink: "https://github.com/SamiDaly/groupproject.git",
  },
];

export function getProjectById(id?: string) {
  return projects.find((project) => project.id === id);
}
