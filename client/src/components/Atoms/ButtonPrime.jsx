import {Button} from "primereact/button";
import {useNavigate} from "react-router-dom";


export const ButtonBasic = ({label, className, ...props}) => {
    return <Button label={label} className={`p-button-primary ${className}`} {...props} />;
};


export const ButtonLink = ({ link, label, className, ...props }) => {
    const navigate = useNavigate();

    const handleClick = (event) => {
        event.preventDefault();
        navigate(link, { replace: true });
    };

    return (
        <Button onClick={handleClick} label={label} className={`p-button-link ${className}`} {...props} />
    );
};

export const ButtonIcon = ({icon, label, className, ...props}) => {
    return (
        <Button icon={icon} label={label} className={`p-button-raised  p-button-text ${className}`} {...props} />
    );
};

export const ButtonSeverity = ({label, severity, className, ...props}) => {
    const severityClass = {
        success: "p-button-success",
        warning: "p-button-warning",
        error: "p-button-danger",
    }[severity];

    return <Button label={label} className={`${severityClass} ${className}`} {...props} />;
};

export const ButtonDisabled = ({label, className, ...props}) => {
    return <Button label={label} className={`p-button-primary p-disabled ${className}`} {...props} disabled/>;
};

export const ButtonBadge = ({label, badge, className, ...props}) => {
    return (
        <Button label={label} className={`p-button-primary ${className}`}>
            <span className="p-badge">{badge}</span>
        </Button>
    );
};


export const ButtonSet = ({children, className, ...props}) => {
    return <div className={`p-buttonset ${className}`} {...props}>{children}</div>;
};
