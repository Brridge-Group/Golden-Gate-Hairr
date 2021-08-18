import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import ContentHeader from "../components/ContentHeader";
import { Link } from "react-router-dom";

const UpdateItem = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const itemId = useParams().id;
  const history = useHistory();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await fetch(`/api/items/${itemId}`, { method: "GET" });
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setName(responseData.item.name);
        setDescription(responseData.item.description);
      } catch (err) {
        console.log(err);
      }
    };

    fetchItem();
  }, [itemId]);

  const itemUpdateSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`/api/items/${itemId}`, {
        method: "PATCH",
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
            <h3 className="card-title">Update Item</h3>
          </div>
          <form>
            <div className="card-body">
              <div className="form-group">
                <label>Name</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  placeholder="Enter name"
                  value={name}
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
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>
            <div className="card-footer">
              <button type="submit" className="btn btn-primary" onClick={itemUpdateSubmitHandler}>
                Save
              </button>{" "}
              <Link to="/items" className="btn btn-secondary">
              Cancel
            </Link>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UpdateItem;
