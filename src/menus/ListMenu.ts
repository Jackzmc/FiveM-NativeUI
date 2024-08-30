import ItemsCollection from "../modules/ItemsCollection.js"
import Menu from "./Menu.js"
import Point from '../utils/Point';
import UIMenuItem from '../items/UIMenuItem';

export class ListMenu extends Menu {
    Items: ItemsCollection

    public EmptyListMessage: string = "List is empty"

    constructor( title: string, subtitle: string, items: ItemsCollection, offset: Point, spriteLibrary?: string, spriteName?: string ) {
        super( title, subtitle, offset, spriteLibrary, spriteName )
        this.setDefault()
        this.Items = items

        this.On( 'open', () => {
            const items = this.Items.getListItems();
            for ( const item of items ) {
                this.AddItem( new UIMenuItem( item.DisplayText, item.Data ?? "" ) )
            }
            this.RemoveItemAtIndex( 0 )
        } )
        this.On( 'close', () => {
            this.setDefault()
        } )
    }

    private setDefault() {
        this.Clear()
        this.AddItem( new UIMenuItem( this.EmptyListMessage ) )
    }

}