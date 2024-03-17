import {InputText} from "primereact/inputtext";

export const SearchInput =({text})=>{
    return (
        <div className="card flex flex-wrap justify-content-center gap-3">
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText placeholder="SearchInput" />
            </span>

            <span className="p-input-icon-right">
                <i className="pi pi-spin pi-spinner" />
                <InputText />
            </span>
        </div>
    );
};

