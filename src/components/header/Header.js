import { Fragment } from "react";
import "./style.css";
import HeaderConstant from '../../common/appConstant'

export const Header = () => {
    const { headerName } = HeaderConstant;

    return (

        <div style={{ display: "flex", flexDirection: 'row  ', backgroundColor: "green" }}>
            {headerName && headerName.map((item, i) => (
                <div>
                    <p>{item}</p>
                </div >
            ))}
        </div>
    )
}