import React, { useRef } from 'react';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import { Button } from 'primereact/button';

function ButtonBook() {
    
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Bokning genomförd', detail: 'Tiden har bokats', life: 3000 });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Bokning avbruten', detail: 'Tiden bokades ej', life: 3000 });
    };

    const showTemplate = () => {
        confirmDialog({
            group: 'templating',
            header: 'Bekräftelse',
            message: (
                <div className="flex flex-column align-items-center w-full gap-3 border-bottom-1 surface-border">
                    <span>Är du säker på att du vill boka vald tid?</span>
                </div>
            ),
            accept,
            reject,
        });
    };

    return (
        <>
            <Toast ref={toast} />
            <ConfirmDialog group="templating" acceptLabel="Ja" rejectLabel="Nej" />
            <div className="card flex justify-content-center">
                <Button onClick={() => showTemplate()} className="button-book" label="Boka" raised ></Button>
            </div>
        </>
    )
}

export default ButtonBook;
