"use client";

import Image from "next/image";
import coffee from "@/public/images/герметик без носика.jpg";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { getServerSession } from "next-auth";
import { Metadata } from "next";

export default function Home() {
  // const session = await getServerSession(authOptions);
  return (
    <main className="relative h-screen">
      <h1>Hello World</h1>
      <button
        onClick={async () => {
          const _ = (await import("lodash")).default;
          const users = [{ name: "c" }, { name: "b" }, { name: "a" }];

          const sorted = _.orderBy(users, ["name"]);
          console.log(sorted);
        }}
      >
        Show
      </button>
    </main>
  );
}

// {
//   /* <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
//       <Link href="/users">Users</Link>
//       <ProductCard /> */
// }

{
  /* <Image
        src="https://bit.ly/react-cover"
        alt="Coffee"
        fill
        className="object-cover"
        sizes="(max-width: 480px) 100vw, 
        (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      />

export const metadata: Metadata = {
  title: "...",
};

export async function generateMetaData(): Promise<Metadata> {
  const product = await fetch("");

  return {
    title: "product.title",
    description: "...",
  };
} */
}
