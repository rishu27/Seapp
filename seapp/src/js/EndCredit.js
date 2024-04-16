import React from "react";
import { logo } from "../db/img";
import Separator from "./template/Separator";

 
const EndCredit = ()=>{
    return(
        <div  style={{
            paddingBottom: '5%'
        }}>
            {Separator}
            <div className='border border-primary shadow'>
                <div className="niceCenter" style={{textAlign: 'left'}} >
                    <b></b>
                    <br />
                    <i>
                    </i>
                </div>

                <hr />
                    <i>
                    | Raj | Rishabh | Sandip | Shekhar
                    </i>
                <hr />
            </div>
        </div>
    )
}

export default EndCredit;