import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <section>
        <Image
          src="/banner-home-01.png"
          width={0}
          height={0}
          className="h-auto w-full object-contain"
          sizes="100vw"
          alt="Até 50% de desconto só esse mês"
        />
      </section>
    </main>
  )
}
