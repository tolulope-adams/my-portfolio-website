// styles
import './form-input.css';
// components
import Image from 'next/image';

export default function FormInput(
    props:{
        name: string
        icon?: any
        type?: string
        placeholder?: string
    }
){
    return(
        <div className='flex flex-col gap-1'>
            <label className='text-base font-base txt-gradient tracking-wider'>{props.name}*</label>
            <div className='flex flex-row gap-2 rounded px-4 py-2 border-2'>
                <div></div>
                {props.icon && <Image className='w-6 h-6' alt="My Logo" src={props.icon} priority/>}
                {props.icon ? (
                    <input className='input txt-gradient bg-transparent' type={props.type} name={props.name} placeholder={props.placeholder}/>
                    ):(
                    <textarea className='h-24 textarea txt-gradient bg-transparent' name={props.name} placeholder={props.placeholder}/>
                )}
            </div>
        </div>
    )
}