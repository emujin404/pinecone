export function MetaBlog(props){
    return(
      
        <div className="MetaBlog" >
            <div style={{backgroundImage: `url(${props.image})`, width: "363px", height: "147px", backgroundSize: "cover", borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}}></div>
            <p style={{width: "330px", height:"58px", fontSize:"24px", fontWeight: "500", marginTop: "11px", marginLeft: "20px"}}>{props.header}</p>
            <p style={{width: "318.33px", height: '63px', fontSize: "14px", fontWeight: "600", marginTop: "5px", marginLeft: '20px'}}>{props.info}</p>
            <div style={{display: "flex", gap: "20px", marginTop: "10px", justifyContent: "center", alignItems: "center"}}>
                {}
                <img src={props.profile} style={{width: "44.51px", height:"45px", borderRadius: "50%",}}/>
                <h3 className="name" style={{ width: "83px", height: "18px", fontWeight: "600", fontSize: "12px", color: "#6D7D8B"}}>{props.name}</h3>
                <div style={{width: "3.89px", height: "21px", backgroundColor: "#BBC8D4", marginTop: "6px"}}></div>
                <h3 className="date" style={{width: "102px", height: "18px", fontWeight: "600", fontSize: "12px", color: "#6D7D8B"}}>{props.date}</h3>
            </div>
        </div>

    )
}