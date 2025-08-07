import { h1 } from "ziko"
const Hello=({name})=>{
    return h1(`Hello ${name}`).style({
        color : "gold",
    })
}
export default Hello