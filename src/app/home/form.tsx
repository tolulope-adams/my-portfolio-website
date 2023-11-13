import FormInput from './form-input';
// icons
import Name from '../asset/icons/name.svg';
import Email from '../asset/icons/email-address.svg';
import Subject from '../asset/icons/subject.svg';

export default function Form(){
    return(
        <form>
            <div className='flex flex-col gap-4'>
                <FormInput name="Name" icon={Name}/>
                <FormInput name="Email" icon={Email}/>
                <FormInput name="Subject" icon={Subject}/>
                <FormInput name="Message" />
            </div>
            <button className="w-full my-6 p-4 text-base text-white rounded bg-gradient">Submit</button>
        </form>
    )
}