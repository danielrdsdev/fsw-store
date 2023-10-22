import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <main className="container py-16">
      <section className="space-y-8">
        <Skeleton className="w-32 h-10" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {[...Array(18)].map((_, index) => (
            <div key={index} className="space-y-4">
              <Skeleton className="w-full h-40" />
              <Skeleton className="w-full h-4" />
              <div className="flex items-center gap-2">
                <Skeleton className="w-1/2 h-4" />
                <Skeleton className="w-1/2 h-4" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
