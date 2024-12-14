
type SelectProps = {
    title: string;
    option: string;
    value: string | null;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    children: React.ReactNode;
}

const Select: React.FC<SelectProps> = ({ title, option, value, onChange, children }) => {
    return (
        <div className="w-full flex flex-col justify-center gap-2 ">
        <label>{title}</label>  
        <select className='w-[200px] p-2 border border-gray-300 rounded-md'
            value={value ?? ''} onChange={onChange}>
            <option value=''>{option}</option>
            {children}
        </select>
        </div>
    );
}

export default Select;
