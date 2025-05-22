import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
         {"Sup Nerds, are you guyl ready to build some awesome stuff with Next.js?"}
         This is the second page of the app directory. You can navigate to the first page by clicking the link below.
      </div>
    </main>
  );
}
