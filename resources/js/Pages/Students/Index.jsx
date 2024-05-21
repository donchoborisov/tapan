import Pagination from '@/Components/Pagination';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link  } from '@inertiajs/react';

export default function index({ auth, students }) {

    // console.log(students.meta );



    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Students List</h2> }
        >
            <Head title="Student List" />

         

            <div class="bg-gray-100 py-10">

                <div class="container mx-auto px-4 sm:px-8">

                <div className="mb-4 mk-auto sm:mt-0 sm:ml-16 sm:flex-none">
                <Link
                    href={route('students.create')}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Add Student
                </Link>
            </div>
                    <div class="relative overflow-x-auto"> 

                       
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        ID
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Email
                                    </th>

                                    <th scope="col" class="px-6 py-3">
                                        Class
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Section
                                    </th>
                                  
                                    <th scope="col" class="px-6 py-3">

                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                 {students.data.map((student) => {
                                   
                                   return (

                                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                       {student.id}
                                    </th>
                                    <td class="px-6 py-4">
                                        {student.name}
                                    </td>
                                    <td class="px-6 py-4">
                                        {student.email}
                                    </td>
                                    <td class="px-6 py-4">
                                        {student.class.name}
                                    </td>
                                    <td class="px-6 py-4">
                                        {student.section.name}
                                    </td>

                                    <td class="px-6 py-4 text-indigo-600 ">
                                        Edit | Delete
                                    </td>

                                </tr>

                                   );
                              

                                 })}


                               

                            </tbody>
                        </table>


                    </div>

                   <Pagination meta={students.meta} />


                </div>




            </div>






        </AuthenticatedLayout>
    );
}
