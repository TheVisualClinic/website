export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className='pt-12 pb-16'>
      <div className='container'>
        <h1 className='text-2xl'>Services ID: {params.slug}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perspiciatis neque assumenda
          necessitatibus perferendis dolorem soluta sunt quibusdam quasi illo, obcaecati culpa animi
          quo dolor totam autem vel porro cum.
        </p>
      </div>
    </div>
  )
}
