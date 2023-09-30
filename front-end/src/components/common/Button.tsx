import classNames from "classnames";
import { ReactNode } from "react";

interface IButton {
    children: ReactNode;
    className: string;
}

export default function Button({ children, className }:IButton):JSX.Element {
    return (
        <>
            <button className={classNames("transition-colors", className)}>{children}</button>
        </>

    );
}