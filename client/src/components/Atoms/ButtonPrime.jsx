import { Button } from "primereact/button";


export const BasicButton = ({ label, className, ...props }) => {
    return <Button label={label} className={`p-button-primary ${className}`} {...props} />;
};


export const LinkButton = ({ link, label, className, ...props }) => {
    return <Button link={link} label={label} className={`p-button-link ${className}`} {...props}/>;
};


export const IconButton = ({ icon, label, className, ...props }) => {
    return (
        <Button icon={icon} label={label} className={`p-button-raised  p-button-text ${className}`} {...props} />
    );
};


// export const LoadingButton = ({ label, loading, className, ...props }) => {
//     return (
//         <Button
//             label={loading ? <CircularProgress size={24} /> : label}
//             className={`p-button-primary ${className}`}
//             disabled={loading}
//             {...props}
//         />
//     );
// };


export const SeverityButton = ({ label, severity, className, ...props }) => {
    const severityClass = {
        success: "p-button-success",
        warning: "p-button-warning",
        error: "p-button-danger",
    }[severity];

    return <Button label={label} className={`${severityClass} ${className}`} {...props} />;
};

export const DisabledButton = ({ label, className, ...props }) => {
    return <Button label={label} className={`p-button-primary p-disabled ${className}`} {...props} disabled />;
};

export const BadgeButton = ({ label, badge, className, ...props }) => {
    return (
        <Button label={label} className={`p-button-primary ${className}`}>
            <span className="p-badge">{badge}</span>
        </Button>
    );
};


export const ButtonSet = ({ children, className, ...props }) => {
    return <div className={`p-buttonset ${className}`} {...props}>{children}</div>;
};
