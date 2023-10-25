import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <main className="container py-16">
      <section className="space-y-8">
        <Skeleton className="h-10 w-32" />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {[...Array(6)].map((_, index) => (
            <Skeleton key={index} className="h-48 w-full" />
          ))}
        </div>
      </section>
    </main>
  )
}
