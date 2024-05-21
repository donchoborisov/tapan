import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm, router, Link, usePage } from '@inertiajs/react';



export default function Index ({ auth, posts, now, message }) {

    const { data, setData, post, processing, errors, reset, clearErrors } =
    useForm("StorePost", {
        body: "",
    });

const page = usePage();

function submit(e) {
    e.preventDefault();
    post(route("posts.store"), {
        onSuccess: () => {
            reset("body");
        },
    });
}

function refreshPosts() {
    router.visit(route("posts.index"), {
        only: ["posts"],
        preserveScroll: true,
        preserveState: true,
    });
}
           



    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Posts </h2>}
        >
            <Head title="Posts">
            
            <meta name="description" content="Posts Index" />

            </Head>

            <div className='py-12'>
                  
                 

               <div className='max-w-3xl mx-auto sm:px-6 lg:px-8 space-y-3'>
                
         
                
               {page.props.can.post_create && <form onSubmit={submit} class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">

                    <label htmlFor="body" className="sr-only">Body</label>

                    <textarea
                    onFocus={() => clearErrors('body')}
                    name='body'
                    id='body'
                    cols='30'
                    rows="5"
                    className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm w-full"
                    onChange={(e) => setData('body', e.target.value)} 
                    value={data.body}
                    >


                    </textarea>
                     
                    {errors.body && (
                        <p className="text-red-500 text-xs mt-1">{errors.body}</p>
                    )}
                    <button
                    type="submit"
                    disabled={processing}
                    className={`mt-2 bg-gray-700 px-4 py-2 rounded-md font-medium 
                    
                    text-white ${processing && 'opacity-50'}`
                     }
                   
                    >
                     {processing ? 'Processing...' : 'Submit'}
                    
                    </button>

                </form> }   

                <div className="py-3 flex justify-center">
                    
                   {/* <button className='text sm text-indigo-900'
                     onClick={refreshPosts}
                   type='button'
                   >
                    Refresh Posts
                   </button> */}

                <Link className='text sm text-indigo-900'
                   href={route('posts.index')} 
                   only={['posts']}
                   preserveScroll
                   type='button'
                   >
                    Refresh Posts
                </Link> 

                </div>

                
             
                   

                        {posts.data.map((post)=> {

                            return (
                                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                <div key={post.id} className="p-6 bg-white border-b border-gray-200">
                                    <h2 className="text-lg font-semibold text-gray-800">{post.user.name}</h2>
                                    <p className="text-gray-500">{post.body}</p>
                                </div>
                                </div>
                            );

                        })}
                    
               
            






               </div> 
   
            </div>
                


     
           

           
        </AuthenticatedLayout>
    );
}
