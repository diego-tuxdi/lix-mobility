import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest { return { name: "Lix Mobility", short_name: "Lix", description: "La nueva forma de moverte.", start_url: "/", display: "standalone", background_color: "#ffffff", theme_color: "#0b3553", icons: [] }; }
