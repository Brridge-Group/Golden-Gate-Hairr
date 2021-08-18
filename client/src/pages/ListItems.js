import React, { useEffect, useState } from "react";
import ContentHeader from "../components/ContentHeader";
import { Link } from "react-router-dom";

const Items = (props) => {
  const [loadedItems, setLoadedItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("/api/items", { method: "GET" });
        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setLoadedItems(responseData.items);
      } catch (err) {
        console.log(err);
      }
    };

    fetchItems();
  }, []);

  const deleteItemHandler = async (id) => {
    try {
      const response = await fetch(`/api/items/${id}`, { method: "DELETE" });
      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message);
      }

      setLoadedItems(
        loadedItems.filter((item) => {
          return item.id !== id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <div className="content-wrapper">
        <ContentHeader title="Items" />
        <div className="card w-50 mx-auto">
          <div className="card-header">
            <h3 className="card-title">List of Items</h3>
          </div>
          <div className="card-body p-0">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {loadedItems.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.name}</td>
                      <td>{item.description}</td>
                      <td>
                        <Link
                          to={"/items/" + item.id}
                          className="btn btn-default"
                        >
                          Edit
                        </Link>
                      </td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => deleteItemHandler(item.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="card-footer">
            <Link to="/items/new" className="btn btn-primary">
              New Item
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Items;
