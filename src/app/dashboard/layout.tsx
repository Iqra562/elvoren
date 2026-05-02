import { Sidebar } from "@/components/layout/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (

    
  

      <div className="flex h- overflow-hidden">
<div className="">

        <Sidebar />
</div>
<div className="w-full h-screen bg-gray-100 overflow-y-auto">

        <main className="flex-1 p-8">{children}</main>

</div>
        </div>
  )
}