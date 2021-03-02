import React from 'react'
import DropIn from 'braintree-web-drop-in-react'
import Button from "components/CustomButtons/Button.js"

export default function Checkout() {
    return (
        <div>
            <DropIn options={{ authorization: "", paypal: { flow: 'vault' } }}/>
            <Button color="info" round>Complete Purchase</Button>
        </div>
    )
}