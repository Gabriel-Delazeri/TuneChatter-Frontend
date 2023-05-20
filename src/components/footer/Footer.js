import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone} from '@fortawesome/free-solid-svg-icons'
import { FaLinkedin, FaGithub} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';

export default function Footer () {
    const [copied, setCopied] = useState(false);

    const handleCopy = (e) => {
        e.preventDefault();
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    };

    return (
        <div>
            <footer class="text-center text-lg-start bg-transparent text-muted mt-5">
                <hr className="w-100"/>
                <section class="">
                    <div class="container text-center text-md-start mt-5">
                    <div class="row mt-3">
                        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 class="text-uppercase fw-bold mb-4">
                            <i class="fas fa-gem me-3 text-secondary">Developed By Gabriel Delazeri</i>
                        </h6>
                        <p>
                            Developed only with the purpose of practicing and studying ReactJS, Java, Spring Framework and other technologies.
                        </p>
                        </div>

                        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                        <p><FaGithub /><a className="contact-link" target="_blank" href="https://github.com/Gabriel-Delazeri"> Github</a></p>
                        <p><FaLinkedin/><a className="contact-link" target="_blank" href='https://www.linkedin.com/in/gabriel--delazeri/'> Linkedin</a></p>
                        <p><MdEmail/><a className="contact-link" target="_blank" href="mailto: gbldelazeridev@gmail.com"> gbldelazeridev@gmail.com</a></p>
                        <p>
                            <CopyToClipboard text='551198243006'>
                                <a className="contact-link" href="" onClick={handleCopy}>
                                    <FontAwesomeIcon icon={faPhone} />
                                    {copied ? ' +55 11 982430036 - copied' : ' +55 11 982430036'}
                                </a>
                            </CopyToClipboard>
                        </p>
                        </div>
                    </div>
                    </div>
                </section>

                <div class="text-center p-4" style={{backgroundColor:"rgba(0, 0, 0, 0.025)"}}>
                    <span>© 2023 Copyright:   </span>  
                    <a class="text-reset fw-bold" href="https://github.com/Gabriel-Delazeri">Gabriel Delazeri</a>
                </div>
                </footer>
        </div>
    )
}