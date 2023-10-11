import * as elements from 'typed-html'
const BaseApp = ({children}:elements.Children)=>{
    return(

        <html>
            <head>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <script src="static/js/tailwind3.3.3/tailwind.min.js"></script>
            <script src="static/js/htmx.min.js"></script>

            </head>
            {children}

        </html>
    )
}
export default BaseApp;