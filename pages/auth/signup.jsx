import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link";
// any time any of these fields change we will clear the error message because the user has read that error
// message and now they are adjusting by making changes
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
const form_input_sytle = "border py-1 px-2 rounded-md w-full focus:outline-none outline-none border-1 focus:border-blue-400"
const validationNote_style = "text-[#a51a1a] border-1 mt-2"

function SignUpPage() {

    const userRef = useRef()
    const errRef = useRef();

    useEffect(() => {
        userRef.current.focus()
    }, [])

    const [user, setUser] = useState("")
    const [validName, setValidName] = useState(false)
    const [userFocus, setUserFocus] = useState(false)

    useEffect(() => {
        const valid = USER_REGEX.test(user)
        setValidName(valid)
    }, [user])


    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState(true)
    const [emailFocus, setEmailFocus] = useState(false)

    useEffect(() => {
        const valid = EMAIL_REGEX.test(email)
        setValidEmail(valid)
    }, [email])


    const [pwd, setPwd] = useState('')
    const [validPwd, setValidPwd] = useState(false)
    const [pwdFocus, setPwdFocus] = useState(false)
    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(pwd));
        setValidMatch(pwd === matchPwd);
    }, [pwd, matchPwd])


    const [errMsg, setErrMsg] = useState('');


    const onSignUpClicked = async (e) => {
        e.preventDefault();

          setErrMsg('')
          // if button enabled with JS hack
          const v1 = USER_REGEX.test(user);
          const v2 = PWD_REGEX.test(pwd);
          if (!v1 || !v2) {
              setErrMsg("Invalid Entry");
              return;
          }
        try {
            //sign up request
            

        } catch (err) {
            if (err.response.status === 409) {
                setErrMsg("This email is already registered")
            } else {
                console.log(err)
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();


        }
    }


    return (
        <section className="flex justify-center items-start ">
            <div className="Register bg-white flex flex-col items-center justify-center mt-10 px-3 py-10 rounded-xl  w-full  max-w-lg mx-4 border-1 shadow-[0_3px_1px_-2px_#0003,0_2px_2px_#00000024,0_1px_5px_#0000001f]">
                <h1 className="font-bold text-2xl pb-4">REGISTER</h1>
                <p
                    ref={errRef} className={`mb-3 bg-red-500 opacity-80 text-white w-full p-2 text-center ${errMsg ? "errmsg" : "offscreen"} `}
                    aria-live="assertive"
                >
                    {errMsg}
                </p>
                <form onSubmit={onSignUpClicked} className="flex justify-center items-center flex-col gap-3 w-full ">
                    <div className="w-full">
                        <input
                            id="username"
                            className={form_input_sytle}
                            type="text"
                            ref={userRef}
                            required
                            autoComplete="off"
                            placeholder="Username"
                            onChange={e => setUser(e.target.value)}
                            value={user}
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="usernote"
                        />
                        <p id="usernote" className={`${validationNote_style} ${userFocus && user && !validName ? "instructions" : "offscreen"}`}>
                            <FontAwesomeIcon icon={faInfoCircle} className="pr-1" />
                            4 to 24 characters.<br />
                            Must begin with a letter.<br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>

                    </div>
                    <div className="w-full">
                        <input
                            id="email"
                            className={form_input_sytle}
                            type="text"
                            autoComplete="off"
                            required
                            placeholder="Email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                            aria-invalid={validEmail ? false : true}
                            aria-describedby="emailnote"
                        />
                        <p id="emailnote" className={`${validationNote_style}  ${emailFocus && email && !validEmail ? "instructions" : "offscreen"} `}>
                        <FontAwesomeIcon icon={faInfoCircle} className="pr-1" />
                            please enter a valid email
                        </p>
                    </div>

                    <div className="w-full">
                        <input
                            id="password"
                            className={form_input_sytle}
                            type="password"
                            required
                            autoComplete="off"
                            placeholder="Password"
                            value={pwd}
                            onChange={e => setPwd(e.target.value)}
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                            aria-invalid={validPwd ? false : true}
                            aria-describedby="pwdnote"
                        />
                        <p id="pwdnote" className={`${validationNote_style} ${pwdFocus && pwd && !validPwd ? "instructins" : "offscreen"} `}>
                        <FontAwesomeIcon icon={faInfoCircle} className="pr-1" />
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>

                    </div>
                    <div className="w-full">
                        <input
                            id="confirmPwd"
                            className={form_input_sytle}
                            type="password"
                            required
                            autoComplete="off"
                            placeholder="Confirm password"
                            value={matchPwd}
                            onChange={(e) => setMatchPwd(e.target.value)}
                            onFocus={() => setMatchFocus(true)}
                            onBlur={() => setMatchFocus(false)}
                            aria-invalid={validMatch ? false : true}
                            aria-describedby="matchpwdnote"
                        />
                        <p id="matchpwdnote" className={`${validationNote_style} ${matchFocus && matchPwd && !validMatch ? "instructions" : "offscreen"} `}>
                        <FontAwesomeIcon icon={faInfoCircle} className="pr-1" />
                            Must match the first password input field.
                        </p>
                    </div>


                    <button
                        type="submit"
                        aria-label="submit"

                        disabled={validName && validEmail && validPwd && validMatch ? false : true}
                        className='disabled:cursor-not-allowed w-full transition-transform duration-300 cursor-pointer bg-primary text-primary-fg px-5 py-2 rounded-md'
                    >
                        Register
                    </button>
                </form>

                <div className="flex justify-start w-full pt-3">
                    <Link href="/auth/login">
                        <a className="inline-block text-blue-900 "><span className="text-sm">Already have an account?</span> <span className="text-yellow-500">Sign In</span></a>
                    </Link>
                </div>
            </div >
        </section>
    );
}

export default SignUpPage;
