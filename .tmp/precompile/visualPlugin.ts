import { Visual } from "../../src/visual";
import powerbiVisualsApi from "powerbi-visuals-api"
import IVisualPlugin = powerbiVisualsApi.visuals.plugins.IVisualPlugin
import VisualConstructorOptions = powerbiVisualsApi.extensibility.visual.VisualConstructorOptions
var powerbiKey: any = "powerbi";
var powerbi: any = window[powerbiKey];

var fundraisingVisualB5E1B65487AB4991B03C07B9267FE842: IVisualPlugin = {
    name: 'fundraisingVisualB5E1B65487AB4991B03C07B9267FE842',
    displayName: 'FundraisingVisual',
    class: 'Visual',
    apiVersion: '2.6.0',
    create: (options: VisualConstructorOptions) => {
        if (Visual) {
            return new Visual(options);
        }

        throw 'Visual instance not found';
    },
    custom: true
};

if (typeof powerbi !== "undefined") {
    powerbi.visuals = powerbi.visuals || {};
    powerbi.visuals.plugins = powerbi.visuals.plugins || {};
    powerbi.visuals.plugins["fundraisingVisualB5E1B65487AB4991B03C07B9267FE842"] = fundraisingVisualB5E1B65487AB4991B03C07B9267FE842;
}

export default fundraisingVisualB5E1B65487AB4991B03C07B9267FE842;