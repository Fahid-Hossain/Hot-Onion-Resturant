
import Button from '@restart/ui/esm/Button';
import React from 'react';
import {FormControl, InputGroup} from 'react-bootstrap';
import "./Header.css"

const Header = () => {
    return (
        <>
            <div className="banner">
                <div className="pt-5">
                    <h2 className="mb-4">Best food Waiting for you</h2>

                    <InputGroup className="mb-3 w-25 mx-auto">
                        <FormControl
                            placeholder="Find your food . . ."
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="" className="btn btn-danger px-3" id="button-addon2">
                            Search
                        </Button>
                    </InputGroup>
                </div>

            </div>
        </>
    );
};

export default Header;