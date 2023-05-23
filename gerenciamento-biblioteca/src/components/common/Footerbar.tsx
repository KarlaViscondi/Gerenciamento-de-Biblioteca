import {BiBook} from 'react-icons/bi'
import {FaGithub} from 'react-icons/fa'
import {FaLinkedin} from 'react-icons/fa'

const Footerbar = () => {
    return (
        <footer className="footer items-center p-4 bg-neutral text-neutral-content">
            <div className="items-center grid-flow-col text-center">
                <BiBook className="h-6 w-6 items-center text-center"/>
                <p>Copyright © 2023 - Todos os direitos reservados</p>
            </div> 
            <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end items-center text-center">
                <FaGithub className="h-6 w-6"/>
                <FaLinkedin className="h-6 w-6"/>
            </div>
        </footer>
    );
};

export default Footerbar;