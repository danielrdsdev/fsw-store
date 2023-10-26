import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <main className="container py-16">
      <section className="space-y-8">
        <Skeleton className="h-10 w-32" />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {[...Array(18)].map((_, index) => (
            <div key={index} className="space-y-4">
              <Skeleton className="h-40 w-full" />
              <Skeleton className="h-4 w-full" />
              <div className="flex items-center gap-2">
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
