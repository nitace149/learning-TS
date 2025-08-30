import type { ReactElement } from "react";

export interface ButtomProps {
    varient: "Primary" | "Secondary";
    size: "sm" | "md" | "lg";
    text?: String;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onclick?: () => void;
}


const VarientStyle = {
    "Primary": "bg-purple-600 text-white",
    "Secondary": "bg-purple-300 text-purple-500"
}

const defaultStyle = "flex rounded-md"

const sizeStyle = {
    "sm": "py-1 px-2",
    "md": "py-2 px-4",
    "lg": "py-4 px-6",
}

export const Button = (props: ButtomProps) => {
    return <button className={`${VarientStyle[props.varient]} ${defaultStyle} ${sizeStyle[props.size]} `} >

        {props.startIcon ? <div className="pr-2 " >{props.startIcon}</div> : null}
        {props.text}
        {props.endIcon ? <div className="pl-2 " >{props.endIcon}</div> : null}

    </button>

}



