import React, {ChangeEvent, ReactNode} from "react";
import classNames from "classnames";

interface ICheckbox {
    children: ReactNode;
    className?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}

export default function Checkbox({children,className,checked,onChange,}: ICheckbox): JSX.Element {
    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
        onChange(event.target.checked);
    }};
    return (
        <label className="flex items-center space-x-2">
            <input 
                type="checkbox"
                className={classNames("cursor-pointer form-checkbox h-5 w-5 text-green-500 mb-2", className)}
                checked={checked}
                onChange={handleCheckboxChange}
            />
            {children}
        </label>
    );
}
