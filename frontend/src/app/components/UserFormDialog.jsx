import { useEffect, useRef } from "react"
import { UserForm } from "./UserForm"

export const UserFormDialog = ({ handleAddUsers, emptyForm, selectedUser, isDialogOpen, handleDialog }) => {
    const dialogRef = useRef(null);
    useEffect(() => {
        if (dialogRef.current) {
            if (isDialogOpen) {
                dialogRef.current.showModal();
            } else {
                dialogRef.current.close();
            }

        }
    }, [isDialogOpen])
    return (
        <>
            <dialog ref={dialogRef}
                onClose={() => handleDialog(false)}
                className="mx-auto mt-20 p-4 rounded shadow-xl"
            >
                <div className="w-full mt-8 mx-auto text-center">
                    <div className="text-2xl font-bold">Formulario de usuarios:</div>
                </div>
                <UserForm handleAddUsers={handleAddUsers} emptyFormData={emptyForm} selectedUser={selectedUser} handleDialog={handleDialog} />
            </dialog>


        </>
    )
}
