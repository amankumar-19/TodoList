import React , {useState, useEffect, useRef} from 'react';



function TodoForm(props) {                                                                                                                // we have taken function here instead of class becoz we are using react hooks and hooks is all about the functional components.
    const [ input , setInput] = useState(props.edit ? props.edit.value : '');                                                            //Here input is the value of state and setInput is another function to update the value of state.
    var [date,setDate] = useState(new Date());                               
    const inputRef = useRef(null)


    useEffect (()=>{
        inputRef.current.focus()
    })
  
    const handleChange = e =>{                                                                                                          // when we type something in textbox after clicking on add todo the textbox get empty so for that chnage we added onchange
      setInput(e.target.value);
  }

   
    const handleSubmit = e =>{
        e.preventDefault();                                                                                                            // to avoid reload of page on event we have use preventDefault function.
    
        props.onSubmit({
            id:Math.floor(Math.random() * 10000),                                                                                      //id and text for textbox todos 
            text:input
        });
     setInput('')                                                                                                                     // it is a function used for updating the value of intial state
        
    };

    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    
    
     
      
       
      

    return(
        
        
        <div>
            {/* <p> Time : {date.toLocaleTimeString()}</p>               */}
            <p className="datepicker"> Date : {date.toLocaleDateString()}</p>

            <form className = "todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
            <>    
            <input 
            type = "text" 
            placeholder = "Update todo"
            value ={input}
            name="text" 
            className="todo-input edit"
            onChange={handleChange}
            ref ={inputRef}/>
            <button className ="todo-button edit">Update</button>
            </>
            ):
            (
                <>
            <input 
            type = "text" 
            placeholder = "Add Plan"
            value ={input}
            name="text" 
            className="todo-input"
            onChange={handleChange}
            ref ={inputRef}/>
            <button className ="todo-button">Add Plan</button>
                </>
            )
            }
                
                
            </form>
        </div>
    )
}



export default TodoForm;