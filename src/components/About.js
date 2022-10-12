import React from "react";
import {Collapsible,CollapsibleItem,Container,Icon,} from "react-materialize";
export default function About() {
    return (
        <Container>
            <h3>About us</h3>
            <Collapsible
  accordion
  popout className="about-popup"
>
  <CollapsibleItem
    expanded={false}
    header="Adress for my email if you needed"
    icon={<Icon>email</Icon>}
    node="div"
  >
    khanhncse161540@fpt.edu.vn
  </CollapsibleItem>
  <CollapsibleItem
    expanded={false}
    header="About my fanpage"
    icon={<Icon>tag_faces</Icon>}
    node="div"
  >
   <p><a href="https://www.facebook.com/CongKhanh1712/">please click on to go to my fanpage</a></p>
  </CollapsibleItem>
  <CollapsibleItem
    expanded={false}
    header="Here are the link to my patreon donation, Please consider donation so us can grow together"
    icon={<Icon>money</Icon>}
    node="div"
  >
    <p><a href="https://www.patreon.com/home">please click on to go to my patreon</a></p>
  </CollapsibleItem>
</Collapsible>
        </Container>
        
    );
}