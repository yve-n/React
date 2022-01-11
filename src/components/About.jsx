import { Link, Outlet } from "react-router-dom";
import Card from "./Card";
const About = () => {
    const persons = [
        { "name": "Yve", "age": 25 , profile: '/about-us/yve' },
        { "name": "Amel", "age": 4 },
        { "name": "Noam", "age": 1 }
      ];
    return (
        <>
        {persons.map((person,index) =>{
            return(
            <Card key={index} data={{title:person.name, text:person.age, cta:person.profile}}/>
        )
        })}

        <Outlet />

        </>
    )
}
export default About;