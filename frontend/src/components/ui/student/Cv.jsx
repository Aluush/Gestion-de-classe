import photo from '../../../../public/photo.jpg'; // Importez votre image

function Cv() {
    return (
        <>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 container container container">

                <div className="border-1 dark:border-gray-700 shadow-lg dark:shadow-gray-700 rounded-lg">

                    <div className="flex rounded-t-lg bg-top-color sm:px-2 w-full">
                        <div className="h-40 w-40 overflow-hidden sm:rounded-full sm:relative sm:p-0 top-10 left-5 p-3">
                            <img src={photo}/>
                        </div>

                        <div className="w-2/3 sm:text-center pl-5 mt-10 text-start">
                            <p className="font-poppins font-bold text-heading sm:text-4xl text-2xl">
                                Ali Atattou
                            </p>
                            <p className="text-heading">Software Engineer</p>
                        </div>

                    </div>

                    <div className="p-5">

                        <div className="flex flex-col sm:flex-row sm:mt-10">

                            <div className="flex flex-col sm:w-1/3">
                                <div className="py-3 sm:order-none order-3">
                                    <h2 className="text-lg font-poppins font-bold text-top-color">My Contact</h2>
                                    <div className="border-2 w-20 border-top-color my-3"></div>

                                    <div>
                                        <div className="flex items-center my-1">
                                            <a className="w-6 text-gray-700 hover:text-orange-600"><svg
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-4">
                                                <path fill="currentColor"
                                                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
                                                </path>
                                            </svg>
                                            </a>
                                            <div className="ml-2 truncate">amitpachange@gmail.com</div>
                                        </div>
                                        <div className="flex items-center my-1">
                                            <a className="w-6 text-gray-700 hover:text-orange-600"
                                               aria-label="Visit TrendyMinds YouTube" href="" target="_blank"><svg
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="h-4">
                                                <path fill="currentColor"
                                                      d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.321-42.003 24.947-48.284 48.597C8.414 166.164 8 238.878 8 256s.414 89.836 18.345 131.917c6.281 23.65 24.787 42.276 48.284 48.597C117.219 448 288 448 288 448s170.781 0 213.372-11.486c23.497-6.321 42.003-24.947 48.284-48.597C567.586 345.836 568 273.122 568 256s-.414-89.836-18.345-131.917zM240 352V160l128 96-128 96z">
                                                </path>
                                            </svg></a>
                                            <div className="ml-2 truncate">+91 907-529-5179</div>
                                        </div>
                                        <div className="flex items-center my-1">
                                            <a className="w-6 text-gray-700 hover:text-orange-600"
                                               aria-label="Visit TrendyMinds Twitter" href="" target="_blank"><svg
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="h-4">
                                                <path fill="currentColor"
                                                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.66-17.219-161.104-47.106 8.447.974 16.614 1.299 25.105 1.299 48.31 0 92.853-16.614 128.06-44.772-45.282-.975-83.137-30.193-96.206-70.379 6.397.974 12.119 1.624 18.167 1.624 8.772 0 17.544-1.3 25.43-3.573-44.073-8.772-77.143-47.756-77.143-94.846v-1.299c12.119 6.722 25.755 10.395 40.064 10.769-23.48-15.614-38.164-42.988-38.164-73.75 0-16.964 4.548-32.548 12.119-46.482 44.447 54.632 111.763 90.564 187.352 94.172-1.624-7.097-2.599-14.519-2.599-22.066 0-52.07 42.339-94.41 94.41-94.41 27.615 0 52.394 11.844 69.855 30.193 21.544-4.222 41.542-12.119 59.452-22.741-7.472 21.219-23.48 39.681-44.772 51.876 20.673-2.273 40.671-7.097 59.452-14.844-13.645 20.348-30.843 38.435-50.465 53.019z">
                                                </path>
                                            </svg></a>
                                            <div className="ml-2 truncate">@AmitPachange</div>
                                        </div>
                                        <div className="flex items-center my-1">
                                            <a className="w-6 text-gray-700 hover:text-orange-600"
                                               aria-label="Visit TrendyMinds Instagram" href="" target="_blank"><svg
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-4">
                                                <path fill="currentColor"
                                                      d="M224.1 141c-47.6 0-86.2 38.6-86.2 86.2s38.6 86.2 86.2 86.2 86.2-38.6 86.2-86.2-38.6-86.2-86.2-86.2zm0 150.9c-29.8 0-54-24.2-54-54s24.2-54 54-54 54 24.2 54 54-24.2 54-54 54zm148.7-150.2c-9.8 0-17.8 8-17.8 17.8v131.4c0 9.8 8 17.8 17.8 17.8h78.5c9.8 0 17.8-8 17.8-17.8V158.5c0-9.8-8-17.8-17.8-17.8h-78.5z">
                                                </path>
                                            </svg></a>
                                            <div className="ml-2 truncate">@amit_pachange</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:w-2/3">
                                <div>
                                    <h2 className="text-lg font-poppins font-bold text-top-color">About Me</h2>
                                    <div className="border-2 w-20 border-top-color my-3"></div>

                                    <p className="font-poppins text-gray-700 dark:text-white">
                                        Hi, I am Amit Pachange, a Software Engineer with a passion for
                                        building
                                        innovative software solutions. I have a Bachelor s degree in Computer
                                        Science
                                        and Engineering and over 5 years of experience in the software
                                        development
                                        industry. My expertise includes full-stack development, with proficiency
                                        in
                                        JavaScript, React, Node.js, and MongoDB. I am currently seeking new
                                        opportunities to further develop my skills and contribute to
                                        cutting-edge
                                        projects.
                                    </p>
                                </div>

                                <div className="mt-5">
                                    <h2 className="text-lg font-poppins font-bold text-top-color">Education</h2>
                                    <div className="border-2 w-20 border-top-color my-3"></div>

                                    <div>
                                        <h3 className="font-poppins text-lg font-bold text-top-color">Bachelor s
                                            Degree</h3>
                                        <p className="font-poppins text-gray-700 dark:text-white">Computer Science
                                            and
                                            Engineering</p>
                                        <p className="font-poppins text-gray-700 dark:text-white">University of
                                            Pune,
                                            India</p>
                                        <p className="font-poppins text-gray-700 dark:text-white">2014 - 2018</p>
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <h2 className="text-lg font-poppins font-bold text-top-color">Experience</h2>
                                    <div className="border-2 w-20 border-top-color my-3"></div>

                                    <div>
                                        <h3 className="font-poppins text-lg font-bold text-top-color">Software
                                            Engineer</h3>
                                        <p className="font-poppins text-gray-700 dark:text-white">TrendyMinds,
                                            Indianapolis</p>
                                        <p className="font-poppins text-gray-700 dark:text-white">August 2018 -
                                            Present</p>
                                        <p className="font-poppins text-gray-700 dark:text-white">- Developed and
                                            maintained web applications using React, Node.js, and MongoDB</p>
                                        <p className="font-poppins text-gray-700 dark:text-white">- Collaborated
                                            with
                                            cross-functional teams to design and implement new features</p>
                                        <p className="font-poppins text-gray-700 dark:text-white">- Conducted code
                                            reviews and provided constructive feedback to peers</p>
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <h2 className="text-lg font-poppins font-bold text-top-color">Skills</h2>
                                    <div className="border-2 w-20 border-top-color my-3"></div>

                                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                                        <span className="bg-blue-100 text-blue-800 font-poppins px-2 py-1 rounded-full text-xs">React</span>
                                        <span className="bg-blue-100 text-blue-800 font-poppins px-2 py-1 rounded-full text-xs">Node.js</span>
                                        <span className="bg-blue-100 text-blue-800 font-poppins px-2 py-1 rounded-full text-xs">JavaScript</span>
                                        <span className="bg-blue-100 text-blue-800 font-poppins px-2 py-1 rounded-full text-xs">MongoDB</span>
                                        <span className="bg-blue-100 text-blue-800 font-poppins px-2 py-1 rounded-full text-xs">HTML</span>
                                        <span className="bg-blue-100 text-blue-800 font-poppins px-2 py-1 rounded-full text-xs">CSS</span>
                                        <span className="bg-blue-100 text-blue-800 font-poppins px-2 py-1 rounded-full text-xs">Git</span>
                                        <span className="bg-blue-100 text-blue-800 font-poppins px-2 py-1 rounded-full text-xs">RESTful
                                            APIs</span>
                                        <span className="bg-blue-100 text-blue-800 font-poppins px-2 py-1 rounded-full text-xs">Agile
                                            Development</span>
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <h2 className="text-lg font-poppins font-bold text-top-color">Projects</h2>
                                    <div className="border-2 w-20 border-top-color my-3"></div>

                                    <div>
                                        <h3 className="font-poppins text-lg font-bold text-top-color">E-commerce
                                            Website</h3>
                                        <p className="font-poppins text-gray-700 dark:text-white">- Built a
                                            fully-functional e-commerce website using React and Node.js</p>
                                        <p className="font-poppins text-gray-700 dark:text-white">- Integrated
                                            payment
                                            gateways and order processing functionality</p>
                                        <p className="font-poppins text-gray-700 dark:text-white">- Implemented
                                            user
                                            authentication and authorization features</p>
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <h2 className="text-lg font-poppins font-bold text-top-color">Languages</h2>
                                    <div className="border-2 w-20 border-top-color my-3"></div>

                                    <div>
                                        <p className="font-poppins text-gray-700 dark:text-white">English (Fluent)</p>
                                        <p className="font-poppins text-gray-700 dark:text-white">French
                                            (Intermediate)</p>
                                        <p className="font-poppins text-gray-700 dark:text-white">Hindi
                                            (Native)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cv;
