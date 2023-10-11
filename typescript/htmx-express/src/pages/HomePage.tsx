import * as elements from 'typed-html'
import BaseApp from '../BaseApp';
const HomePage = ({children}:elements.Children)=>{
    return(

       <BaseApp>
            <h1>this is JSX and HTMX</h1>
            <button class='border p-2 text-4xl' hx-post='/clicked' hx-swap='outerHTML'> click</button>
       </BaseApp>
    )
}
export default HomePage;