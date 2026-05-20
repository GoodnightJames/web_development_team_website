export type GalleryCategory = "compound" | "detailing" | "automotive";

export type GalleryItem = {
  id: string;
  category: GalleryCategory;
  alt: string;
  caption?: string;
  src?: string;
  aspect: "portrait" | "landscape" | "square";
};

export const categoryLabels: Record<GalleryCategory, string> = {
  compound: "The compound",
  detailing: "Detailing",
  automotive: "Automotive",
};

export const galleryItems: GalleryItem[] = [
  {
    id: "compound-1",
    category: "compound",
    alt: "The shop exterior at golden hour",
    caption: "The compound, late afternoon",
    aspect: "landscape",
  },
  {
    id: "compound-2",
    category: "compound",
    alt: "Open bay doors looking out toward the coast",
    caption: "Bay doors, looking south",
    aspect: "portrait",
  },
  {
    id: "compound-3",
    category: "compound",
    alt: "Tools laid out on a clean workbench",
    caption: "The bench",
    aspect: "square",
  },
  {
    id: "detailing-1",
    category: "detailing",
    alt: "Paint correction in progress under inspection light",
    caption: "Paint correction, inspection light",
    aspect: "landscape",
  },
  {
    id: "detailing-2",
    category: "detailing",
    alt: "Detailed interior with restored leather",
    caption: "Interior, restored",
    aspect: "portrait",
  },
  {
    id: "detailing-3",
    category: "detailing",
    alt: "Beading water on a freshly coated panel",
    caption: "Coating, day one",
    aspect: "square",
  },
  {
    id: "detailing-4",
    category: "detailing",
    alt: "Wheel face after concours-grade detail",
    caption: "Wheel face, finished",
    aspect: "landscape",
  },
  {
    id: "automotive-1",
    category: "automotive",
    alt: "Car on the alignment rack with sensors mounted",
    caption: "On the alignment rack",
    aspect: "landscape",
  },
  {
    id: "automotive-2",
    category: "automotive",
    alt: "Forged wheel mid-repair, runout being checked",
    caption: "Runout check, wheel repair",
    aspect: "portrait",
  },
  {
    id: "automotive-3",
    category: "automotive",
    alt: "Touchless tire mounting in progress",
    caption: "Touchless mount",
    aspect: "square",
  },
  {
    id: "automotive-4",
    category: "automotive",
    alt: "Road Force balance reading on the display",
    caption: "Road Force readout",
    aspect: "landscape",
  },
  {
    id: "compound-4",
    category: "compound",
    alt: "Sign and street view of the shop",
    caption: "Out front",
    aspect: "landscape",
  },
];
