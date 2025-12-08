import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata:Metadata = {
    title:"Not Found | Flowtooly"
}

export default function CatchAllPage() {
  notFound();
}
