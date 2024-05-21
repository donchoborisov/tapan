import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import { useMemo } from "react";


export default function Error({status}) {

    const title = useMemo(() => {

        return {

            404: "Page Not Found",
            403: "Forbidden",
            
        }[status] || "An Error Occurred";

    }, [status]);


    const description = useMemo(() => {

        return {

            404: "The page you are looking for does not exist.",
            403: "You are not authorized to access this page.",
            
        }[status] || "An error occurred. Please try again later.";

    }, [status]);


  return (
     
     
   <GuestLayout>
     <Head title={title} />
     <div className="mb-4 font-medium text-sm text-red-600">
         {description}
     </div>

   </GuestLayout>


  )
}
