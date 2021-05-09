import React from 'react'

import MyContext from './mycontext.jsx'

//create a Consumer to receive the context data in this component

const { Consumer } = MyContext


//structure of the Consumer is :

{/* 
    
<Consumer>
    {
        value=>{
            <div>Processing data here{value}</div>
        }
    }
</Consumer>


*/}

export default function Childone() {
    return (
        <Consumer>
            {
                myContext =>
                    <div>
                        {((myContext) => console.log(myContext)())}
                        <h2>This is Child One Component <br /> <br />{myContext.MyStateVal}</h2>
                        <hr /><hr />
                        <a href="#/">Goto Parent</a>
                        <br /><br />
                        <a href="#childtwo">Goto child Two</a>
                    </div>

            }

        </Consumer>

    )
}
