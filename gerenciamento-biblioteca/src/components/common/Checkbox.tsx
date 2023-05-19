import React, {ChangeEvent, ReactNode} from "react";
import classNames from "classnames";

interface ICheckbox {
    children: ReactNode;
    className?: string;
    onChange?: (checked: boolean) => void;
}

export default function Checkbox({children,className,onChange,}: ICheckbox): JSX.Element {
    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
        onChange(event.target.checked);
    }};
    return (
        <label className="flex items-center space-x-2">
            <input 
                type="checkbox"
                className={classNames("form-checkbox h-5 w-5 text-green-500", className)}
                onChange={handleCheckboxChange}
            />
            {children}
        </label>
    );
}
