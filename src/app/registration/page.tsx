import Header from "@/components/header/Header";

export default function Registration() {
    return (
        <div className="max-w-4xl max-sm:max-w-lg mx-auto p-6 mt-6">
            <div className="text-center mb-12 sm:mb-16">
                <h4 className="text-slate-600 text-base mt-6">Sign up into your account</h4>
            </div>

            <form>
                <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                        <label className="text-slate-800 text-sm font-medium mb-2 block">First Name</label>
                        <input name="name" type="text"
                               className="bg-input w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-orange-500 transition-all"
                               placeholder="Enter name"/>
                    </div>
                    <div>
                        <label className="text-slate-800 text-sm font-medium mb-2 block">Last Name</label>
                        <input name="lname" type="text"
                               className="bg-input w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-orange-500 transition-all"
                               placeholder="Enter last name"/>
                    </div>
                    <div>
                        <label className="text-slate-800 text-sm font-medium mb-2 block">Email Id</label>
                        <input name="email" type="text"
                               className="bg-input w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-orange-500 transition-all"
                               placeholder="Enter email"/>
                    </div>
                    <div>
                        <label className="text-slate-800 text-sm font-medium mb-2 block">Mobile No.</label>
                        <input name="number" type="number"
                               className="bg-input w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-orange-500 transition-all"
                               placeholder="Enter mobile number"/>
                    </div>
                    <div>
                        <label className="text-slate-800 text-sm font-medium mb-2 block">Password</label>
                        <input name="password" type="password"
                               className="bg-input w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-orange-500 transition-all"
                               placeholder="Enter password"/>
                    </div>
                    <div>
                        <label className="text-slate-800 text-sm font-medium mb-2 block">Confirm Password</label>
                        <input name="cpassword" type="password"
                               className="bg-input w-full text-slate-800 text-sm px-4 py-3 rounded focus:bg-transparent outline-orange-500 transition-all"
                               placeholder="Enter confirm password"/>
                    </div>
                </div>

                <div className="mt-12">
                    <button type="button"
                            className="mx-auto block py-3 px-6 text-sm font-medium tracking-wider rounded text-white bg-orange hover:bg-black focus:outline-none cursor-pointer">
                        Sign up
                    </button>
                </div>
            </form>
        </div>
    );
}