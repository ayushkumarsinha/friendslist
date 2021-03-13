import React from "react";
import friendListApi from "./../api/friendListApi.json";

export default function FriendList(){
    const dataFav = friendListApi.filter(data => data.isFavourite === true);
    const dataOth = friendListApi.filter(data => data.isFavourite === false);
    const dataAll = friendListApi;
    const isFavourite = (id) => {
        let data = dataAll.filter(item => item.id === id);
        if(data.isFavourite)
            data.isFavourite = false;
        else
            data.isFavourite = true;
    }
    return (
        <>
            {dataFav.map((item, index) => 
            <div key={index}>
                    <div className="grid-container">
                        <div className="item-name">{item.firstName} {item.lastName}</div>
                        <div className="item-rel">is your {item.relation}</div>
                        <div className="item-fav"><button className="fav-del" onClick={()=>isFavourite(item.id)}><i className={item.isFavourite ? "fas fa-star color-yellow" : "far fa-star"}></i></button></div>
                        <div className="item-del"><button className="fav-del"><i className="fas fa-trash-alt"></i></button></div>
                    </div>
                <hr/>
            </div>)}
            {dataOth.map((item, index) => 
            <div key={index}>
                    <div className="grid-container">
                        <div className="item-name">{item.firstName} {item.lastName}</div>
                        <div className="item-rel">is your {item.relation}</div>
                        <div className="item-fav"><button className="fav-del" onClick={()=>isFavourite(item.id)}><i className={item.isFavourite ? "fas fa-star color-yellow" : "far fa-star"}></i></button></div>
                        <div className="item-del"><button className="fav-del"><i className="fas fa-trash-alt"></i></button></div>
                    </div>
                <hr/>
            </div>)}
        </>
    )
}