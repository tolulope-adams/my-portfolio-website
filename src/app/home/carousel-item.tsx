import './carousel-item.css';
import Image from 'next/image';
import Tag from './tag';
import Logo from '../asset/icons/github.svg';

export default function CarouselItem (
    props:{
        icon: string,
        title: string,
        description: string,
        tags: string[]
    }){
        return (
        <div className='w-full flex flex-col items-center justify-items-center gap-6 p-10 rounded-full5 text-white bg-gradient'>
            <Image alt="My Logo" src={Logo} width={28} height={28} priority/>
            <h2 className='uppercase text-center text-lg font-bold tracking-wider'>{props.title}</h2>
            <p className='w-full text-center text-base font-normal tracking-wider text-truncate bg-red-500'>
                {props.description}</p>
            <h3 className='uppercase text-center text-lg font-bold tracking-wider'>SKILLS &amp; TOOLS</h3>
            <div className='flex flex-row flex-wrap justify-items-center justify-center gap-2'>
                {
                    props.tags.map((item, index) => (
                        <Tag key={index} name={item}/>
                    ))
                }
            </div>
        </div>
    )
};