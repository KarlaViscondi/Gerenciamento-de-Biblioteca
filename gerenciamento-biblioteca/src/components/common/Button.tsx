import classNames from "classnames";
import { ReactNode } from "react";

interface IButton {
    children: ReactNode;
    className: string;
    href?: string;
}

export default function Button({ children, className, href }:IButton):JSX.Element {
    return (
        <>
            {href ? (
                <a href={href} className={classNames("px-6 py-3 uppercase transition-colors", className)}>{children}</a>
            ) : (
                <button className={classNames("px-6 py-3 uppercase transition-colors", className)}>{children}</button>
            )}
        </>
    );
}