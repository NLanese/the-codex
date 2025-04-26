// React
import React, {useEffect, useState} from "react";

import renderTitle from "../CodeSpaces/renderTitle";

const OstShowcaseTemplate = ({
    children,
    title
})

return(
    <div style={{height: '100%', width: '100%'}}>
        {renderTitle(title)}
        {children}
    </div>
)