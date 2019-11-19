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
  order: [<item_id>, <item_id>, ...]
  price: <Double>
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
