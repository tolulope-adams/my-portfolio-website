
import Image from 'next/image';
import Tag from './tag'
import Placeholder from '../asset/icons/placeholder.jpg';

export default function ProjectItem(
    props:{
        tags: string[]
    }
    ) {
    return (
        <div className='flex flex-col gap-4'>
            <Image className='rounded' alt="My Logo" src={Placeholder} width={160} height={100} priority/>
            <h1 className='text-lg font-bold tracking-wider'>Project Name</h1>
            <p className='text-base font-light tracking-wider'>
                lit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lobortis mattis aliquam faucibus purus in massa tempor nec feugiat
            </p>
            <div className="flex flex-row flex-wrap gap-2">
                {
                props.tags.map((item, index) => (
                    <Tag key={index} name={item}/>
                ))
                }
            </div>
        </div>
    )
}