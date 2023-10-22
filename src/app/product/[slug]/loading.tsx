import { Skeleton } from '@/components/ui/skeleton'

export default function Loading() {
  return (
    <main className="space-y-8 pb-16 lg:container lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
        <Skeleton className="lg:h-[40rem]" />
        <Skeleton className="lg:h-[40rem]" />
      </div>
      <div className="px-6 space-y-4 lg:p-0">
        <Skeleton className="h-8 w-36" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {[...Array(6)].map((_, index) => (
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
      </div>
    </main>
  )
}
