import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const form_input_sytle = "border py-1 px-2 rounded-md w-full focus:outline-none outline-none border-1 focus:border-blue-400"


export default function LoginPage() {
    const emailRef = useRef()
    const errRef = useRef();

    useEffect(() => {
        emailRef.current.focus()

    }, [])


    const [errMsg, setErrMsg] = useState('');

    const [email, setEmail] = useState('')
    const [emailFocus, setEmailFocus] = useState(false)


    const [pwd, setPwd] = useState('')
    const [pwdFocus, setPwdFocus] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrMsg('')
        // if button enabled with JS hack
        const valid = EMAIL_REGEX.test(email);
        if (!valid) {
            setErrMsg("Invalid Email");
            return;
        }
        if (!email || !pwd) {
            setErrMsg('Invalid Entry')
        }
        try {
            console.log('email' , email)
            console.log('password' , pwd)


        } catch (err) {
            setErrMsg('login Failed')
            // or setErrMsg(err.message)
            errRef.current.focus();
        }
    }
    return (
        <section className="flex justify-center items-start ">
            <div className="Login bg-white flex flex-col items-center mt-10 px-3 py-7 rounded-xl justify-center w-full border-1  max-w-lg mx-4 shadow-[0_3px_1px_-2px_#0003,0_2px_2px_#00000024,0_1px_5px_#0000001f]">
                <h1 className="font-bold text-2xl pb-4">LOGIN</h1>
                {errMsg && <p
                    ref={errRef} className={`mb-3 bg-red-500 opacity-80 text-white w-full p-2 text-center`}
                    aria-live="assertive"
                >
                    {errMsg}
                </p>}


                <form onSubmit={handleSubmit} className="flex justify-center items-center flex-col gap-3 w-full ">

                    <div className="w-full">
                        <input
                            id="email"
                            className={form_input_sytle}
                            type="email"
                            ref={emailRef}
                            autoComplete="on"
                            required
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                        />
                    </div>

                    <div className="w-full">
                        <input
                            id="password"
                            className={form_input_sytle}
                            autoComplete="off"
                            type="password"
                            required
                            placeholder="Password"
                            value={pwd}
                            onChange={e => setPwd(e.target.value)}
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                    </div>



                    <button
                        aria-label="submit"
                        type="submit"
                        disabled={!email || !pwd}
                        className='w-full transition-transform duration-300 cursor-pointer bg-primary text-primary-fg px-5 py-2 rounded-md'
                    >
                        LOGIN
                    </button>
                </form>


                <div className=" justify-start w-full pt-3">
                    <p className=" text-blue-900 mb-1">
                        <span className="text-sm">Don&apos;t have an account yet? </span>
                        <Link href="/auth/signup"  >
                            <a className="text-yellow-500 font-light text-md">
                                Sign Up
                            </a>
                        </Link>
                    </p>
                </div>
            </div >
        </section>
    );
}