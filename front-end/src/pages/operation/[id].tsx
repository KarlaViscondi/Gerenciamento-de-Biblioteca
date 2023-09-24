import myfetch from "@/src/utils/myfetch"
import { useRouter } from "next/router"
import {useEffect, useState} from 'react'

export interface IOperationParams {
  id: string;
  createdAt: string;
  expectedDate: string;
  finalDate?: string;
  type: string;
  bookCode: string;
  studentCPF: string;
  cpf_borrowed_by?: string;
  cpf_returned_by?: string;
}

export default function UpdateOperations(){
    const router = useRouter()
    const param = router.query.id 
    const [operation, setOperation] = useState<IOperationParams>();
    
    useEffect(() => { 
        if(param != undefined){
            fetchData()
        }
      }, [param])

      async function fetchData() {
        try {
          const result = await myfetch.get(`/operation/id/${param}`)
          setOperation(result)
        } 
        catch(error) {
            console.log(error)
        }
      }

    return (
        <div>
            {operation? 
              <div>
                <p>{operation.id}</p>
                <p>{operation.createdAt}</p>
                <p>{operation.expectedDate}</p>3
                <p>{operation.finalDate}</p>
                <p>{operation.type}</p>
                <p>{operation.bookCode}</p>
                <p>{operation.studentCPF}</p>
                <p>{operation.cpf_borrowed_by}</p>
                <p>{operation.cpf_returned_by}</p>
              </div>
            :
                <></>
            }
            
        </div>
    )

}