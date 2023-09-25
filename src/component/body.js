function Body(props){
    
    const style={color:"red"};

       //............state..............
  
// Define a state variable using useState
  const [name, setName] = useState('I am nav state');


    return(

       
        <>
        <h1 style={style}>this is body </h1>
        <h1>{props.title}</h1>
          </>

    );
}

export default Body;