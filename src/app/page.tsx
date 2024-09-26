import Image from "next/image";
import Link from "next/link";

import { getItems } from "../api/eldenring.api";

export default async function Home() {
  const items = await getItems(0);
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
      <h1 className="text-2xl">Elden Ring Item Lists</h1>
      <table className="w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Effect</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td><Link href={`/item/${item.id}`}>{item.name}</Link></td>
              <td className="text-center">{item.effect}</td>
              <td className="flex justify-center">
                <div className="relative w-[200px] h-[200px]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
