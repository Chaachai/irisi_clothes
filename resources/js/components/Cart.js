import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { MDBTable, MDBTableBody, MDBTableHead } from "mdbreact";
import { useHistory } from "react-router";
import { forEach } from "lodash";
import { data } from "jquery";
import Axios from "axios";

const Cart = ({ history }) => {
    const [cart, setCart] = useState({});
    const [items, setItems] = useState([]);

    useEffect(() => {
        // console.log("in use effect");
        getCartItems();
    }, []);

    async function getProductById(product_id) {
        console.log("in getProductById");

        try {
            const response = await fetch(`/api/products/${product_id}`);
            const result = await response.json();
            return result;
        } catch (error) {
            console.log("error", error);
        }
    }
    function getPhotoByColor(product_id, color) {
        return Axios.get(`/api/get_image/${product_id}/${color}`);
        // var strr = new Array();
        // console.log("in getPhotoByColor");
        // axios
        //     .get(`/api/get_image/${product_id}/${color}`)
        //     .then(result => {
        //         console.log("laaaaaaaa photo ", result);
        //         return result.data;
        //         // strr.push(result.data);
        //         // setProductsG5(result.data);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
        // return JSON.stringify(strr);
    }

    async function getCartItems() {
        console.log("in getCartItems");

        try {
            const response = await fetch(
                `/api/getCartByUser/${
                    JSON.parse(localStorage["appState"]).user.id
                }`
            );
            let myData = [];
            const result = await response.json();
            setCart(result);
            getItems(result.id);
        } catch (error) {
            console.log("error", error);
        }
    }

    async function getItems(cart_id) {
        console.log("in getItems");
        let jsona = [];
        try {
            const response = await fetch(`/api/items_by_cart/${cart_id}`);
            const result = await response.json();
            let product = {};
            var photos = [];
            result.forEach(element => {
                let obj = {};
                // getProductById(element.product_id).then(data => {
                //     product = data;
                //     // console.log("PRODUUUUUUUUCT ", product);
                // });

                // getPhotoByColor(element.product_id, element.color).then(
                //     data => {
                //         photo = data;
                //         // console.log("PRODUUUUUUUUCT ", photo);
                //     }
                // );

                // photos.push(getPhotoByColor(element.product_id, element.color));

                // var myJsonString = JSON.stringify(
                let photo = getPhotoByColor(element.product_id, element.color);
                // );

                console.log("HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH", photo);

                // obj = {
                //     mId: element.id,
                //     mImage: photo.image,
                //     mProduct: product.name,
                //     mColor: element.color,
                //     mSize: element.size,
                //     mPrice: product.unit_price,
                //     mQuantity: element.quantity
                // };

                // jsona.push(obj);
            });
            // console.log("LENGHTTTTTTTT == ", photos[0][1]);
            // setItems(jsona);
            // console.log("JISONAAAAA === ", jsona[0]);

            // let a = [];

            // for (let i = 0; i < jsona.length; i++) {
            //     // let obj = jsona[i];
            //     // a.push(obj);
            //     console.log("Haaaaaaaa ", i);
            // }
            // localStorage["myState"] = JSON.stringify(a);
            // console.log("ha localS", JSON.parse(localStorage["myState"]));

            // setItems(JSON.parse(localStorage["cartState"]));
        } catch (error) {
            console.log("error", error);
        }
    }

    if (!JSON.parse(localStorage["appState"]).isLoggedIn) {
        history.push("/login");
        return <></>;
    } else {
        console.log("in use render");
        return (
            <div style={{ paddingTop: 66 }}>
                {/* <h1>{{ items }}</h1> */}
                <MDBTable>
                    <MDBTableHead color="mdb-color" textWhite>
                        <tr>
                            <th>Product</th>
                            <th>Color</th>
                            <th>Size</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Amount</th>
                            <th>Remove</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {/* {items.map(item => ( */}
                        <tr>
                            <td>tbi</td>
                            <td>tbi</td>
                            <td>tbi</td>
                            <td>tbi</td>
                            <td>tbi</td>
                            <td>tbi</td>
                            <td>tbi</td>

                            <td style={{ width: 20 }}>
                                <Button
                                    style={{ fontSize: 12 }}
                                    variant="danger"
                                >
                                    Remove
                                </Button>
                            </td>
                        </tr>
                        {/* ))} */}
                    </MDBTableBody>
                </MDBTable>
            </div>
        );
    }
};

export default Cart;
