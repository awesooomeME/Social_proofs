import colton from '@/public/images/image-colton.jpg'
import Image from 'next/image';

type UserTestimonyProps = {
    avatar: any,
    name: string,
    testimony: string,
    gap: number
}

const UserTestimony = ({avatar, name, testimony, gap}: UserTestimonyProps) => {
    return (
        <div className={`bg-very_dark_magenta px-5 lg:px-10 py-5 rounded-lg 
            text-white h-[280px] mt-${gap*5}`}>
            <div className='flex items-center gap-5'>
                <div className='rounded-full overflow-hidden'>
                    <Image src={avatar} alt='header' className='w-full h-auto'/>
                </div>
                <div className='lg:text-lg'>
                    <h1>
                        {name}
                    </h1>
                    <h1 className='text-soft_pink'>
                        Verified Buyer
                    </h1>
                </div>
            </div>
            <h1 className='text-sm lg:text-lg mt-5'>
                {testimony}
            </h1>
        </div>
    )
}

export default UserTestimony;