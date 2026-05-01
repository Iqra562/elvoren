import Header from "@/components/layout/Header"

export default function WebLayout({ children }: { children: React.ReactNode }) {
  return (
     <div>
      <Header />

       <main className="mx-auto ">{children}</main>
      <footer>{/* Footer */}</footer>
    </div>
  )
}