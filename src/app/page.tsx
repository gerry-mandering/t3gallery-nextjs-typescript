import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/c6d8b6c2-fb20-4198-bf7c-c6d184bae3b2-18upr.webp",
  "https://utfs.io/f/46f4a38d-6f7f-4202-bd14-414cfcbd7a2d-eb5ot9.webp",
  "https://utfs.io/f/18556185-c4b5-4d1d-9c9e-00d3f1be812d-crxj7c.webp",
  "https://utfs.io/f/52d8ed46-b862-4e1c-bb23-33df55461735-12dafl.webp",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt={`Image ${image.id}`} />
          </div>
        ))}
      </div>
    </main>
  );
}
