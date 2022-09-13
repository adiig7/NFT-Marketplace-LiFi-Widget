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
                toChain: 10,
                toToken: '0x7f5c764cbc14f9669b88837ca1490cca17c31607',
            },
        }}
        ref={ref}
    />
));

export default LiFiWidget;