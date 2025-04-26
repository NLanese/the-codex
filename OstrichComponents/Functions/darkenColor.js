const tinycolor = require("tinycolor2"); // Requires tinycolor2 library


    // Takes a Color String in Any Format and returns a darker version
    export default function darkenColor(color, amount = 20) {
        if (!color){
            return "#c8cbcc"
        }
    
        let parsedColor = tinycolor(color);
        if (!parsedColor.isValid()) {
            throw new Error("Invalid color format");
        }
    
        let darkenedColor = parsedColor.darken(amount);
    
        return color.startsWith("#") ? darkenedColor.toHexString() : 
               color.startsWith("rgb") ? darkenedColor.toRgbString() :
               color.startsWith("hsl") ? darkenedColor.toHslString() :
               darkenedColor.toHexString(); // Default to hex
    }