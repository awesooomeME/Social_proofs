import BlogReview from '@/components/BlogReview'
import UserTestimony from '@/components/UserTestimony'

import colton from '@/public/images/image-colton.jpg'
import anne from '@/public/images/image-anne.jpg'
import irene from '@/public/images/image-irene.jpg'

import bg_top_desktop from '@/public/images/bg-pattern-top-desktop.svg'
import bg_bottom_desktop from '@/public/images/bg-pattern-bottom-desktop.svg'
import Image from 'next/image'

export default function Home() {
  const users = [{avatar: colton, name: "Colton Smith", 
    testimony: '"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"'},
                {avatar: irene, name: "Irene Roberts",
    testimony: '"Custome service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."'},
                {avatar: anne, name: "Anne Wallace",
    testimony: '"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"'}]

  const reviews = [{stars: 5, blog: "Reviews"}, {stars: 5, blog: "Report Guru"}, {stars: 5, blog: "BestTech"}]
  
  return (
    <main className='flex justify-center items-center w-screen min-h-screen relative'>
      <div className='absolute top-0 left-0 w-[1000px] h-auto'>
        <Image src={bg_top_desktop} alt=''/>
      </div>
      <div className='absolute bottom-0 right-0 w-[1200px] h-auto'>
        <Image src={bg_bottom_desktop} alt=''/>
      </div>
      <div className='w-[90%] lg:w-[70%] flex flex-col gap-10 lg:gap-20 py-10'>
        <div className='flex flex-col lg:flex-row md:justify-between items-center gap-5'>
          <div className='lg:w-1/2 lg:pr-20'>
            <h1 className='text-very_dark_magenta font-bold text-center 
              text-3xl lg:text-[4em] leading-[1] lg:text-left
              '>
              10,000+ of our users love our products.
            </h1>
            <h1 className='text-dark_grayish_magenta mt-3 text-sm lg:text-lg text-center
              lg:text-left'>
              We only provide great products combined with excellent customer service.
              See what our satisfied customers are saying about our services.
            </h1>
          </div>
          <div className='flex-1 flex flex-col gap-5 justify-center'>
            {reviews.map((review, index) => <BlogReview stars={review.stars} blog={review.blog} gap={index} key={review.blog}/>)}
          </div>
        </div>
        <div className='flex-1 flex flex-col lg:flex-row gap-5 justify-between'>
          {users.map((user, index) => {
            return (
                <UserTestimony avatar={user.avatar} name={user.name} testimony={user.testimony} gap={index} key={user.name}/>
            )
          })}
        </div>
      </div>
    </main>
  )
}
