import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";

export const Forms = () => {
  const { store, actions } = useContext(Context);
  const [text, setText] = useState("");
  const { id } = useParams();

  return (
    <div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Usuario
        </label>
        <input
          defaultValue={store.user.username}
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          disabled
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Deja tu comentario.
        </label>
        <textarea
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
        <button
          type="submit"
          class="btn btn-primary"
          onClick={() => {
            actions.addComment(id, text);
          }}
        >
          agregar
        </button>
      </div>
    </div>
  );
};
