import {BiBook} from 'react-icons/bi'

const Footerbar = () => {
    return (
        <footer className="footer p-4 bg-[#1d0f3b] text-neutral-content justify-center">
            <div className="items-center grid-flow-col text-center">
                <BiBook className="h-6 w-6 items-center text-center"/>
                <p>Copyright © 2023 - Todos os direitos reservados</p>

            </div> 
        </footer>
    );
};
export default Footerbar;