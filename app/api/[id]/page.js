import Navbar1 from "@/app/Conponents/Navbar1";
import Navbar2 from "@/app/Conponents/Navbar2";
export default function first(context) {

  console.log(context.searchParams);
  const component=context.searchParams.web;
  return <div>
    {(component=="comp1")?
      <comp1/>:<comp2/>}
      {/* {component} */}
      <Navbar1/>
      <Navbar2/>
      <h1>working</h1>
    </div>;
}
