import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <main className="space-y-16 py-16 lg:pt-0">
      <Skeleton className="h-[40rem]" />

      <section className="container">
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 md:grid-cols-3 xl:grid-cols-6">
          {[...Array(6)].map((_, index) => (
            <Skeleton key={index} className="h-10 w-full" />
          ))}
        </div>
      </section>

      <section className="container space-y-4">
        <Skeleton className="h-8 w-28" />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {[...Array(6)].map((_, index) => (
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

      <section className="container flex items-center gap-8">
        <Skeleton className="h-52 w-full" />
        <Skeleton className="h-52 w-full" />
      </section>

      <section className="container space-y-4">
        <Skeleton className="h-8 w-28" />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {[...Array(6)].map((_, index) => (
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

      <section className="container">
        <Skeleton className="h-52 w-full" />
      </section>

      <section className="container space-y-4">
        <Skeleton className="h-8 w-28" />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {[...Array(6)].map((_, index) => (
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
