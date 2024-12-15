import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] bg-black items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <h1   
    className="text-3xl font-bold text-center p-6 sm:text-5xl bg-yellow-200 rounded-xl box-shadow: 0 4px 6px rgba(255, 255, 255, 0.1);" 
    >Hello world in next js</h1>
    </div>
  );
}
