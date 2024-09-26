import Image from "next/image";
import { getItemById } from "../../../api/eldenring.api";

export default async function ItemDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const item = await getItemById(id);
  return (
    <>
      <Image
        className="dark:invert"
        src="https://nextjs.org/icons/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <h1 className="text-4xl font-bold">{item.name}</h1>
      <Image
        src={item.image}
        alt={item.name}
        width={400}
        height={400}
      />
      <p className="font-bold">Description</p>
      <p>{item.description}</p>
      <p className="font-bold">Effect</p>
      <p>{item.effect}</p>
    </>
  )
}
