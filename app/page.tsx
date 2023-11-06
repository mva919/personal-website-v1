import Leftbar from "@/components/leftbar";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen px-8 bg-zinc-900 max-w-screen-2xl text-white">
      <Navbar />
      <Leftbar />
    </main>
  );
}
