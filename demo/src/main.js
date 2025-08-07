import {Flex} from "ziko"
import Hello from "./components/Hello.js"
Flex(
  Hello({name : "world"})
).size("100vw","100vh").vertical(0, 0).style({
  background : "darkblue",
  color : "gold",
  margin : "0px",
  overflow : "hidden"
})