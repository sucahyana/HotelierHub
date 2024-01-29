import React from 'react';
import {Toast} from 'primereact/toast';


const ToastAtom = React.forwardRef((props, ref) => {
    const toastRef = React.useRef(null);

    const showSuccess = (summary, detail) => {
        toastRef.current.show({severity: 'success', summary, detail, life: 3000});
    };

    const showError = (summary, detail) => {
        toastRef.current.show({severity: 'error', summary, detail, life: 3000});
    };


    const showLoading = (summary, detail) => {
        toastRef.current.show({
            severity: 'info',
            summary: summary || 'Loading',
            detail: detail || 'Please wait...',
            life: 3000
        });
    };

    React.useImperativeHandle(ref, () => ({
        showSuccess,
        showError,
        showLoading
    }));

    return <Toast ref={toastRef} {...props}
                  position='top-center'
                  pt={{
                      message: ({ index }) => ({ className: `bg-yellow-${((index > 5 && 5) || index || 1) * 100}` })
                  }}
    />
});

ToastAtom.displayName = 'ToastAtom';

export default ToastAtom;
