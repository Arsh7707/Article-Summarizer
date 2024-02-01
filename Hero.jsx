import {logo} from '../assets';

const Hero = () => {
    return(
        <header 
         className="w-full flex justify-center items-center flex-col">
            <nav 
            className="flex justify-between items-center w-full mb-10 pt-3">
                <img src = {logo} alt = "sumz_logo"
                className= "w-28 object-contain" />

                <button
                type = "button"
                onClick={()=>window.open('https:github.com/Arsh7707')}
                className="bg-transparent hover:bg-blue-500 text-black-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                 >
                    
                    GitHub
                </button>
                
            </nav>
            <h1 className= "head_text">
                Summarize Articles with GPT-4<br className='max-md: hidden'/>
                <span className="orange_gradient font-medium"> Open AI</span>    
                </h1>
                <h2 className='description'>Summarize and simplify your readings with this open-source article summarizer that transforms lengthy articles into clear and concise summary</h2>
            
        </header>
    )
}

export default Hero