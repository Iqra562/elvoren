export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <aside className="w-64 bg-gray-900 text-white min-h-screen">
        {/* Admin sidebar */}
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}