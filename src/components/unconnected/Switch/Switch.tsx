import React from "react";
import Switch from "react-switch";

interface Props {
    onChange(): void;
    checked: boolean;
    label?: string;
}

const SwicthComponent: React.FC<Props> = (props) => {
    return (
        <div>
            <label>
                {props.label && <span>{props.label}</span>}
                <Switch
                    {...props}
                    onColor="#63deff"
                    onHandleColor="#63deff"
                    handleDiameter={30}
                    uncheckedIcon={false}
                    checkedIcon={false}
                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                    height={20}
                    width={48}
                    className="react-switch"
                    id="material-switch"
                />
            </label>
        </div>
    );
};

export default SwicthComponent;
