import Leftbar from "@/components/leftbar";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900 px-8 max-w-screen-2xl text-white mx-auto">
      <Navbar />
      <Leftbar />
    </main>
  );
}
