import React from "react";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="main-footer">
        <div className="float-right d-none d-sm-inline"><a href="https://adminlte.io/themes/v3" target="_blank" rel="noreferrer">Original template</a></div>
        <strong>
          Copyright © 2021{" "}
          <a href="https://brridge.com" target="_blank" rel="noreferrer">
            Brridge.com
          </a>
          .{" "}
        </strong>
        All rights reserved.
      </footer>
    </React.Fragment>
  );
};

export default Footer;
