import React from "react";

interface IconProps {
    color?: string;
    icon: Array<string>;
    size?: number;
}

const defaultProps = {
    color: "#000",
    icon: [""],
    size: 20
}

const Icon: React.FC<IconProps> = (props: IconProps) => {
    const styles = {
        svg: {
            display: 'inline-block',
            verticalAlign: 'middle',
        },
        path: {
            fill: props.color,
        }
    }

    return (
        <svg
            style={styles.svg}
            width={`${props.size}px`}
            height={`${props.size}px`}
            viewBox="0 0 1024 1024"
        >
            {Array.isArray(props.icon) ? props.icon.map((pathD) => {
                return (
                <path
                style={styles.path}
                d={pathD}
                key={pathD}
                ></path>
                )
            }): 
                null
            }
        </svg>
    )
}

Icon.defaultProps = defaultProps

export default Icon