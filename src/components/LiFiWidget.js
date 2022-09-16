import React from "react";
import { LiFiWidgetDrawer } from '@lifi/widget';


const LiFiWidget = React.forwardRef((props, ref) => (
    <LiFiWidgetDrawer
        config={{
            containerStyle: {
                width: 392,
                height: 640,
                border: `1px solid rgb(234, 234, 234)`,
                borderRadius: "16px",
                display: "flex",
                maxWidth: 392,
            },
        }}
        ref={ref}
    />
));

export default LiFiWidget;