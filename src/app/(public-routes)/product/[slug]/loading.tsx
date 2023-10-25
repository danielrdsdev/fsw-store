import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <main className="container space-y-8 pb-16 lg:py-16">
      <div className="grid h-full grid-cols-1 gap-8 lg:grid-cols-2">
        <Skeleton className="lg:h-[40rem]" />
        <Skeleton className="lg:h-[40rem]" />
      </div>
      <div className="space-y-4 lg:p-0">
        <Skeleton className="h-8 w-36" />
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
      </div>
    </main>
  )
}
