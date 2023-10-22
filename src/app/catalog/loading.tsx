import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <main className="container py-16">
      <section className="space-y-8">
        <Skeleton className="w-32 h-10" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <Skeleton key={index} className="w-full h-48" />
          ))}
        </div>
      </section>
    </main>
  )
}
