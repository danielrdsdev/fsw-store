import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <main className="container py-16">
      <section className="space-y-8">
        <Skeleton className="h-8 w-28" />

        <div className="space-y-5">
          {[...Array(6)].map((_, index) => (
            <Skeleton key={index} className="h-20 w-full" />
          ))}
        </div>
      </section>
    </main>
  )
}
