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
    charity: [<String>, <String>, ...]
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
            carryout: <Boolean>
        },
        {
            id: <item_id>
            quantity: <Integer>
            additional_information: <String>
            carryout: <Boolean>
        },
        ...
    ]
    gross_price: <Double>
    sales_price: <Double>
    time_placed: <DateTime>
    pickup_time: <DateTime>
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
