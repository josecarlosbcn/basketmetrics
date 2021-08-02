import React from "react";
import { Button, Spinner } from "react-bootstrap";

function Loading(props){
    return(
        <div style = {{marginTop: 10 + "px"}}>
            <Button variant="dark" disabled>
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                <span className="sr-only">
                    {(props.language === "es") ? "Cargando datos ..." : "Loading data ..."}
                </span>
            </Button>{' '}
            <Button variant="dark" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    />
                    {(props.language === "es") ? "Cargando datos ..." : "Loading data ..."}
            </Button>                    
        </div>                        
    );
};

module.exports.Loading = Loading;