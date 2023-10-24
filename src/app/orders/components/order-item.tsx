import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Prisma } from '@prisma/client'
import { format } from 'date-fns'
import { OrderProductItem } from './order-product-item'

type OrdemItemProps = {
  order: Prisma.OrderGetPayload<{
    include: {
      orderProducts: {
        include: {
          product: true
        }
      }
    }
  }>
}

export const OrderItem = ({ order }: OrdemItemProps) => {
  return (
    <Card className="px-6">
      <Accordion type="single" className="w-full" collapsible>
        <AccordionItem value={order.id} className="border-0">
          <AccordionTrigger className="hover:no-underline text-sm font-bold">
            <div className="space-y-1 text-left">
              Pedido com {order.orderProducts.length} produto(s)
            </div>
          </AccordionTrigger>

          <AccordionContent>
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex flex-col font-bold text-xs">
                  <p className="uppercase">Status</p>
                  <p className="text-[#8162FF]">{order.status}</p>
                </div>

                <div className="flex flex-col text-xs">
                  <p className="uppercase font-bold">Data</p>
                  <p className="text-muted-foreground">
                    {format(order.createdAt, 'd/MM/y')}
                  </p>
                </div>

                <div className="flex flex-col text-xs">
                  <p className="uppercase font-bold">Pagamento</p>
                  <p className="text-muted-foreground">Cartao</p>
                </div>
              </div>

              <Separator />

              {order.orderProducts.map((orderProduct) => (
                <OrderProductItem
                  key={orderProduct.id}
                  orderProduct={orderProduct}
                />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  )
}
