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
    address: <String>
    rating: <Double>
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
    restaurant_id: <ObjectID>
    user_id: <ObjectID>
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
    time_placed: <DateTime>
    pickup_time: <DateTime>
    carryout: <Boolean>
    fulfilled: <Boolean>
    ```

### Items Document
* The Following Denotes A Singular Entry In The Document
    ```
    _id: <ObjectID> 
    name: <String>
    price: <Double>
    description: <String>
    image: <Blob>
    ```
