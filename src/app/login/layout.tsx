export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex items-center justify-center pt-56 pb-16">
      {children}
    </main>
  )
}
