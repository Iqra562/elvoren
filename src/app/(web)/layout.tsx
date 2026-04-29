import Header from "@/components/layout/Header"

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
     <div>
      <Header />

       <main className="container mx-auto p-6">{children}</main>
      <footer>{/* Footer */}</footer>
    </div>
  )
}