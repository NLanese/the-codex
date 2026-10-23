import FormFieldsShowcase from "../../../components/ostrich-components/formFields";

// Jotai
import { useAtom } from "jotai";
import { directoryDataState } from "../../../jotai/atoms";
import { useEffect } from "react";

export default function FormFieldsPage(){

    const [directory, setDirectory] = useAtom(directoryDataState)

    useEffect(() => {
        setDirectory("Portfolio")
    }, [])

    return(
        <div style={{paddingRight: '8%', paddingLeft: '8%', paddingTop: '2.5%'}}>
            <FormFieldsShowcase />
        </div>
    )
}
