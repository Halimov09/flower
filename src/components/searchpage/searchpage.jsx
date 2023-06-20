import { useEffect, useState } from "react";
import { asosiy, pioni } from "../../constants";
import Flower from "../flower/flower";
import {Link} from "react-router-dom"

const Searchpage = ({searc}) => {
    const [equal, setequal] = useState([])
    const [all, setall] = useState([])
    useEffect(() => {
        setall([...asosiy, ...pioni])
    }, [searc])
    console.log(all);
    useEffect(() => {
        const equale = () =>{
            all.map((item) => {
                if (item.name.toLowerCase().includes(searc.toLowerCase())) {
                console.log(item);
                setequal([item])
            }else{
                console.log(false);
            }
            
        })
    }
    equale()
}, [searc])
console.log(equal);
  return (

    <div>
    <Link hrefLang="/flower"><Flower  items={equal}/></Link>
    </div>
  )
}

export default Searchpage