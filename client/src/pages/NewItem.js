import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ContentHeader from "../components/ContentHeader";
import { Link } from "react-router-dom";

const NewItem = () => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();

  const history = useHistory();

  const itemSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, description }),
      });

      if (!response.ok) {
        throw new Error("Could not save new item");
      }

      history.push("/items");
    } catch (err) {}
  };

  return (
    <React.Fragment>
      <div className="content-wrapper">
        <ContentHeader title="Items" />
        <div className="card w-50 mx-auto">
          <div className="card-header">
            <h3 className="card-title">New Item</h3>
          </div>
          <div className="card-body">
            <form onSubmit={itemSubmitHandler}>
              <div className="form-group">
                <label>Name</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Enter name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Description</label>
                <input
                  name="description"
                  type="text"
                  className="form-control"
                  placeholder="Enter description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div className="card-footer">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={itemSubmitHandler}
            >
              Save
            </button>{" "}
            <Link to="/items" className="btn btn-secondary">
              Cancel
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewItem;
