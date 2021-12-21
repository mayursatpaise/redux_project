import { Fragment } from "react"

import "./style.css";
const array = [
    "item",
    "item",
    "item",
    "item",
    "item",
    "item",
    "item",
]
export const Dashboard = () => {
    return (
        <div className="container">
            {array.map((item, index) => {
                return (<div className="box" >
                    item {index + 1}
                </div>)
            })
            }
        </div>
    )
}