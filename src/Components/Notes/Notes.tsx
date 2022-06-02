import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions as NotesActions,  NotesSelectors,} from "../../Store/Notes/index";
import { actions as TagActions,  TagSelectors,} from "../../Store/Tagfiltr";

export const NotesPage: React.FC = () => {
  const dispatch = useDispatch();

  const [note, setNote] = useState("");
  const [tagSearch, setSearch] = useState("");

  const onChangeTextarea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(e.target.value);
  };
  const onChangeTagSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const notes = useSelector(NotesSelectors.getNotes);
  const { tags } = useSelector(TagSelectors.getTags);

  const addNote = () => {
    dispatch(NotesActions.addNote(note));
      note.split(' ').forEach((v) => {
      if ( v.charAt(0) === "#" && !tags.includes(v) ) {
        addTag(v);
      }
    })  
      
  };
  const addTag = (value:string) => {
    dispatch(TagActions.addTag(value));
  };
  const removeNote = (id: number) => {
    dispatch(NotesActions.deleteNote(id));
  };
  const editNote = (id: number, text:string) => {
    dispatch(NotesActions.editNote({id, text}));
  };
  const removeTag = (tag: string) => {
    dispatch(TagActions.deleteTag(tag));
  };

  return (
    <>
      <h1> Notes </h1>
      <textarea onChange={onChangeTextarea}></textarea>
      <button  onClick={addNote} className="btn btn_green">Add note</button>
      <div>
        <input  onChange={onChangeTagSearch}/>
        <button className="btn btn_green">Find</button>
      </div>
      <h2>Tags</h2>
      {tags.map((tag) => {
         return (
           <>
           <span className="tags">{tag}</span>

           <button className="btn btn_close" onClick={ () => removeTag(tag) }>X</button>
           </>
         ) 
        } )}
        <h2>Notes</h2>
      <ul>
        {notes.map(({ id, text }) => {
          return (
            <>
              <li key={id} className="li-class">
                {text}
                <button className="btn btn_default" onClick={()=>editNote(id,note)}>Edit</button>
                <button className="btn btn_close"
                  key={id}
                  onClick={() => {
                    removeNote(id);
                  }}
                >
                  X
                </button>
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};
