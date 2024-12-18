import Link from 'next/link';

export default function DashboardLayout({ children }) {
    console.log("🚀 ~ DashboardLayout ~ children:", children);
    return (
        <section className="min-h-screen flex">
            <div className="w-1/3 bg-gray-900 flex flex-col items-center justify-center">
                <Link href={"/dashborad/profile"} className="text-white mb-4">Profile</Link>
                <Link href={"/dashborad/settings"} className="text-white">Settings</Link>
            </div>
            <div className="w-2/3">{children}</div>
        </section>
    );
}