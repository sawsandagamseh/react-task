function Footer(props){
    
    const style={color:"red"};

       //............state..............
    //    state = {
    //     name:'iam footer state'
    //    }

    return(

       
        <>
        <h1 style={style}>this is footer </h1>

        <h1>{ props.name}</h1>
          </>

    );
}

export default Footer;