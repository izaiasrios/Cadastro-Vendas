import {InputHTMLAttributes} from 'react'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    onChange?: (value) => void;
    label: string;
    columnClasses?: string;
    id: string;

}

export const Input: React.FC<InputProps> = ({
    onChange,
    label,
    columnClasses,
    id,
    ...inpuProps
} : InputProps) => {
    return (
        <div className={'field column ${columnClasses}' }>
                    <label className='label' htmlFor={id}>{label}</label>
                    <div className="control">
                        <input type="text" className="input" 
                        id={id} {...inpuProps}
                        onChange={event => {
                            if(onChange){
                                onChange(event.target.value)
                            }
                         }} 
                         />
                    </div>
                </div>
    )
}
