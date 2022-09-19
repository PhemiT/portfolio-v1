import React from "react"

interface IconProps {
    color?: string,
    icon: string,
    size?: number
}

const defaultProps = {
    color: "#000",
    icon: "",
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
            <path
                style={styles.path}
                d={props.icon}
            >

            </path>

        </svg>
    )
}

Icon.defaultProps = defaultProps

export default Icon