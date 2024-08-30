import BadgeStyle from "../enums/BadgeStyle";
import UIMenuItem from "./UIMenuItem";


export default class UIMenuTextInputItem extends UIMenuItem {

    private textValue?: string = undefined;
    public MaxLength: number

    constructor( label: string, description: string = "", maxLength = 30, defaultValue?: string ) {
        super( label, description + "\n\nClick to change value" );

        this.textValue = defaultValue
        this.RightLabel = this.textValue
        this.MaxLength = maxLength
    }

    get Text() { return this.textValue }
    set Text( value: string ) {
        this.textValue = value
        this.RightLabel = value
    }

    public SetRightBadge( badge: BadgeStyle ) {
        return this;
    }

    public SetRightLabel( text: string ) {
        return this;
    }
}
