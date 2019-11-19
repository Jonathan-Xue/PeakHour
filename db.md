# Database Schema
### Users Document
* The Following Denotes A Singular Entry In The Document
    ```
    _id: <ObjectID>
    name: <String>
    email: <Integer>
    favorites: [<restaurant_id>, <restaurant_id>, ...]
    orders: [<order_id>, <order_id>, ...]
    ```

### Restaurants Document
* The Following Denotes A Singular Entry In The Document
    ```
    _id: <ObjectID>
    name: <String>
    menu: {
        <category>: [<item_id>, <item_id>, ...],
        <category>: [<item_id>, <item_id>, ...],
        ...
    }
    orders: [<order_id>, <order_id>, ...]
    location : {
        type : <GeoJSON Type>,
        coordinates : [<latitude>, <longitude>]
    }
    ```

### Orders Document
* The Following Denotes A Singular Entry In The Document
    ```
    _id: <ObjectID>
    order: [
        {
            id: <item_id>
            quantity: <Integer>
            additional_information: <String>
        },
        {
            id: <item_id>
            quantity: <Integer>
            additional_information: <String>
        },
        ...
    ]
    gross_price: <Double>
    sales_price: <Double>
    fulfilled: <Boolean>
    ```

### Items Document
* The Following Denotes A Singular Entry In The Document
    ```
    _id: <ObjectID> 
    name: <String>
    price: <Double>
    image: <Blob>
    ```
