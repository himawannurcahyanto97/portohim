import React from 'react';
import {GlobalContent} from "../GlobalContent";
import {NotFoundLayout} from "./style"

const NotFound = () => {
    return(
        <GlobalContent>
            <NotFoundLayout>
                <h3>404</h3>
                <h6>Page Not Found</h6>
            </NotFoundLayout>
        </GlobalContent>
    )
}

export default NotFound