import { Badge } from '@/components/ui/badge'
import { authOptions } from '@/lib/auth'
import { prismaClient } from '@/lib/prisma'
import { PackageSearch } from 'lucide-react'
import { getServerSession } from 'next-auth'
import { OrderItem } from './components/order-item'

export const dynamic = 'force-dynamic'

export default async function OrderPage() {
  const session = await getServerSession(authOptions)

  if (!session || !session.user) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-2 p-5">
        <h2 className="font-bold">Acesso Negado!</h2>
        <p className="text-sm opacity-60">Faça login para ver seus pedidos</p>
      </div>
    )
  }

  const orders = await prismaClient.order.findMany({
    where: {
      userId: session.user.id,
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        },
      },
    },
  })

  await new Promise((resolve) => setTimeout(resolve, 4000))

  return (
    <main className="container py-16">
      <section className="space-y-8">
        <Badge
          variant="outline"
          className="border-2 border-primary px-3 py-2 font-bold uppercase"
        >
          <PackageSearch className="mr-2 h-4 w-4" />
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
