import "./tag.css";

export default function Tag (
    props:{
        name: string
    }){
    return (
        <div className="w-max px-4 py-1 rounded-2xl bg-pictonblue">
            <p className="text-base font-medium tracking-wider txt-pictonblue">{props.name}</p>
        </div>
    )
}