import React from 'react'
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="text-center mt-5">
        <h2 className="text-black">404 page not found</h2>
        <p className="text-danger">
          The page you are looking for might be removed or is temporarily
          unavailable.
        </p>
        <Button as={Link} to="/" className="btn-warning">Back to homepage</Button>
    </div>
  );
}

export default Notfound
