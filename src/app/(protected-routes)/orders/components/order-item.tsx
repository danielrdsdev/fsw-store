import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { computeProductTotalPrice } from '@/helpers/product'
import { Prisma } from '@prisma/client'
import { format } from 'date-fns'
import { useMemo } from 'react'
import { getOrderStatus } from '../helpers/status'
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
  const subtotal = useMemo(() => {
    return order.orderProducts.reduce((acc, orderProduct) => {
      return (
        acc + Number(orderProduct.product.basePrice) * orderProduct.quantity
      )
    }, 0)
  }, [order.orderProducts])

  const total = useMemo(() => {
    return order.orderProducts.reduce((acc, product) => {
      const productWithTotalPrice = computeProductTotalPrice(product.product)

      return acc + productWithTotalPrice.totalPrice * product.quantity
    }, 0)
  }, [order.orderProducts])

  const totalDiscounts = subtotal - total

  return (
    <Card className="px-6">
      <Accordion type="single" className="w-full" collapsible>
        <AccordionItem value={order.id} className="border-0">
          <AccordionTrigger className="hover:no-underline text-sm">
            <div className="space-y-1 text-left">
              <p className="font-bold">
                Pedido com {order.orderProducts.length} produto(s)
              </p>
              <span className="text-muted-foreground">
                Feito em {format(order.createdAt, 'd/MM/y')}
              </span>
            </div>
          </AccordionTrigger>

          <AccordionContent>
            <div className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex flex-col font-bold text-xs">
                  <p className="uppercase">Status</p>
                  <p className="text-[#8162FF]">
                    {getOrderStatus(order.status)}
                  </p>
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

              <div className="space-y-3">
                <Separator />

                <div className="flex items-center justify-between text-xs">
                  <p>Sub Total</p>
                  <p>R$ {subtotal.toFixed(2)}</p>
                </div>

                <Separator />

                <div className="flex items-center justify-between text-xs">
                  <p>Entrega</p>
                  <p>GRATIS</p>
                </div>

                <Separator />

                <div className="flex items-center justify-between text-xs">
                  <p>Descontos</p>
                  <p>-R$ {totalDiscounts.toFixed(2)}</p>
                </div>

                <Separator />

                <div className="flex items-center justify-between font-bold text-sm">
                  <p>Total</p>
                  <p>R$ {total.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </Card>
  )
}
