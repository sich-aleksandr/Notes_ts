import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions as NotesActions, NotesSelectors } from "../../Store/Notes/index";

export const NotesPage: React.FC = () => {

    const dispatch = useDispatch();
  
    const [note, setNote] = useState("");
  
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNote(e.target.value);

    };
    
     const notes = useSelector(NotesSelectors.getNotes);
     console.log(notes);

        
    // useEffect(() => {
    //   dispatch(actions.fetchGood(id));
    // }, []);
  
    // const good = useSelector(GoodSelectors.getGood);
  
    // const goodInCart = useSelector(CartSelectors.getGoodById(id));
  
     const addNote = ( ) => {
         dispatch(NotesActions.addNote( note ));
    };
     const removeNote = ( id:number ) => {
         dispatch(NotesActions.deleteNote(id));
    };
 
    return (
        <>
      <div> hello </div>
      <input onChange={onChangeInput}></input><button onClick={addNote}>Add note</button>
      <ul>
        {notes.map(({id, text}) => {
           return( <> <li key={id}>{text}<button key={id} onClick={()=>{removeNote(id)}}>X</button>
                </li>
                </>
        )})}
      </ul>
      </>
    );
  };
  


