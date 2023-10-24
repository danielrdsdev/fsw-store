import { Badge } from '@/components/ui/badge'
import { authOptions } from '@/lib/auth'
import { prismaClient } from '@/lib/prisma'
import { PackageSearch } from 'lucide-react'
import { getServerSession } from 'next-auth'
import { OrderItem } from './components/order-item'

export const dynamic = 'force-dynamic'

export default async function OrderPage() {
  const user = getServerSession(authOptions)

  if (!user) {
    return <p>Access Denied</p>
  }

  const orders = await prismaClient.order.findMany({
    where: {
      userId: (user as any).id,
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  })

  return (
    <main className="container py-16">
      <section className="space-y-8">
        <Badge
          variant="outline"
          className="px-3 py-2 border-2 font-bold uppercase border-primary"
        >
          <PackageSearch className="w-4 h-4 mr-2" />
          Meus pedidos
        </Badge>

        <div className="space-y-5">
          {orders.map((order) => (
            <OrderItem key={order.id} order={order} />
          ))}
        </div>
      </section>
    </main>
  )
}
