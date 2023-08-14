import React, {ChangeEvent, ReactNode} from "react";
import classNames from "classnames";

interface ICheckbox {
    className?: string;
    checked?: boolean;
    onChange?: (checked: boolean) => void;
}

export default function Checkbox({className,checked,onChange,}: ICheckbox): JSX.Element {
    const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
        onChange(event.target.checked);
    }};
    return (
        <label>
            <input 
                type="checkbox"
                className={classNames("cursor-pointer form-checkbox h-5 w-5", className)}
                checked={checked}
                onChange={handleCheckboxChange}
            />
        </label>
    );
}
