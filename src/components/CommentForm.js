import React, {useState} from 'react';

const CommentForm = (props) => {

    const [inputHandler, setInputHandler] = useState("");
    const [nameHandler, setNameHandler] = useState("");

    const URL_COMMENT = `https://sleepy-wildwood-01652.herokuapp.com/API/${props.postID}/comment`

    const submitValue = async (e) => {
       const data = {name: nameHandler, comment: inputHandler}
       await postComment(data);
       window.location.reload();
    }

    async function postComment(data) {
        await fetch(URL_COMMENT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
      }
    

    return (
        <div>
            <form>
            <input type="text" name="name" placeholder="Name..." value={nameHandler} onChange={e => setNameHandler(e.target.value)} required></input>
            <input type="text" name="comment"placeholder={"Write comment here..."} value={inputHandler} onChange={e => setInputHandler(e.target.value)} required></input>
            <button type="button" onClick={submitValue}>Submit</button>
            </form>
        </div>
    )
}

export default CommentForm