import { useContext, useState, useEffect } from "react";
import Context from "../Context";
import axios from "axios";

export default function Home() {


  const { setUsuario: setUsuarioGlobal } = useContext(Context);

  // const [usuario, setUsuarioLocal] = useState({});
  const [correo, setCorreo] = useState("");
  const [rool, setRool] = useState("");
  const [leng, setLeng] = useState("");
  
 
  
  const getUsuarioData = async () => {
    const urlServer = "http://localhost:3001";
    const endpoint = "/usuarios";
    const token = localStorage.getItem("token");
    try {
      const { data } = await axios.get(urlServer + endpoint, {
        headers: { Authorization: "Bearer " + token },
      });
      setUsuarioGlobal(data);
      // setUsuarioLocal(data);
     
      setCorreo(data[0].email);
      setRool(data[0].rol);
      setLeng(data[0].lenguage);
    
    } catch ({ response: { data: message } }) {
      alert(message + " 🙁");
      console.log(message);
    }
  };

  useEffect(() => {
    getUsuarioData();
  },[]);

  return (
    <div className="py-5">
      <h1>
        Bienvenido <span className="fw-bold">{correo}</span>
      </h1>
      <h3>
      {rool} en <i>{leng}</i>
      </h3>
    </div>
  );

  


 

 


}
